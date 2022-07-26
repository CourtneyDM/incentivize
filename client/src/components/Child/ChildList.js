import React from "react";
import PropTypes from "prop-types";
import ChildListItem from "./ChildListItem";
import Card from "../UI/Card";
import "./ChildList.css";

const ChildList = ({ childList, toggleChore }) => {
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
              chores={child.chores}
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
