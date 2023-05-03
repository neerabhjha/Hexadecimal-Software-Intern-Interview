const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://NeerDB:L78UlXlTFLutVPHf@neercluster.fyi9egt.mongodb.net/practiceDB",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to DB!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
