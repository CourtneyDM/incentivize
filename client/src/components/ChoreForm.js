import React from "react";
// import PropTypes from "prop-types";
// import Input from "./Input";
import Button from "./Button";

const ChoreForm = ({ handleChange, onClick }) => {
  return (
    <div className="container--chore-form">
      <form>
        <label htmlFor="chore">Chore description: </label>
        <input type="text" name="chore" onChange={handleChange} />
        <select>
          <option>Select child</option>
          <option value="courtney">Courtney</option>
          <option value="cameron">Cameron</option>
          <option value="cayden">Cayden</option>
        </select>
        <Button text="Add chore" color="green" onClick={onClick} />
      </form>
    </div>
  );
};

export default ChoreForm;
