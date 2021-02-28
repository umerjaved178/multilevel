import React from "react";
import Selection from "./SelectUILibrary/SelectUI";
import classes from "./SelectionComp.module.css";
import AddButton from "../AddButton/AddButton";

function Test1(props) {
  return (
    <div className={classes.SelectionComp}>
      <p>Subcategories</p>
      <div>
        <Selection options={props.options} />
      </div>
      <AddButton buttonText="Sub Category" />
    </div>
  );
}

export default Test1;
