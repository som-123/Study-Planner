import React from 'react';
import { NavLink } from 'react-router-dom';
import "../stylesheets/Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        EazeStudy
      </div>

      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-task" activeClassName="active">
            Add Task
          </NavLink>
        </li>
        <li>
          <NavLink to="/view-tasks" activeClassName="active">
            View Tasks
          </NavLink>
        </li>
        <li>
          <NavLink to="/calendar" activeClassName="active">
            Calendar
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
