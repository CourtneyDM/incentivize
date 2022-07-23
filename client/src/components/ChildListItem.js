import React from "react";
import PropTypes from "prop-types";

const ChildListItem = ({ age, imgSrc, name, chores }) => {
  const toggleChore = (event) => {
    let chore = event.target;
    console.log(chore.classList);

    chore.classList.contains("checked") ? chore.classList.remove("checked") : chore.classList.add("checked");
  };

  return (
    <div className="container--child-item">
      <img className="child-item--avatar" alt="Avatar" src={imgSrc} />
      <p className="child-item--name"> {name} </p>
      <p className="child-item--label">
        Age: <span className="child-item--age">{age}</span>
      </p>

      <div className="chores--list">
        {chores.map((chore, index) => (
          <p className="chores--list-item" key={index} onClick={(e) => toggleChore(e)}>
            {chore}
          </p>
        ))}
      </div>
    </div>
  );
};

ChildListItem.defaultProps = {
  name: "Enter child's name",
  age: 0
};

ChildListItem.propTypes = {
  age: PropTypes.number,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default ChildListItem;
