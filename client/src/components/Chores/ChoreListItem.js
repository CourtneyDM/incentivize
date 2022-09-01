import React from "react";
import PropTypes from "prop-types";

import styles from "./ChoreList.module.css";

const ChoreListItem = ({ chores, toggleChore }) => {
  return (
    <>
      {chores.map((chore, index) => (
        <p className={`${styles["chores--list-item"]}`} key={index} onClick={toggleChore}>
          {chore}
        </p>
      ))}
    </>
  );
};

ChoreListItem.defaultProps = {
  chores: []
};

ChoreListItem.propTypes = {
  chores: PropTypes.array.isRequired
};

export default ChoreListItem;
