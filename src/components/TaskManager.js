import React from "react";
import "../App.css";
const TaskManager = () => {
    //Inside TaskManager.js, define a state tasks using the useState hook.
    //Initialize it with an empty array. Each task will be an object with id, title, and completed properties.
    const [tasks, setTasks] = React.useState([]);
    //Adding Tasks: id,title,completed boolean
    const addTask = () => {
        const newTask = {
            id: Date.now(),
            title: `Task ${tasks.length + 1}`,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    const toggleTaskCompletion = (taskId) => {
        setTasks(
          tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          )
        );
      };
    
    return (
        <div>
          <h2>Task Manager</h2>
          <button onClick={addTask}>Add Task</button>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                {task.title} - {task.completed ? "Completed" : "Pending"}
                <button onClick={() => toggleTaskCompletion(task.id)}>
                  Toggle
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
export default TaskManager;