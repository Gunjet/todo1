
function TodoList() {
  const [tasks, setTasks] = useState([
  {
  id: 1,
  text: 'Doctor Appointment',
  completed: true
  },
  {
  id: 2,
  text: 'Meeting at School',
  completed: false
  }
  ]);
  
  const [text, setText] = useState('');
 function addTask(text) {
  const newTask = {
  id: Date.now(),
  text,
  completed: false
  };
  setTasks([tasks, newTask]);
  setText('');
  }
 function deleteTask(id) {
  setTasks(tasks.filter(task => task.id !== id));
  }
 function toggleCompleted(id) {
  setTasks(tasks.map(task => {
  if (task.id === id) {
  return {task, completed: !task.completed};
  } else {
  return task;
  } 
  }));
  }
 return (
  <div className="todo-list">
  {tasks.map(task => (
  <TodoItem
  key={task.id} 
  task={task}
  deleteTask={deleteTask}
  toggleCompleted={toggleCompleted} 
  />
  ))}
 <input
  value={text}
  onChange={e => setText(e.target.value)} 
  />
 <button onClick={() => addTask(text)}>Add</button>
  </div>
  );
 }
 export default TodoList;
 function TodoItem({ task, deleteTask, toggleCompleted }) {
 function handleChange() {
  toggleCompleted(task.id);
  }
  
  return (
  <div className="todo-item">
  <input 
  type="checkbox"
  checked={task.completed}
  onChange={handleChange}
  />
 <p>{task.text}</p>
 <button onClick={() => deleteTask(task.id)}>
  X
  </button>
  </div>
  );
 }

"use client";

import { useState } from "react";
import "./globals.css";

// export default function Tasks() {
//   const [tasks, setTasks] = useState([{ id: 1, task: "cleaning", status: "to-do" }]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [taskName, setTaskName] = useState("");
//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);
//   const addTask = () => {
//     if (taskName.trim()) {
//       const newTask = { id: tasks.length + 1, task: taskName, status: "to-do" };
//       setTasks([...tasks, newTask]);
//       setTaskName(""); 
//       closeModal(); 
//     } else {
//       alert("Please enter a task name!");
//     }
//   };

//   return (
//     <>
//       <button onClick={openModal} className="add-task-btn">
//         Add Task
//       </button>
//       {isModalOpen && (
//         <Modal 
//           taskName={taskName} 
//           setTaskName={setTaskName} 
//           addTask={addTask} 
//           closeModal={closeModal} 
//         />
//       )}
//       <div className="task-container">
//         {tasks.map((task) => (
//           <div key={task.id} className="task">
//             <p>{task.task}</p>
//             <span>{task.status}</span>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export function Modal({ taskName, setTaskName, addTask, closeModal }) {
//   return (
//     <div id="modal" className="modal-open">
//       <div className="modal-content">
//         <h1 className="title2">Enter Task</h1>
//         <div className="modal-top">
//           <input
//             type="text"
//             id="task-name"
//             placeholder="Task name..."
//             value={taskName}
//             onChange={(e) => setTaskName(e.target.value)} 
//           />
//           <button onClick={addTask} className="submit">
//             Submit
//           </button>
//           <button onClick={closeModal} className="cancel">
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// +-
// export default function Numbers() {
//   const [number, setNumber] = useState(0);


//   let changeIndex = () => {
//     console.log(number);
//     setNumber(number - 1);
//   };

//   return <button onClick={changeIndex}>you clicked {number} times</button>;
// }
