import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTasks, deleteTask, updateTask } from '../tasks';
import '../stylesheets/ViewTasks.css'; // Import your CSS file for styling

const ViewTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filterSubject, setFilterSubject] = useState('');
  const [filterPriority, setFilterPriority] = useState('');
  const [filterCompleted, setFilterCompleted] = useState('all'); // 'all', 'completed', 'incomplete'

  useEffect(() => {
    const allTasks = getTasks();
    setTasks(allTasks);
    setFilteredTasks(allTasks);
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      deleteTask(id);
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);
      setFilteredTasks(updatedTasks);
    }
  };

  const handleComplete = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        const updatedTask = { ...task, isComplete: !task.isComplete };
        updateTask(id, updatedTask);
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleFilterSubject = (e) => {
    const subject = e.target.value;
    setFilterSubject(subject);
    applyFilters(subject, filterPriority, filterCompleted);
  };

  const handleFilterPriority = (e) => {
    const priority = e.target.value;
    setFilterPriority(priority);
    applyFilters(filterSubject, priority, filterCompleted);
  };

  const handleFilterCompleted = (filter) => {
    setFilterCompleted(filter);
    applyFilters(filterSubject, filterPriority, filter);
  };

  const applyFilters = (subject, priority, completedFilter) => {
    let filtered = tasks;

    if (subject) {
      filtered = filtered.filter((task) => task.subject.toLowerCase().includes(subject.toLowerCase()));
    }
    if (priority) {
      filtered = filtered.filter((task) => task.priority === priority);
    }
    if (completedFilter === 'completed') {
      filtered = filtered.filter((task) => task.isComplete);
    } else if (completedFilter === 'incomplete') {
      filtered = filtered.filter((task) => !task.isComplete);
    }

    setFilteredTasks(filtered);
  };

  // Extracting unique subjects from tasks
  const subjects = [...new Set(tasks.map((task) => task.subject))];

  return (
    <div>
      <h2>View Tasks</h2>
      <div className="filters">
        <h3>Filters: </h3>
        <div>
          <label>Subject: </label>
          <select value={filterSubject} onChange={handleFilterSubject}>
            <option value="">All</option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Priority: </label>
          <select value={filterPriority} onChange={handleFilterPriority}>
            <option value="">All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div>
          <label>Completion: </label>
          <select value={filterCompleted} onChange={(e) => handleFilterCompleted(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </div>

      <div className="tasks">
        {filteredTasks.map((task) => (
          <div key={task.id} className={`task ${task.isComplete ? 'completed' : ''}`}>
            <div>
              <h3>{task.taskName}</h3>
              <p> <span style={{fontWeight:"600"}}>Subject:</span> {task.subject}</p>
              <p> <span style={{fontWeight:"600"}}>Description:</span> {task.description}</p>
              <p> <span style={{fontWeight:"600"}}>Due-Date:</span> {task.dueDate}</p>
              <p> <span style={{fontWeight:"600"}}>Priority: </span>{task.priority}</p>
            </div>
            
            <div className="options">
              <input type="checkbox" checked={task.isComplete} onChange={() => handleComplete(task.id)}/>
              <span className="material-symbols-outlined" onClick={() => handleDelete(task.id)}>delete</span>
              <Link to={`/edit-task/${task.id}`}><span class="material-symbols-outlined edit">edit_note</span></Link>
            </div>
            
          </div>
        ))}
      </div>

    </div>
  );
};

export default ViewTasks;
