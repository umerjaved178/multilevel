import React from "react";
import { useState } from "react";
import { data } from "../Data";
import AddButton from "./AddButton/AddButton";
import List from "./List/List";

const categories = [];
const subCategories = [];

function Parent(props) {
  const [category, setcategory] = useState(data);
  const [tempData, settempData] = useState([]);

  const handletempDataChange = (selectedOptions) => {
    settempData((prevState) => selectedOptions);
  };
  const toggleHandler = (categoryName) => {
    let newState = { ...category };
    newState[categoryName].dropped = !newState[categoryName].dropped;
    setcategory((prevState) => newState);
  };
  const storeCategory = () => {
    for (let i in data) {
      if (data[i].dropped) {
        categories.push(i);
      }
    }
  };
  const storeSubCategories = () => {
    tempData.map((result) =>
      subCategories.includes(result.label)
        ? null
        : subCategories.push(result.label)
    );
  };

  return (
    <div>
      <List
        handletempDataChange={handletempDataChange}
        categoryKeys={Object.keys(category)}
        toggleHandler={toggleHandler}
        category={category}
        storeResult={storeSubCategories}
      />
      <AddButton
        buttonText="Category"
        addCategory="addCategory"
        storeCategories={storeCategory}
      />
      {console.log(subCategories)}
    </div>
  );
}

export default Parent;
