import React, { useState, useRef } from "react";
import "../styles/Calendar.css";
import { tasks } from "../data/tasks";
import TaskModal from "./TaskModal";
import jingleSound from "../assets/christmas-winter.mp3";
import Countdown from "./Countdown";
import Snowflakes from "./Snowflakes";

const AdventCalendar = () => {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth(); // 0 = January, 11 = December
  const [selectedTask, setSelectedTask] = useState(null);
  const audioRef = useRef(null);
  const [hoveredDay, setHoveredDay] = useState(null); // Track the hovered window

  // Play jingle sound when opening a task
  const playJingle = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // Stop any current audio
      audioRef.current.currentTime = 0; // Reset audio
      audioRef.current.play(); // Play new audio
    }
  };

  // Open the task for the selected day
  const openTask = (day) => {
    if (currentMonth === 11 && day <= currentDay) {
      setSelectedTask(tasks[day - 1]);
      playJingle();
    } else {
      setSelectedTask(null);
    }
  };

  // Close the task modal
  const closeTask = () => {
    setSelectedTask(null);
  };

  // Get the number of days until a window opens
  const getDaysUntilOpen = (day) => {
    if (currentMonth === 11 && day > currentDay) {
      return day - currentDay;
    }
    return 0;
  };

  return (
    <div className="calendar">
      <h1>🎄 Christmas Advent Calendar 🎄</h1>

      {/* Countdown and Snowflakes */}
      <Countdown />
      <Snowflakes />

      <div className="grid">
        {Array.from({ length: 24 }, (_, i) => {
          const daysUntilOpen = getDaysUntilOpen(i + 1);
          return (
            <div
              key={i}
              className={`window ${currentMonth === 11 && i + 1 <= currentDay ? "unlocked" : "locked"}`}
              onClick={() => currentMonth === 11 && i + 1 <= currentDay && openTask(i + 1)}
              onMouseEnter={() => setHoveredDay(i + 1)}
              onMouseLeave={() => setHoveredDay(null)}
              role="button"
              aria-label={
                i + 1 <= currentDay
                  ? `Day ${i + 1} unlocked. Click to open.`
                  : `Day ${i + 1} locked. Opens in ${daysUntilOpen} day${daysUntilOpen > 1 ? "s" : ""}.`
              }
            >
              {i + 1}

              {hoveredDay === i + 1 && i + 1 > currentDay && currentMonth === 11 && (
                <div className="tooltip">
                  🎅 Hold on! This window will unlock in {daysUntilOpen} day
                  {daysUntilOpen > 1 ? "s" : ""}.
                </div>
              )}
            </div>
          );
        })}
      </div>

      <audio ref={audioRef} src={jingleSound} />

      {selectedTask && <TaskModal task={selectedTask} onClose={closeTask} />}
    </div>
  );
};

export default AdventCalendar;