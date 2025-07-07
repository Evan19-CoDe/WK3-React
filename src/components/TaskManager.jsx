import { useContext } from 'react';
import TaskForm from './TaskForm.jsx';
import TaskFilter from './TaskFilter.jsx';
import TaskList from './TaskList.jsx';
import { TaskContext } from '../context/TaskContext.jsx';

// Component to manage task creation, filtering, and listing
function TaskManager() {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskForm />
      <TaskFilter />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default TaskManager;