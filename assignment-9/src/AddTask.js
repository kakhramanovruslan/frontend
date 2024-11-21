import React, { useState } from "react";

function AddTask({ onAddTask }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onAddTask(inputValue);
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-task-form">
            <input
                type="text"
                placeholder="Enter a new task..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="task-input"
            />
            <button type="submit" className="add-task-button">
                Add Task
            </button>
        </form>
    );
}

export default AddTask;