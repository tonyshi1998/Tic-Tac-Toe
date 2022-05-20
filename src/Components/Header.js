import classes from "./Header.module.css";
import { useState } from "react";
import { ReactDOM } from "react-dom";


const Header = (props) => {

  return (
    <div className={classes.header}>
        <h1>{props.turn}'s turn</h1>
    </div>
  );
};

export default Header;
