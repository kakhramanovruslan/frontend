import React from "react";

function Task({ task, onToggleTask, onDeleteTask }) {
    return (
        <div className={`task-item ${task.completed ? "completed" : ""}`}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleTask(task.id)}
                className="task-checkbox"
            />
            <span className="task-text">{task.text}</span>
            <button
                className="delete-task-button"
                onClick={(e) => {
                    onDeleteTask(task.id);
                }}
            >
                Delete
            </button>
        </div>
    );
}

export default Task;
