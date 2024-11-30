import React, { useState, useRef } from "react";
import jingleSound from "../assets/tale.mp3";
import "../styles/BackgroundMusic.css";

const AudioPlayer = () => {
  const [isPlaying, setPlaying] = useState(false);
  const audioRef = useRef(null);

  // Toggle play/pause
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} loop>
        <source src={jingleSound} type="audio/mp3" />
      </audio>
      <button onClick={toggleMusic}>
        {isPlaying ? <i className="fas fa-pause"></i>  : <i className="fas fa-play"></i> }
      </button>
    </div>
  );
};

export default AudioPlayer;