import { useEffect, useState } from 'react';
import { fetchApiData } from '../services/Api.js';

// Component to fetch and display API data
function ApiDataList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApiData()
      .then((response) => setData(response.data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <ul className="space-y-2">
      {data.map((item) => (
        <li key={item.id} className="p-2 border rounded">
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default ApiDataList;