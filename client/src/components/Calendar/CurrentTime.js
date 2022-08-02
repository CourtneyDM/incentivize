import React, { useState } from "react";
import PropTypes from "prop-types";
import ChildList from "../Child/ChildList";
import CurrentDate from "./CurrentDate";

import "./Calendar.css";

const Time = ({ childList, now }) => {
  // Format time to use 12-hours instead of 24, and to have leading zeros before minutes and seconds
  const formatTime = (identifier, entry, num) => {
    const timeEl = identifier === "hour" ? (entry <= num ? entry : entry - num) : entry < num ? entry.toString().padStart(2, "0") : entry.toString();
    return timeEl;
  };

  // Initialize time object for initial state
  const currentTime = {
    hour: formatTime("hour", now.getHours(), 12),
    minute: formatTime("minute", now.getMinutes(), 10),
    second: formatTime("second", now.getSeconds(), 10),
    meridian: now.getHours() < 12 ? "A.M." : "P.M."
  };

  // State management for current time
  const [meridian, setMeridian] = useState(currentTime.meridian);
  const [hour, setHour] = useState(currentTime.hour);
  const [minute, setMinute] = useState(currentTime.minute);
  const [second, setSecond] = useState(currentTime.second);

  // Get the current Date object
  const getCurrentDate = () => {
    return new Promise((resolve) => {
      const now = new Date(Date.now());
      resolve(now);
    });
  };

  // Set current time
  async function setCurrentTime() {
    // Declare new Date object
    now = await getCurrentDate();

    // Set hour
    setHour((currentTime.hour = formatTime("hour", now.getHours(), 12)));

    // Set minute
    setMinute((currentTime.minute = formatTime("minute", now.getMinutes(), 10)));

    // Set second
    setSecond((currentTime.second = formatTime("second", now.getSeconds(), 10)));

    // Set meridian
    now.getHours() < 12 ? setMeridian("A.M.") : setMeridian("P.M.");
  }

  // Get the current time every second
  setInterval(setCurrentTime, 1000);

  return (
    <>
      <div id="current-timestamp">
        <CurrentDate getCurrentDate={getCurrentDate} now={now} />
        <p className="timestamp">
          <span className="timestamp--info">{hour}:</span>
          <span className="timestamp--info">{minute}:</span>
          <span className="timestamp--info">{second}</span>
          <span className="timestamp--info">&nbsp;{meridian}</span>
        </p>
      </div>
      <ChildList childList={childList} meridian={meridian} />
    </>
  );
};

// Set default properties
Time.defaultProps = {
  currentTime: {
    hour: 0,
    minute: 0,
    second: 0,
    meridian: "A.M."
  }
};

// Define property types
Time.propTypes = {
  currentTime: PropTypes.object.isRequired
};

export default Time;
