import React, { useState, useEffect } from "react";
import "../styles/Calendar.css";

const Countdown = () => {
  const [countdownDate] = useState(new Date(2024, 11, 1)); // December 1st
  const [currentCountdown, setCurrentCountdown] = useState("");
  const [isDecember, setIsDecember] = useState(false);

  const calculateCountdown = (targetDate) => {
    const today = new Date();
    const timeDifference = targetDate - today;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysLeft >= 0 ? daysLeft : 0;
  };

  useEffect(() => {
    const today = new Date();
    if (today.getMonth() === 11 && today.getDate() >= 1) {
      setIsDecember(true);
      const christmasDate = new Date(today.getFullYear(), 11, 25);
      const daysUntilChristmas = calculateCountdown(christmasDate);
      setCurrentCountdown(daysUntilChristmas);
    } else {
      setIsDecember(false);
      const daysUntilDecember = calculateCountdown(countdownDate);
      setCurrentCountdown(daysUntilDecember);
    }
  }, [currentCountdown, countdownDate]);

  return (
    <div className="countdown-container">
      <h2 className="countdown-text">
        {isDecember
          ? `🎄 ${currentCountdown} nap van hátra karácsonyig 🎄`
          : `⏳ ${currentCountdown} nap van hátra December 1-ig ⏳`}
      </h2>
    </div>
  );
};

export default Countdown;