import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./index.css";

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    };

    const toggleTaskCompletion = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <div className="app-container">
            <h1>To-Do App</h1>
            <AddTask onAddTask={addTask} />
            <TaskList
                tasks={tasks}
                onToggleTask={toggleTaskCompletion}
                onDeleteTask={deleteTask}
            />
        </div>
    );
}

export default App;