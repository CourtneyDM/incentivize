import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Input = ({ handleChange, inputName, inputType, labelName, onClick }) => {
  return (
    <>
      <div className="container--input">
        <label>{labelName}</label>:&nbsp;
        <input type={inputType} name={inputName} onChange={handleChange} />
      </div>
      <Button text="Add chore" color="green" onClick={onClick} />
    </>
  );
};

Input.defaultTypes = {
  type: "text",
  name: ""
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;
