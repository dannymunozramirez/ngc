import {
  Dropdown,
  MultiSelect,
  Select,
  SelectItem,
  TextInput,
} from "carbon-components-react";
import React, { useState } from "react";
import { Container, Col, Row, Modal, Button } from "react-bootstrap";
import { NgcCardComp } from "../card/NgcCardComp";

interface Props {
  element?: JSX.Element;
}
interface ObjectSelected {
  id: 0;
  name: "";
  desc: "";
  pic: "";
}

const casas = [
  {
    id: 0,
    name: "casa 1",
    desc: "casa 1 descripción",
    pic: "foto",
  },
  {
    id: 1,
    name: "casa 2",
    desc: "casa 2 descripción",
    pic: "foto",
  },
  {
    id: 2,
    name: "casa 3",
    desc: "casa 3 descripción",
    pic: "foto",
  },
  {
    id: 0,
    name: "casa 4",
    desc: "casa 4 descripción",
    pic: "foto",
  },
  {
    id: 1,
    name: "casa 5",
    desc: "casa 5 descripción",
    pic: "foto",
  },
  {
    id: 2,
    name: "casa 6",
    desc: "casa 6 descripción",
    pic: "foto",
  },
];

export const NgcContainerComp = ({ element }: Props) => {
  const [objectSelected, setObjectSelected] = useState({
    id: 0,
    name: "",
    desc: "",
    pic: "",
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (item: any) => {
    setShow(true);
    setObjectSelected({
      id: item.id,
      name: item.name,
      desc: item.desc,
      pic: item.pic,
    });
  };

  const objectSelectedHandler = (item: any) => {
    setObjectSelected({
      id: item.id,
      name: item.name,
      desc: item.desc,
      pic: item.pic,
    });
  };
  return (
    <>
      <Container id="container-centered">
        <Row>
          {casas.map((item) => (
            <Col style={{ margin: 23 }}>
              <>
                <NgcCardComp showModal={handleShow} casas={item} />
              </>

              {show && (
                <Modal style={{ margin: 40 }} show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{objectSelected.name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <NgcCardComp
                      showModal={handleShow}
                      casas={objectSelected}
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
