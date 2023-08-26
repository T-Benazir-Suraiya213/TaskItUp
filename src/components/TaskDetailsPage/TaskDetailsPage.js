import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TaskDetailsPage.css';
import { Link } from 'react-router-dom';


const TaskDetailsPage = () => {
  const { title } = useParams();
  const [taskDetails, setTaskDetails] = useState(null);

  useEffect(() => {
    // Retrieve the tasks from local storage
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Find the task details based on the title parameter
    const foundTask = storedTasks.find((task) => task.title === title);
    setTaskDetails(foundTask);
  }, [title]);

  if (!taskDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="task-details-page">
      <h2>{taskDetails.title}</h2>
      <p>Description: {taskDetails.description}</p>
      <p>Deadline: {taskDetails.deadline}</p>
          <p>Completed: {taskDetails.completed ? 'Yes' : 'No'}</p>
          <Link to="/home">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default TaskDetailsPage;
