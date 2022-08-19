import React, { useState } from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import Button from "../Form/Button";

const NewChild = ({ now }) => {
  let hobbyList = [];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState("");
  const [hobby, setHobby] = useState("");
  const [hobbies, setHobbies] = useState([hobby]);

  // Calculate child age to display on screen
  function calculateAge(date) {
    // Initialize new Moment objects for today's date and birthday
    const today = new Moment(now);
    const birthday = new Moment(date);

    // Get the difference between today and birthday
    const duration = Moment.duration(today.diff(birthday));

    // Set age based on duration data
    setBirthdate(date);
    setAge(`${duration._data.years} years, ${duration._data.months} months`);
  }

  // Add hobby to the hobbies array
  const addNewHobby = (e, hobby) => {
    e.preventDefault();
    console.log(e);
  };

  // Event handler for input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Set state according to the changed input field
    name === "firstName" ? setFirstName(value) : name === "lastName" ? setLastName(value) : name === "birthdate" ? calculateAge(value) : setHobby(value);
  };

  // Event handler for form submission
  const onFormSubmit = (e) => {
    e.preventDefault();

    // Create new child object with details from the form
    const newChild = {
      firstName,
      lastName,
      birthdate,
      age,
      hobbies
    };
    console.log(newChild);
  };

  return (
    <form action="PUT" className="form--child" onSubmit={onFormSubmit}>
      <div className="new-child--info">
        <div className="new-child--firstName">
          <label htmlFor="firstName">Name:</label>
          <input type="text" name="firstName" value={firstName} placeholder="Enter child's first name" onChange={handleInputChange} />
        </div>
        <div className="new-child--lastName">
          <label htmlFor="lastName">Name:</label>
          <input type="text" name="lastName" value={lastName} placeholder="Enter child's last name" onChange={handleInputChange} />
        </div>
        <div className="new-child--birthday">
          <label htmlFor="birthdate">Birthday</label>
          <input type="date" name="birthdate" value={birthdate} onChange={handleInputChange} />
        </div>
        <div className="new-child--hobbies">
          <label htmlFor="hobby">Child hobbies</label>
          <input type="text" name="hobby" value={hobby} onChange={handleInputChange} />
          <Button text="Add hobby" color={"orange"} handleClick={addNewHobby} />
        </div>
        <div className="new-child--age">
          <p>{age}</p>
        </div>
      </div>
      <Button text="Add child" color={"blue"} />
      <p>Hobbies: {hobbies}</p>
    </form>
  );
};

NewChild.defaultProps = {
  firstName: "",
  lastName: "",
  birthdate: "",
  age: ""
};

NewChild.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  hobbies: PropTypes.array
};

export default NewChild;

// TODO: convert hobbies text area into an input line with a button
