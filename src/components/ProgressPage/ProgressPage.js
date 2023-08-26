import React, { useEffect, useState } from 'react';
import './ProgressPage.css';
import Navbar from '../Navbar/Navbar';
import ProgressChart from './ProgressChart';

const ProgressPage = () => {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const completedTasksCount = tasks.filter((task) => task.completed).length;
  const inProgressTasksCount = tasks.filter((task) => !task.completed).length;
  const totalTasks = tasks.length;
  const progress = (completedTasksCount / totalTasks) * 100;

  const getProgressText = () => {
    if (progress === 100) return 'Congratulations! All tasks completed.';
    if (progress >= 50) return 'You are making good progress!';
    return 'Keep going, you can do it!';
  };

  const generateChartData = () => {
    const groupedData = tasks.reduce((acc, { deadline, completed }) => {
      const date = deadline;
      acc[date] = (acc[date] || 0) + (completed ? 1 : 0);
      return acc;
    }, {});

    return Object.entries(groupedData).map(([date, completedCount]) => ({ date, completedCount }));
  };

  const chartData = generateChartData();

  return (
    <div className="progress-page">
      <Navbar completedTasksCount={completedTasksCount} />
      <h2>Task Progress</h2>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          {progress.toFixed(1)}%
        </div>
      </div>
      <p>Completed tasks: {completedTasksCount}/{totalTasks}</p>
      <p>In Progress tasks: {inProgressTasksCount}/{totalTasks}</p>
      <p id="t3">{getProgressText()}</p>

      <ProgressChart taskData={chartData} />
    </div>
  );
};

export default ProgressPage;


