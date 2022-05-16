import React, { Fragment, ReactChild, ReactChildren } from "react";
import ReactDOM from "react-dom";
import classes from "../ui/Modal.module.css";
interface PropsModal {
  children:  JSX.Element | React.ReactNode;
}
interface PropsOverlay {
  children: JSX.Element | React.ReactNode;
  // container: Element;
}
interface PropsBackdrop {}

const Backdrop = (props: PropsBackdrop) => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props: PropsOverlay) => {
  return (
    <div className={classes.modal}>
      <div className={classes.contentn}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays") as HTMLElement;
export const Modal = (props: PropsModal) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
