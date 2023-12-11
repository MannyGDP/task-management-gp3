// TaskSection.js
import React from 'react';
import Task from './Task';
import './TaskSection.css'; // Import the CSS file for styling

function TaskSection({ sectionTitle, tasks }) {
    return (
        <div className="task-section">
            <h2>{sectionTitle}</h2>
            {tasks.map((task, index) => (
                <Task key={index} description={task.description} category={task.category} />
            ))}
        </div>
    );
}

export default TaskSection;
