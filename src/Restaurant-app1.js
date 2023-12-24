import React, { useState } from "react";
import Menu from "./menuApi-app1";
import Menucard from "./menucard-app1";
import Navbar from "./components/Navbar-app1";
import "./style.css";

const uniqueList = [
  ...new Set( //to get unique list of all categories
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
const Restaurant = () => {
  const [ menudata, setMenuDAta ] = useState(Menu); //DRY do not repeat code so looping with array
  console.log(menudata);
  const [ menulist, updateMenuList ] = useState(uniqueList)
  const filteritem = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuDAta(updatedList);
  };
  return (
    <>
      <Navbar filteritem={filteritem} />
      <Menucard menudata={menudata} menulist={menulist} />
    </>
  );
};

export default Restaurant;
