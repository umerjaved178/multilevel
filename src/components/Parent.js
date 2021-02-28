import React from "react";
import { useState } from "react";
import { data } from "../Data";
import AddButton from "./AddButton/AddButton";
import List from "./List/List";

function Parent() {
  const [category, setcategory] = useState(data);

  const toggleHandler = (categoryName) => {
    let newState = { ...category };
    newState[categoryName].dropped = !newState[categoryName].dropped;
    setcategory((prevState) => newState);
  };

  return (
    <div>
      <List
        categoryKeys={Object.keys(category)}
        toggleHandler={toggleHandler}
        category={category}
      />
      <AddButton buttonText="Category" />
    </div>
  );
}

export default Parent;
