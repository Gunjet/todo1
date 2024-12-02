

"use client";

import { useState } from "react";
import "./globals.css";

const data=[]
async function fetchData(){
  const response = await fetch ('https://api.thecatapi.com/v1/images/0XYvRd7oD')
  const data = await response.json();
  console.log(data);
  return(data);
}

// export default function Page() {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };
//   const closeModal = () => {
//     setIsOpen(false);
//   };
//   return (
//     <div>
//       <button onClick={openModal}>add</button>
//       {isOpen && (
//         <div
//           style={{
//             height: "100vh",
//             backgroundColor: "rgba(0,0,0,0.5)",
//             alignContent: "center",
//           }}
//         >
//           <div
//             style={{
//               height: 500,
//               width: 800,
//               backgroundColor: "white",
//               borderRadius: 16,
//               margin: "auto",
//               padding: 48,
//             }}
//             >
//             <button onClick={closeModal}>close</button>
//             <input
//               style={{
//                 width: 256,
//                 height: 56,
//                 border: "1px solid black",
//                 padding: 4,
//               }}
//               placeholder="task"
//             ></input>
//           </div>
//         </div>
//       )}
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
