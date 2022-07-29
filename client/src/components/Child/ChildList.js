import React from "react";
import PropTypes from "prop-types";
import ChildListItem from "./ChildListItem";
import Card from "../UI/Card";
import "./ChildList.css";

const ChildList = ({ childList, meridian }) => {
  // Event handler for toggling chores when completed
  const toggleChore = (event) => {
    let chore = event.target;
    // console.log(chore.classList);

    chore.classList.contains("checked") ? chore.classList.remove("checked") : chore.classList.add("checked");
  };

  return (
    <div className="container--child-list">
      {childList.map((child, index) => {
        return (
          <Card className="child-list--item" key={index}>
            <ChildListItem
              name={child.name}
              age={child.age}
              imgSrc={child.imgSrc}
              imgAlt="Avatar"
              chores={meridian.toLowerCase() === "a.m." ? child.chores.morning : child.chores.evening}
              toggleChore={toggleChore}
            />
          </Card>
        );
      })}
    </div>
  );
};

ChildList.defaultProps = {
  childList: []
};

ChildList.propTypes = {
  childList: PropTypes.array.isRequired
};

export default ChildList;
