const express = require("express");
const dbConnect = require("./dbConnect");
const { getAuthCheck } = require("./requireUser/AuthCheck");
const { getProtectedRoute } = require("./controller/AuthController");

const app = express();
const port = 5000;
app.use(express.json({ limit: "10mb" }));

app.get("/", async (req, res) => {
  res.send("Hello from server!");
});

app.get("/home", getAuthCheck, async (req, res) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const resData = await response.json();
  res.send(resData);
});

app.post("/signup", getProtectedRoute);

dbConnect();

app.listen(port, () => {
  console.log(`Server is listning on ${port}.`);
});
