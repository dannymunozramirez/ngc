import React from "react";
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { NgcCardComp } from "../card/NgcCardComp";
import { NgcContainerComp } from "../containers/NgcContainerComp";

export const NgcProyectos = () => {
  return (
    <>
      
        <NgcContainerComp element={<NgcCardComp />} />
     
        <NgcContainerComp element={<NgcCardComp />} />
      
    </>
  );
};
