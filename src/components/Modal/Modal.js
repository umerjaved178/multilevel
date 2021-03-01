import React from "react";
import classes from "./Modal.module.css";

function Modal(props) {
  return (
    <div className={classes.Modal}>
      <h1>Categories</h1>
      <p>{props.categories}</p>
      <h1>Sub Categories</h1>
      <p>{props.subcategories}</p>
      <div className={classes.Save}>SAVE</div>
      <p className={classes.Back} onClick={props.modalToggle}>
        Back
      </p>
    </div>
  );
}

export default Modal;
