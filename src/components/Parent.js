import classes from "./Parent.module.css";
import React from "react";
import { useState } from "react";
import { data } from "../Data";
import AddButton from "./AddButton/AddButton";
import List from "./List/List";
import Modal from "./Modal/Modal";

const categories = [];
const subCategories = [];

function Parent(props) {
  const [category, setcategory] = useState(data);
  const [tempData, settempData] = useState([]);
  const [catLen, setcatLen] = useState(categories.length);
  const [subcatLen, setsubcatLen] = useState(subCategories.length);
  const [showModal, setShowModal] = useState(false);

  const handletempDataChange = (selectedOptions) => {
    settempData((prevState) => selectedOptions);
  };
  const toggleHandler = (categoryName) => {
    let newState = { ...category };
    newState[categoryName].dropped = !newState[categoryName].dropped;
    setcategory((prevState) => newState);
  };
  const modalToggle = () => {
    setShowModal((prevState) => !prevState);
  };
  const storeCategory = () => {
    for (let i in data) {
      if (data[i].dropped) {
        categories.push(i);
      }
    }
    setcatLen((prevState) => categories.length);
  };
  const storeSubCategories = () => {
    tempData.map((result) =>
      subCategories.includes(result.label)
        ? null
        : subCategories.push(result.label)
    );
    setsubcatLen((prevState) => subCategories.length);
  };

  const arrayLength = categories.length > 0 || subCategories.length > 0;

  let display = (
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
      {console.log("cat", categories)}
      {console.log("subCat", subCategories)}
      {arrayLength ? (
        <div className={classes.Done} onClick={modalToggle}>
          Done
        </div>
      ) : null}
    </div>
  );
  if (showModal) {
    display = showModal ? (
      <Modal
        categories={categories}
        subcategories={subCategories}
        modalToggle={modalToggle}
      />
    ) : null;
  }

  return <div>{display}</div>;
}

export default Parent;
