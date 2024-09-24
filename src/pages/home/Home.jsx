
import { useEffect, useState } from 'react';
import DataTable from '../../components/dataTable/DataTable';

function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const columns = [
    { key: "name", header: "Name" },
    { key: "age", header: "Age" },
    { key: "email", header: "Email" },
  ];

  // Simulating data fetch
  useEffect(() => {
    setTimeout(() => {
      setData([
        { name: "John Doe", age: 28, email: "john@example.com" },
        { name: "Jane Smith", age: 34, email: "jane@example.com" },
        { name: "Mike Johnson", age: 45, email: "mike@example.com" },
      ]);
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <h2>Dynamic DataTable with Loader</h2>
      <DataTable columns={columns} data={data} loading={loading} />
    </div>
  )
}


export default Home