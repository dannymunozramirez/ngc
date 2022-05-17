import React, { useState } from "react";
import { Container, Col, Row, Modal, Button } from "react-bootstrap";
import { useCard } from "../../customHooks/useCard";
import { NgcCardComp } from "../card/NgcCardComp";

interface Props {
  element?: JSX.Element;
}
interface ObjectSelected {
  id: string;
  name: string;
  desc: string;
  pic: string;
}

const casas = [
  {
    id: "0",
    name: "casa 1",
    desc: "casa 1 descripción",
    pic: "foto",
  },
  {
    id: "1",
    name: "casa 2",
    desc: "casa 2 descripción",
    pic: "foto",
  },
  {
    id: "2",
    name: "casa 3",
    desc: "casa 3 descripción",
    pic: "foto",
  },
  {
    id: "3",
    name: "casa 4",
    desc: "casa 4 descripción",
    pic: "foto",
  },
  {
    id: "4",
    name: "casa 5",
    desc: "casa 5 descripción",
    pic: "foto",
  },
  {
    id: "5",
    name: "casa 6",
    desc: "casa 6 descripción",
    pic: "foto",
  },
];

export const NgcContainerComp = ({ element }: Props) => {
  const { objectClickHandler, infoObjectClicked } = useCard();

  const selectedHouseHandler = (casaSeleccionada: ObjectSelected) => {
    objectClickHandler(casaSeleccionada);
    console.log("$$$$$$$$$$: " + casaSeleccionada);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (item: any) => {
    setShow(true);
    selectedHouseHandler(item);
  };

  return (
    <>
      <Container id="container-centered">
        <Row>
          {casas.map((item: any) => (
            <Col style={{ margin: 23 }}>
              <>
                <NgcCardComp
                  showModal={() => {
                    handleShow(item);
                  }}
                  casas={item}
                />
              </>

              {show && (
                <Modal style={{ margin: 40 }} show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{infoObjectClicked.name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <NgcCardComp
                      showModal={handleShow}
                      casas={infoObjectClicked}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
