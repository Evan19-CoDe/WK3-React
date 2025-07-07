import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext.jsx';

// Component for filtering tasks
function TaskFilter() {
  const { setFilter } = useContext(TaskContext);

  return (
    <div className="mb-4">
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}

export default TaskFilter;