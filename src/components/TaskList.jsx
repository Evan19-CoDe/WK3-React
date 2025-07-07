import TaskItem from './TaskItem.jsx';

// Component to render the list of tasks
function TaskList({ tasks }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;