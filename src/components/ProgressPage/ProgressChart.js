
import './ProgressChart.css';


import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProgressChart = ({ taskData }) => {
  // Sort the taskData array by date in ascending order
  const sortedTaskData = taskData.slice().sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="progress-chart">
      <h2>Task Completion Chart</h2>
      <div style={{ height: '300px' }}>
        <ResponsiveContainer width="100%">
          <LineChart data={sortedTaskData}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="completedCount" name="Completed Tasks" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProgressChart;
