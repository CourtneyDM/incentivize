import React, { useState } from "react";
import ChildList from "../Child/ChildList";

const Time = ({ childList }) => {
  // Get current date
  const now = new Date(Date.now());

  // Set meridian to A.M. or P.M. depending on the current hour
  const meridian = now.getHours() < 12 ? "A.M." : "P.M.";

  // Get the current Date object
  const getCurrentDate = () => {
    return new Promise((resolve) => {
      const now = new Date(Date.now());
      resolve(now);
    });
  };

  // Current date object
  const currentDate = {
    date: null,
    day: null,
    month: null,
    year: null
  };

  // Current time object
  const currentTime = {
    hour: null,
    minute: null,
    second: null
  };

  // State management for current time
  // const [time, setTime] = useState(`${now.getHours() < 12 ? now.getHours() : now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${meridian}`);
  const [time, setTime] = useState(`Getting current time...`);

  // State management for current date
  const [date, setDate] = useState(`${currentDate.day} ${currentDate.month} ${currentDate.date}, ${currentDate.year}`);

  // Set current date
  async function setCurrentDate() {
    const today = await getCurrentDate();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Set day of the week
    currentDate.day = daysOfWeek[today.getDay()];

    // Set date
    currentDate.date = today.getDate();

    // Set month
    currentDate.month = months[today.getMonth()];

    // Set current year
    currentDate.year = today.getFullYear();

    // Update state for date
    setDate(`${currentDate.day}, ${currentDate.month} ${currentDate.date}, ${currentDate.year}`);
  }

  // Set current time
  async function setCurrentTime() {
    const today = await getCurrentDate();

    // Set hour
    currentTime.hour = today.getHours() < 12 ? (today.getHours() === 0 ? setCurrentDate() : today.getHours()) : today.getHours() - 12;

    // Set minute
    currentTime.minute =
      today.getMinutes() < 10
        ? today
            .getMinutes()
            .toString()
            .padStart(2, "0")
        : today.getMinutes().toString();

    // Set second
    currentTime.second =
      today.getSeconds() < 10
        ? today
            .getSeconds()
            .toString()
            .padStart(2, "0")
        : today.getSeconds().toString();

    // Update state for time
    setTime(`${currentTime.hour}:${currentTime.minute}:${currentTime.second} ${meridian}`);
  }

  // Get the current time every second
  setInterval(setCurrentTime, 1000);

  // Get the current
  setCurrentDate();

  return (
    <>
      <div id="current-timestamp">
        <p id="timestamp--date">
          Current Date: <span id="current-date">{date}</span>
        </p>
        <p id="timestamp--time">
          Current Time: <span id="current-time">{time}</span>
        </p>
      </div>
      <ChildList childList={childList} meridian={meridian} />
    </>
  );
};

Time.defaultProps = {
  currentTime: {
    hour: 0,
    minute: 0,
    second: 0
  }
};

export default Time;
