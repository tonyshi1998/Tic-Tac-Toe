import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModuleOverlay = (props) => {
  return (
    <div className={classes.overlay}>
      <h1 className={classes.content}>{props.winner} has won!</h1>
      <button className={classes.closeButton} onClick={props.onReset}>Close</button>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
          <ModuleOverlay winner={props.winner} onReset={props.onReset}></ModuleOverlay>,
          document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
