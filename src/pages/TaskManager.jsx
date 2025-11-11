import React, { useState } from "react";
import Button from "../components/Button.jsx";
import "../App.css";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Add new task
  const addTask = () => {
    if (newTask.trim() === "") return; // Prevent empty tasks
    setTasks([...tasks, newTask.trim()]);
    setNewTask(""); // Clear input
  };

  // Remove task by index
  const removeTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="card mt-8">
      <h2>Task Manager</h2>
      <div className="task-form">
        <input
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="input"
        />
        <Button variant="primary" size="md" onClick={addTask}>
          Add Task
        </Button>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks yet. Add a task above!</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              {task}
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeTask(index)}
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
