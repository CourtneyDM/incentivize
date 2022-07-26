import React from "react";
import "./Section.css";

const Section = (props) => {
  const classes = "container--section " + props.className;
  return (
    <section className={classes} id={props.id}>
      {props.children}
    </section>
  );
};

export default Section;
