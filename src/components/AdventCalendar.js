import React from "react";
import Countdown from "./Countdown";
import Snowflakes from "./Snowflakes";
import SocialShare from "./SocialShare";
import AudioPlayer from "./AudioPlayer";
import CalendarGrid from "./CalendarGrid";

const AdventCalendar = () => {
  const shareUrl = window.location.href;

  return (
    <div className="calendar">
      <div className="header">
        <h1>🎄 Christmas Advent Calendar 🎄</h1>
        <SocialShare shareUrl={shareUrl} />
      </div>
      <AudioPlayer />
      <Countdown />
      <Snowflakes />
      <CalendarGrid />
    </div>
  );
};

export default AdventCalendar;