import React from "react";
import Select from "react-select";
import classes from "./SelectUI.module.css";

export default function Selection(props) {
  return (
    <div className={classes.Selection}>
      <Select
        isMulti
        closeMenuOnSelect={false}
        name="colors"
        options={props.options}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={props.handletempDataChange}
        hideSelectedOptions={false}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary: "#9CA2AC",
            primary25: "#D0D2D6",
            primary50: "#9CA2AC",
          },
        })}
      />
    </div>
  );
}
