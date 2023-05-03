import { useEffect, useState } from "react";
function App() {
  const [apiData, setApiData] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const resData = await response.json();
    if (searchKey === "") {
      setApiData(resData);
    } else {
      const filteredData = resData.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchKey.toLowerCase()) ||
          item.email.toLowerCase().includes(searchKey.toLowerCase()) ||
          item.id.toString().includes(searchKey)
        );
      });
      setApiData(filteredData);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchKey]);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
        {apiData?.map((item) => {
          return (
            <tr>
              <td>{item?.id}</td>
              <td>{item?.name}</td>
              <td>{item?.email}</td>
              <td>{item?.address?.city}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
