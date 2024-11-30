import React from "react";
import PropTypes from "prop-types";
import "../styles/Calendar.css";

const TaskModal = ({ task, onClose }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div
      className="task-modal-overlay"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      tabIndex="-1"
      onKeyDown={handleKeyDown}
    >
      <div className="task-modal-content">
        <h2 id="modal-title">❄️ Task of the Day ❄️</h2>
        <p id="modal-description">{task}</p>
        <button onClick={onClose} className="close-button" aria-label="Close">
          Close
        </button>
      </div>
    </div>
  );
};

TaskModal.propTypes = {
  task: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TaskModal;