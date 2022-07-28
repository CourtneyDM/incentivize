import React, { useState } from "react";

const Time = ({ currentTime }) => {
  let currentHour, currentMinute, currentSecond, meridian;

  const now = new Date(Date.now());
  now.getHours() < 12 ? (meridian = "A.M.") : (meridian = "P.M.");

  const [time, setTime] = useState(currentTime);

  // Get the current time of day
  const getCurrentTime = () => {
    const today = new Date(Date.now());

    today.getMinutes() < 10
      ? (currentMinute = today.getMinutes().toString().padStart(2, "0"))
      : (currentMinute = today.getMinutes().toString());
    // today.getMinutes() < 10 ? (currentMinute = `0${today.getMinutes()}`) : (currentMinute = today.getMinutes());
    today.getSeconds() < 10 ? (currentSecond = today.getSeconds().toString().padStart(2, '0')) : (currentSecond = today.getSeconds());
    today.getHours() > 12 ? (currentHour = today.getHours() - 12) : (currentHour = today.getHours());

    setTime(`${currentHour}:${currentMinute}:${currentSecond}`);
  };

  setInterval(getCurrentTime, 1000);

  return (
    <div id="current-timestamp">
      <p id="timestamp--date">
        Current Date: <span id="current-date">{currentHour}</span>
      </p>
      <p id="timestamp--time">
        Current Time: <span id="current-time">{time}</span>
        <span id="icon--timeOfDay">{meridian}</span>
      </p>
    </div>
  );
};

export default Time;
