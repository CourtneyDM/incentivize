import React from "react";
import PropTypes from "prop-types";
import ChoreListItem from "./ChoreListItem";
import styles from "./ChoreList.module.css";

const ChoreList = ({ chores, toggleChore }) => {
  return (
    <div className={`${styles["chores--list"]}`}>
      <ChoreListItem chores={chores} toggleChore={toggleChore} />
    </div>
  );
};

ChoreList.defaultProps = {
  chores: []
};

ChoreList.propTypes = {
  chores: PropTypes.array.isRequired
};

export default ChoreList;
