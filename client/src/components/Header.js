import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title }) => {
  const onClick = () => {
    console.log("clicked from Header");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

// Set DefaultProps
Header.defaultProps = {
  title: "Task Tracker"
};

// Set PropTypes
Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
