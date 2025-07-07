import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext.jsx';

// Component for adding new tasks
function TaskForm() {
  const [input, setInput] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new task"
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;