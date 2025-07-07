import { Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import TaskPage from './pages/TaskPage.jsx';
import ApiDataPage from './pages/ApiDataPage.jsx';

// Main application component with routing and context providers
function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tasks" element={<TaskPage />} />
            <Route path="api-data" element={<ApiDataPage />} />
          </Route>
        </Routes>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;