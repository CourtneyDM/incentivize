import React from "react";
import PropTypes from "prop-types";
import ChildListItem from "./ChildListItem";

const ChildList = ({ childList }) => {
  return (
    <div className="container--child-list">
      {childList.map((child, index) => {
        return <ChildListItem key={index} name={child.name} age={child.age} imgSrc={child.imgSrc} imgAlt="Avatar" chores={child.chores} />;
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
