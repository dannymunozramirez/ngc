import { Row } from "carbon-components-react";
import React from "react";
import { Container, Col } from "react-bootstrap";
import { NgcCardComp } from "../card/NgcCardComp";

interface Props {
  element: JSX.Element;
}

export const NgcContainerComp = ({ element }: Props) => {
  return (
    <Container id="container-centered">
      <Row>
        <Col style={{ margin: 23 }}> {element}</Col>
        <Col style={{ margin: 23 }}> {element}</Col>
        <Col style={{ margin: 23 }}> {element}</Col>
      </Row>
    </Container>
  );
};
