import React, { useEffect } from "react";
import "../styles/Snowflake.css";

const Snowflakes = () => {
  useEffect(() => {
    const snowflakesContainer = document.querySelector(".snowflakes");
    const numberOfSnowflakes = 50;

    // Create snowflakes
    for (let i = 0; i < numberOfSnowflakes; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflakesContainer.appendChild(snowflake);

      // Randomize position and animation delay
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Between 2s and 5s
      snowflake.style.animationDelay = `${Math.random() * 5}s`; // Random delay
    }

    // Cleanup snowflakes on component unmount
    return () => {
      snowflakesContainer.innerHTML = "";
    };
  }, []);

  return <div className="snowflakes"></div>;
};

export default Snowflakes;