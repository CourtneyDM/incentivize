import React from "react";
import PropTypes from "prop-types";
import "./Form.module.css";

const Button = ({ color, handleClick, text }) => {
  return (
    <button onClick={handleClick} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

// Set default props
Button.defaultProps = {
  color: "steelblue"
};

// Set PropTypes
Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  handleClick: PropTypes.func
};

export default Button;
