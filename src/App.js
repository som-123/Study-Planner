import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";import NavBar from './components/NavBar';
import Home from './components/Home';
import AddTask from './components/AddTask';
import ViewTasks from './components/ViewTasks';
import EditTask from './components/EditTask';
import CalendarPage from './components/CalendarPage';
import About from './components/About';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <div className='container'>
          <Routes>
            <Route path="/" exact element={<Home/>} ></Route>
            <Route path="/add-task" element={<AddTask/>} ></Route>
            <Route path="/view-tasks" element={<ViewTasks/>} ></Route>
            <Route path="/edit-task/:id" element={<EditTask />} ></Route>
            <Route path="/calendar" element={<CalendarPage/>} ></Route>
            <Route path="/about" element={<About/>} ></Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
