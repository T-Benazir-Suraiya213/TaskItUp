import React from 'react';
import { Link } from 'react-router-dom';

const TaskListItem = ({ task, onEditTask, onDeleteTask }) => {
  return (
    <li>
      {/* Link to the TaskDetailsPage */}
      <Link to={`/task/${task.id}`}>
        <h3>{task.title}</h3>
      </Link>
      <p>Status: {task.completed ? 'Completed' : 'In Progress'}</p>
      {/* Edit button */}
      <button onClick={() => onEditTask(task.id)}>Edit</button>
      {/* Delete button */}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskListItem;
