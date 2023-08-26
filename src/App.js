import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage/WelcomePage';
import HomePage from './components/HomePage/HomePage';
import ProgressPage from './components/ProgressPage/ProgressPage';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import TaskDetailsPage from './components/TaskDetailsPage/TaskDetailsPage';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', completed: true },
    { id: 2, title: 'Task 2', completed: false },
    { id: 3, title: 'Task 3', completed: true },
    { id: 4, title: 'Task 4', completed: true },
  ]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/progress" element={<ProgressPage tasks={tasks} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/task/:title" element={<TaskDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
