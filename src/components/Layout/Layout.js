import React from "react";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={classes.Header}>
      <h1>Products</h1>
      {props.show ? <h2>DONE</h2> : null}
    </div>
  );
}

export default Layout;
