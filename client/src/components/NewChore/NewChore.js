import React from "react";
import Form from "../Form/ChoreForm;";

import styles from "./NewChore.module.css";

const NewChore = () => {
  return (
    <div className={`${styles["new-chore"]}`}>
      <Form />
    </div>
  );
};

export default NewChore;
