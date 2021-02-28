import React from "react";
import SelectionComp from "../Dropdown/SelectionComp";
import ListElement from "./ListElement/ListElement";

function List(props) {
  return (
    <div>
      <ul style={{ listStyleType: "none", display: "inline" }}>
        {props.categoryKeys.map((singleCategory) => (
          <div key={singleCategory} style={{ width: "90%", margin: "auto" }}>
            <ListElement
              singleCategory={singleCategory}
              toggleHandler={props.toggleHandler}
            />

            {props.category[singleCategory].dropped ? (
              <SelectionComp
                options={props.category[singleCategory].subCategory}
              />
            ) : null}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default List;
