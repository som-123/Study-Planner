import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveTask } from '../tasks';
import "../stylesheets/AddTask.css"

const AddTask = () => {
  const [task, setTask] = useState({
    taskName: '',
    description: '',
    subject: '',
    dueDate: '',
    priority: 'Low',
    isComplete: false,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.taskName && task.description && task.subject && task.dueDate) {
      saveTask(task);
      navigate('/view-tasks');
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="taskName">
          <div>Task Name: </div>
          <input name="taskName" value={task.taskName} onChange={handleChange} placeholder="Task Name" required />
        </div>
        
        <div className="description">
          <div>Description</div>
          <textarea name="description" value={task.description} onChange={handleChange} placeholder="Description" required />
        </div>

        <div className="subject">
          <div>Subject: </div>
          <input name="subject" value={task.subject} onChange={handleChange} placeholder="Subject" required />
        </div>
        
        <div className="date">
          <div>Date: </div>
          <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
        </div>
        
        <div className="priority">
          <div>Priority: </div>
          <select name="priority" value={task.priority} onChange={handleChange}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        
        <button className="styled-btn" type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
