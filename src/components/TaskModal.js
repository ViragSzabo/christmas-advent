import React from "react";
import "../styles/Calendar.css";

const TaskModal = ({ task, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Today's Task</h2>
        <p>{task}</p>
        <button onClick={onClose} aria-label="Close task modal">Close</button>
      </div>
    </div>
  );
};

export default TaskModal;