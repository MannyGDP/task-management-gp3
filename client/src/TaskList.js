// TaskList.js
import React from 'react';
import TaskSection from './TaskSection';
import './TaskSection.css'; // Import the CSS file for styling

function TaskList() {
    const sections = [
        {
            title: 'Personal',
            tasks: [
                { description: 'Exercise', category: 'Health' },
                { description: 'Read a book', category: 'Leisure' },
            ],
        },
        {
            title: 'Work',
            tasks: [
                { description: 'Complete project', category: 'Work' },
                { description: 'Attend meeting', category: 'Work' },
            ],
        },
        {
            title: 'Manny',
            tasks: [
                { description: 'Complete project', category: 'Work' },
                { description: 'Attend meeting', category: 'Work' },
            ],
        },
        // Add more sections as needed
    ];

    return (
        <div>
            {sections.map((section, index) => (
                <TaskSection key={index} sectionTitle={section.title} tasks={section.tasks} />
            ))}
        </div>
    );
}

export default TaskList;
