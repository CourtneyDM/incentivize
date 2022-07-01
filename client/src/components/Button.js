import PropTypes from "prop-types";

const Button = ({ color, onClick, text }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: color }} className="btn">
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
  onClick: PropTypes.func
};

export default Button;
