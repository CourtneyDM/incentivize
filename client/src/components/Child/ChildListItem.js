import React from "react";
import PropTypes from "prop-types";
import ChoreList from "../Chores/ChoreList";

import styles from "./ChildList.module.css";

const ChildListItem = ({ age, chores, imgSrc, name, toggleChore }) => {
  return (
    <>
      <div className={`${styles["child-item--info"]}`}>
        <p className={`${styles["child-item--avatar"]}`}>{name[0]}</p>
        {/* <img className="child-item--avatar" alt="Avatar" src={imgSrc} /> */}
        <p className={`${styles["child-item--name"]}`}> {name} </p>
        <p className={`${styles["child-item--label"]}`}>
          Age: <span className={`${styles["child-item--age"]}`}>{age}</span>
        </p>
      </div>
      <div className={`${styles["child-item--chores"]}`}>
        <ChoreList chores={chores} toggleChore={toggleChore} />
      </div>
    </>
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
