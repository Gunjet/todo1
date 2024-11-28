"use client"
// import Image from "next/image";
// import "./globals.css"

// const tasks = [
//   { id: 1, status: "done", task: "cleaning" },
//   { id: 2, status: "in-progress", task: "reading" },
//   { id: 3, status: "blocked", task: "walking" }
// ];

// export default function Tasks() {
//   return (
//     <div className="task-container">
//       {tasks.map(task => (
//         <Todo key={task.id} task={task} />
//       ))}
//     </div>
//   );
// }

// export function Todo({task }) {
//   return (
//     <div className="task">
//     <h2>{task.status}</h2>
//     <p className="task"> {task.task}</p>
//     </div>
//   );
// }


import { useState } from 'react';

export default function MyInput() {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText('')}>
        Reset
      </button>
    </>
  );
}


