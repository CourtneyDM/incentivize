import React from "react";
// import PropTypes from "prop-types";
// import Input from "./Input";
import Button from "./Button";
import "./Form.css";

const ChoreForm = ({ handleChange, handleFormSubmit }) => {
  return (
    <div className="container-form--chore">
      <form className="form--chore">
        <div className="container--selector">
          <label htmlFor="child">Select a child</label>
          <select name="child" id="child--selector">
            <option>Select child</option>
            <option value="courtney">Courtney</option>
            <option value="cameron">Cameron</option>
            <option value="cayden">Cayden</option>
          </select>
        </div>
        <div className="container--input">
          <label htmlFor="chore">Chore description: </label>
          <input type="text" name="chore" onChange={handleChange} />
        </div>
        <Button text="Create new chore" color="green" handleClick={handleFormSubmit} />
      </form>
    </div>
  );
};

export default ChoreForm;
