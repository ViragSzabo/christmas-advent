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
        <h2 id="modal-title">❄️ Napi Feladat ❄️</h2>
        <p id="modal-description">{task.text}</p>
        {task.downloadLink ? (
          <a
            href={task.downloadLink}
            download
            className="download-link"
            aria-label="Download file"
          >
            📥 Letöltés
          </a>
        ) : (
          <p className="error-message">A fájl nem érhető el.</p>
        )}
        <button onClick={onClose} className="close-button" aria-label="Close">
          Bezár
        </button>
      </div>
    </div>
  );
};

TaskModal.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
    downloadLink: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TaskModal;