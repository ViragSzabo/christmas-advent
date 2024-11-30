// JinglePlayer.js
import React, { useRef } from "react";
import jingleSound from "../assets/christmas-winter.mp3";

const JinglePlayer = ({ shouldPlay }) => {
  const jingleRef = useRef(null);

  React.useEffect(() => {
    if (shouldPlay && jingleRef.current) {
      jingleRef.current.pause();
      jingleRef.current.currentTime = 0;
      jingleRef.current.play().catch((error) => console.error("Audio playback failed:", error));
    } else {
      jingleRef.current.pause(); // Stop the music when shouldPlay is false
    }
  }, [shouldPlay]);

  return <audio ref={jingleRef} src={jingleSound} />;
};

export default JinglePlayer;