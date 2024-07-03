import { v4 as uuidv4 } from 'uuid';

export const getTasks = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

export const saveTask = (task) => {
  const tasks = getTasks();
  const newTask = { ...task, id: uuidv4() };
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const deleteTask = (id) => {
  const tasks = getTasks();
  const updatedTasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
};

export const updateTask = (id, updatedTask) => {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  tasks[taskIndex] = updatedTask;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
