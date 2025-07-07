import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext.jsx';

// Component for individual task items
function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useContext(TaskContext);

  return (
    <li className="flex justify-between items-center p-2 border rounded">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="mr-2"
        />
        <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;