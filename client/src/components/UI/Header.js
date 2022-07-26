import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};

// Set default props
Header.defaultProps = {
  title: "Update with your personal title"
};

// Set PropTypes
Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
