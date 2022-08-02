import React, { useState } from "react";
import PropTypes from "prop-types";

const CurrentDate = ({ getCurrentDate, now }) => {
  // Initialize time object for initial state
  const currentDate = {
    date: now.getDate(),
    day: now.getDay(),
    month: now.getMonth(),
    year: now.getFullYear()
  };

  // State management for current date
  const [date, setDate] = useState(currentDate.date);
  const [month, setMonth] = useState(currentDate.month);
  const [day, setDay] = useState(currentDate.day);
  const [year, setYear] = useState(currentDate.year);

  // Set current date
  async function setCurrentDate() {
    const today = await getCurrentDate();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Set day of the week
    setDay((currentDate.day = daysOfWeek[today.getDay()]));

    // Set date
    setDate((currentDate.date = today.getDate()));

    // Set month
    setMonth((currentDate.month = months[today.getMonth()]));

    // Set current year
    setYear((currentDate.year = today.getFullYear()));
  }

  // Get the current date
  setCurrentDate();

  return (
    <p className="timestamp">
      <span className="timestamp--info">{day},</span>
      <span className="timestamp--info">&nbsp;{month}</span>
      <span className="timestamp--info">&nbsp;{date},</span>
      <span className="timestamp--info">&nbsp;{year}</span>
    </p>
  );
};

CurrentDate.defaultProps = {
  currentDate: {
    date: "null",
    day: 1,
    month: "January",
    year: 1980
  }
};

CurrentDate.propTypes = {
  currentDate: PropTypes.object.isRequired
};

export default CurrentDate;
