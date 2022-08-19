import React, { useState } from "react";
import PropTypes from "prop-types";
// import Input from "./Input";
import Button from "./Button";
import "./Form.css";

const ChoreForm = ({ handleChange }) => {
  // Initialize state for input field
  const [enteredChore, setEnteredChore] = useState("");

  // Initialize state for input selector
  const [childSelected, setChildSelected] = useState("");

  // Event handler for input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Set state according to the changed input field
    name === "chore" ? setEnteredChore(value) : setChildSelected(value);
  };

  // Event handler for form submission
  const onFormSubmit = (e) => {
    e.preventDefault();

    const child = childSelected.trim(),
      chore = enteredChore.trim();

    // Create an object to handle input values for form validation
    const payload = {
      child,
      chore
    };

    /* Validation for input fields */
    // Return message if both input fields are incomplete
    if (!child && !chore) {
      console.log("You need to complete the form before submitting.");
    } else if (child) {
      if (chore) {
        console.log(payload);
        setChildSelected("");
        setEnteredChore("");
      } else {
        console.log("You need to enter a chore before continuing");
      }
    } else {
      console.log("You need to select a child before continuing.");
    }
    console.log(chore.length);
    return `${child} will be assigned "${chore}" - ready to submit?`;
  };

  // Show entered chore and child selected to the screen
  const displayChore = () => {
    const child = childSelected.trim(),
      chore = enteredChore.trim();
    return !child && !chore
      ? "Create a new chore and choose a child for this chore"
      : !child
      ? "Pick a child..."
      : !chore
      ? "Enter a new chore..."
      : `${child} will be assigned "${chore}" - ready to submit?`;
  };

  return (
    <form className="form--chore" onSubmit={onFormSubmit}>
      <div className="new-chore--controls">
        <div className="new-chore--control">
          <label htmlFor="chore">Chore description:</label>
          <input type="text" name="chore" value={enteredChore} placeholder="Enter chore description here" onChange={handleInputChange} />
        </div>
        <div className="new-chore--control">
          <label htmlFor="child">Child</label>
          <select name="child" id="child--selector" value={childSelected} onChange={handleInputChange}>
            <option></option>
            <option value="Cameron">Cameron</option>
            <option value="Cayden">Cayden</option>
            <option value="Courtney">Courtney</option>
          </select>
        </div>
        <div className="form--output">
          <p>{displayChore()}</p>
        </div>
        <Button text="Create new chore" color="green" />
      </div>
    </form>
  );
};

ChoreForm.defaultProps = {
  enteredChore: "",
  childSelected: ""
};

ChoreForm.propTypes = {
  enteredChore: PropTypes.string.isRequired,
  childSelected: PropTypes.string.isRequired
};

export default ChoreForm;
