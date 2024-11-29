import React from "react";
import AdventCalendar from "./components/AdventCalendar";
import "./styles/App.css";
import Snowflakes from "./components/Snowflakes";
import Countdown from "./components/Countdown";

const App = () => {
  return (
    <div className="App">
      <AdventCalendar />
      <Snowflakes />
    </div>
  );
};

export default App;