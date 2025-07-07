import { createContext, useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.jsx';

export const TaskContext = createContext();

// Context provider for task management
export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks based on status
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    return !task.completed;
  });

  return (
    <TaskContext.Provider
      value={{ tasks: filteredTasks, addTask, toggleTask, deleteTask, setFilter }}
    >
      {children}
    </TaskContext.Provider>
  );
}