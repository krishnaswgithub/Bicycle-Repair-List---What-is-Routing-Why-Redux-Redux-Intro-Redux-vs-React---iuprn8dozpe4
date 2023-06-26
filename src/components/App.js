// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import {
//   addRepair,
//   removeRepair,
//   resolveRepair,
//   updateRepair,
//   editTask,
// } from '../actions';

// const App = ({
//   repairs= [],
//   editMode=false,
//   item={},
//   addRepair=() => {},
//   removeRepair=() => {},
//   resolveRepair=() => {},
//   updateRepair=() => {},
//   editTask=() => {},
// }) => {
//   const [owner, setOwner] = useState('');
//   const [model, setModel] = useState('');
//   const [description, setDescription] = useState('');

//   const handleAddRepair = () => {
//     if (owner.trim() !== '' && model.trim() !== '' && description.trim() !== '') {
//       addRepair(owner, model, description);
//       setOwner('');
//       setModel('');
//       setDescription('');
//     }
//   };

//   const handleUpdateRepair = () => {
//     if (owner.trim() !== '' && model.trim() !== '' && description.trim() !== '') {
//       updateRepair(item.id, owner, model, description);
//       setOwner('');
//       setModel('');
//       setDescription('');
//     }
//   };

//   const handleEditTask = (id, owner, model, description) => {
//     editTask(id, owner, model, description);
//     setOwner(owner);
//     setModel(model);
//     setDescription(description);
//   };

//   return (
//     <div>
//       <h1>Bicycle Repair App</h1>
//       <form onSubmit={(event) => {event.preventDefault()}}>
//         <label htmlFor="owner-text-box">Owner:</label>
//         <input
//           type="text"
//           id="owner-text-box"
//           value={owner}
//           onChange={(e) => setOwner(e.target.value)}
//         />
//         <label htmlFor="model-text-box">Model:</label>
//         <input
//           type="text"
//           id="model-text-box"
//           value={model}
//           onChange={(e) => setModel(e.target.value)}
//         />
//         <label htmlFor="description-text-box">Description:</label>
//         <input
//           type="text"
//           id="description-text-box"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <button onClick={editMode ? handleUpdateRepair : handleAddRepair}>
//           {editMode ? 'Update' : '+'}
//         </button>
//       </form>
//       <ul>
//         {repairs.map((repair) => (
//           <li key={repair.id} className="repair-item">
//             {repair.owner}, {repair.model}, {repair.description}
//             <button  onClick={() => handleEditTask(repair.id, repair.owner, repair.model, repair.description)}>
//               Update
//             </button>
//             <button  onClick={() => removeRepair(repair.id)}>
//               Delete
//             </button>
//             <button  onClick={() => resolveRepair(repair.id)}>
//               {repair.resolved ? 'Undo' : 'Done'}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // const mapStateToProps = (state) => {
// //   return {
// //     repairs: state.items,
// //     item: state.item,
// //     editMode: state.editMode,
// //   };
// // };

// const mapStateToProps = (state) => ({
//   repairs: state.items, // Make sure the property name matches the reducer's state key
//   item: state.item,
//   editMode: state.editMode,
// });

// const mapDispatchToProps = {
//   addRepair,
//   removeRepair,
//   resolveRepair,
//   updateRepair,
//   editTask,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, {Component, useState} from "react";
import '../styles/App.css';
import Form from "./Form";
import List from "./List";

function App() {
  return (
    <div className="App">
      <header>Bicycle Repair App</header>
      <Form />
      <hr></hr>
      <List />
    </div>
  );
}

export default App;
