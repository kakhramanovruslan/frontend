import React from "react";
import Task from "./Task";

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
    return (
        <div className="task-list">
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onToggleTask={onToggleTask}
                        onDeleteTask={onDeleteTask}
                    />
                ))
            ) : (
                <p className="no-tasks">No tasks yet. Add one!</p>
            )}
        </div>
    );
}

export default TaskList;