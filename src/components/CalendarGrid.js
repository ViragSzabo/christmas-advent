import React from "react";

const CalendarGrid = ({ currentMonth, currentDay, openTask, setHoveredDay, hoveredDay }) => {
  const getDaysUntilOpen = (day) => {
    if (currentMonth === 11 && day > currentDay) {
      return day - currentDay;
    }
    return 0;
  };

  return (
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
  );
};

export default CalendarGrid;