// TaskList.js
import React from 'react';
import TaskSection from './TaskSection';
import './TaskSection.css'; // Import the TaskSection styles
import './TaskList.css'; // Import the TaskList styles

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
            title: 'Work',
            tasks: [
                { description: 'Complete project', category: 'Work' },
                { description: 'Attend meeting', category: 'Work' },
            ],
        },
        {
            title: 'Work',
            tasks: [
                { description: 'Complete project', category: 'Work' },
                { description: 'Attend meeting', category: 'Work' },
            ],
        }, {
            title: 'Work',
            tasks: [
                { description: 'Complete project', category: 'Work' },
                { description: 'Attend meeting', category: 'Work' },
            ],
        }, {
            title: 'Work',
            tasks: [
                { description: 'Complete project', category: 'Work' },
                { description: 'Attend meeting', category: 'Work' },
            ],
        },
        // Add more sections as needed
    ];

    return (
        <div className="task-list">
            {sections.map((section, index) => (
                <TaskSection key={index} sectionTitle={section.title} tasks={section.tasks} />
            ))}
        </div>
    );
}

export default TaskList;
