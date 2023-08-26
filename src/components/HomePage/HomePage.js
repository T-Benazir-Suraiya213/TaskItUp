import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import Modal from 'react-modal';
import TaskForm from '../TaskForm/TaskForm';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Retrieve the tasks from local storage or set an empty array if not present
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);

  useEffect(() => {
    // Save the updated tasks to local storage whenever tasks change
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setIsTaskFormOpen(false);
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleMarkAsCompleted = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="homepage">
      <Navbar />
      <div className="content">
        <button className="add-task-button" onClick={() => setIsTaskFormOpen(true)}>
          Add New Task
        </button>

        {/* Task List */}
        <div className="task-list-container">
          <h2>Task List</h2>
          <ul>
            {tasks.map((task) => (
              
              <li key={task.id}>
                <Link to={`/task/${task.title}`} style={{ textDecoration: 'none' }}>
                  <h3>{task.title}</h3>
                 </Link>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleMarkAsCompleted(task.id)}
                />
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </li>
               
            ))}
          </ul>
        </div>
      </div>

      <Modal
        isOpen={isTaskFormOpen}
        onRequestClose={() => setIsTaskFormOpen(false)}
        contentLabel="Add Task"
        ariaHideApp={false}
      >
        <TaskForm onAddTask={handleAddTask} onClose={() => setIsTaskFormOpen(false)} />
      </Modal>

      
    </div>
  );
};

export default HomePage;




