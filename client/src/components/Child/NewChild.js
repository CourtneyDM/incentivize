import React, { useState } from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import Button from "../Form/Button";

import styles from "./ChildList.module.css";

const initialChild = {
  age: "",
  birthDate: "",
  name: "",
  hobby: "",
  hobbies: []
};

const NewChild = ({ now }) => {
  const [firstName, setFirstName] = useState(initialChild.name);
  const [birthdate, setBirthdate] = useState(initialChild.birthDate);
  const [age, setAge] = useState(initialChild.age);
  const [hobby, setHobby] = useState(initialChild.hobby);
  const [hobbies, setHobbies] = useState(initialChild.hobbies);

  // Calculate child age to display on screen
  function calculateAge(date) {
    // Initialize new Moment objects for today's date and birthday
    const today = new Moment(now);
    const birthday = new Moment(date);

    // Get the difference between today and birthday
    const duration = Moment.duration(today.diff(birthday));

    // Set age based on duration data
    setAge(`${duration._data.years} years, ${duration._data.months} months`);
  }

  // Add new hobby
  const addNewHobby = (e) => {
    e.preventDefault();
    setHobbies((prevHobbies) => {
      return [...prevHobbies, hobby];
    });
    setHobby("");
  };

  // Event handler for birthday input field
  const handleBirthdateInput = (e) => {
    const { value } = e.target;
    // console.log(value);
    calculateAge(value);
    setBirthdate(value);
  };

  // Event handler for first name input field
  const handleNameInput = (e) => {
    const { value } = e.target;
    setFirstName(value);
  };

  // Event handler for hobby input field
  const handleHobbyInput = (e) => {
    const { value } = e.target;
    setHobby(value);
  };

  // Event handler for form submission
  const onFormSubmit = (e) => {
    e.preventDefault();

    // Create new child object with details from the form
    const newChild = {
      firstName,
      birthdate,
      age,
      hobbies
    };
    console.log(newChild);

    // Clear form fields
    setFirstName(initialChild.name);
    setBirthdate(initialChild.birthDate);
    setAge(initialChild.age);
    setHobby(initialChild.hobby);
    setHobbies(initialChild.hobbies);
  };

  return (
    <form action="PUT" className={`${styles["form--child"]}`} onSubmit={onFormSubmit}>
      <div className={`${styles["new-child--info"]}`}>
        <div className={`${styles["new-child--firstName"]}`}>
          <label htmlFor="firstName">Name:</label>
          <input type="text" name="firstName" value={firstName} placeholder="Enter child's first name" onChange={handleNameInput} />
        </div>
        <div className={`${styles["new-child--birthday"]}`}>
          <label htmlFor="birthdate">Birthday</label>
          <input type="date" name="birthdate" value={birthdate} onChange={handleBirthdateInput} />
        </div>
        <div className={`${styles["new-child--hobbies"]}`}>
          <label htmlFor="hobby">Child hobbies</label>
          <input type="text" name="hobby" value={hobby} onChange={handleHobbyInput} />
          <Button text="Add hobby" type="button" color={"orange"} handleClick={addNewHobby} />
        </div>
        <div className={`${styles["new-child--age"]}`}>
          <p>{age}</p>
        </div>
      </div>
      <Button text="Add child" color={"blue"} />
      {hobbies.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </form>
  );
};

NewChild.defaultProps = {
  firstName: initialChild.name,
  birthdate: initialChild.birthDate,
  age: initialChild.age,
  hobby: initialChild.hobby,
  hobbies: initialChild.hobbies
};

NewChild.propTypes = {
  firstName: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  hobby: PropTypes.string.isRequired,
  hobbies: PropTypes.array.isRequired
};

export default NewChild;
