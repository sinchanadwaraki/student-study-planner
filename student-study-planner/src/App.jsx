import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div className="app">
      <h1>Student Study Planner</h1>
      <p>Plan your studies and stay organized.</p>

      <div className="task-section">
        <h2>📝 My Tasks</h2>

        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>

        <ul>
          {tasks.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;