import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const [subject, setSubject] = useState("");
  const [subjects, setSubjects] = useState([
    "Java",
    "Python",
    "Mathematics",
    "DBMS",
    "Computer Networks"
  ]);

  const timetable = [
    { time: "9:00 AM", subject: "Java", room: "Room 101" },
    { time: "10:00 AM", subject: "Mathematics", room: "Room 203" },
    { time: "11:00 AM", subject: "Python", room: "Lab 2" },
    { time: "1:00 PM", subject: "DBMS", room: "Room 105" }
  ];

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const addSubject = () => {
    if (subject.trim() === "") return;

    setSubjects([...subjects, subject]);
    setSubject("");
  };

  return (
    <div className="app">
      <h1>Student Study Planner</h1>
      <p>Plan your studies and stay organized.</p>

      {/* SUBJECTS */}
      <div className="subject-section">
        <h2>📚 My Subjects</h2>

        <input
          type="text"
          placeholder="Enter a subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <button onClick={addSubject}>Add Subject</button>

        <ul>
          {subjects.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* TASKS */}
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

      {/* TIMETABLE */}
      <div className="timetable">
        <h2>📅 Today's Timetable</h2>

        {timetable.map((item, index) => (
          <div className="class-item" key={index}>
            <strong>{item.time}</strong>
            <span>{item.subject}</span>
            <span>{item.room}</span>
          </div>
        ))}
      </div>

      {/* PROGRESS */}
      <div className="progress-section">
        <h2>📊 Study Progress</h2>

        <p>3 / 4 tasks completed</p>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <p>75% Completed</p>
      </div>
    </div>
  );
}

export default App;