import React from "react";
import classes from "./AddButton.module.css";

function AddButton(props) {
  return (
    <div className={classes.AddButton}>
      <p>+ Add {props.buttonText}</p>
    </div>
  );
}

export default AddButton;
