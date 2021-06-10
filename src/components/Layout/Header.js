import React from "react";

import classes from "./Header.module.css";

import mealsImage from "../../assets/chocolate.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Chocolate Store</h1>
        <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Chocolate" />
      </div>
    </>
  );
};

export default Header;
