import React from "react";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <h1 className={classes.Header}>Products</h1>
      {props.children}
    </div>
  );
}

export default Layout;
