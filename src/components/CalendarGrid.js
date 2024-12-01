import React, { useState } from "react";
import { tasks } from "../data/tasks";
import TaskModal from "./TaskModal";
import "../styles/Calendar.css";
import JinglePlayer from "./JinglePlayer";

const CalendarGrid = () => {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const [selectedTask, setSelectedTask] = useState(null);
  const [shouldPlayJingle, setShouldPlayJingle] = useState(false);
  const [hoveredDay, setHoveredDay] = useState(null);
  const isDecember = currentMonth === 11;
  const [openedWindows, setOpenedWindows] = useState(() => {
    const stored = localStorage.getItem("openedWindows");
    return stored ? JSON.parse(stored) : [];
  });

  const fallbackTask = {
    title: "Meglepetés!",
    description:
      "Élvezd ezt a csodálatos, varázslatos időszakot 🎄✨",
  };

  const isUnlocked = (day) => (isDecember && day <= currentDay);
  const isAlreadyOpened = (day) => openedWindows.includes(day);

  // Open and save the task for the selected day
  const openTask = (day) => {
    if (isUnlocked(day)) {
      const task = tasks?.[day - 1] || fallbackTask;
      setSelectedTask(task);
      setShouldPlayJingle(true);
      setOpenedWindows((prev) => {
        const updated = [...prev, day];
        localStorage.setItem("openedWindows", JSON.stringify(updated));
        return updated;
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Close the task modal
  const closeTask = () => {
    setSelectedTask(null);
    setShouldPlayJingle(false);
  };

  // Get the number of days until a window opens
  const getDaysUntilOpen = (day) => {
    if (currentMonth === 11 && day > currentDay) {
      return day - currentDay;
    }
    return day;
  };
  
  return (
    <div>
      <div className="grid">
        {Array.from({ length: 24 }, (_, i) => {
          const day = i + 1;
          const daysUntilOpen = getDaysUntilOpen(day);
          return (
            <div
              key={i}
              className={`window ${
                isAlreadyOpened(day)
                  ? "opened"
                  : isUnlocked(day)
                  ? "unlocked"
                  : "locked"
              }`}
              onClick={() => openTask(day)}
              onMouseEnter={() => setHoveredDay(i + 1)}
              onMouseLeave={() => setHoveredDay(null)}
              role="button"
              aria-label={
                isUnlocked(day)
                  ? `Day ${day} ${
                      isAlreadyOpened(day) ? "already opened" : "unlocked"
                    }. Click to open.`
                  : `Day ${day} locked. Opens in ${daysUntilOpen} day${
                      daysUntilOpen > 1 ? "s" : ""
                    }.`
              }
            >
              {day}
              {hoveredDay === day && !isUnlocked(day) && (
                <div className="tooltip">
                  🎅 Várj! Gyere vissza {daysUntilOpen} napon belül.
                </div>
              )}
            </div>
          );
        })}
        <JinglePlayer shouldPlay={shouldPlayJingle} />
        {selectedTask && <TaskModal task={selectedTask} onClose={closeTask} />}
      </div>
    </div>
  );
};

export default CalendarGrid;