// Task.js
import React, { useState } from 'react';

function Task({ description, category }) {
    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };

    return (
        <div>
            <label>
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                {isChecked ? 'Task Selected' : null} - {description} - Category: {category}
            </label>
            {/* Other task-related content */}
        </div>
    );
}

export default Task;
