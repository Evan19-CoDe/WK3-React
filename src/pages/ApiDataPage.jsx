import ApiDataList from '../components/ApiDataList.jsx';

// Page for displaying API data
function ApiDataPage() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">API Data</h1>
      <ApiDataList />
    </div>
  );
}

export default ApiDataPage;