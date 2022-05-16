import React, { MouseEventHandler } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

interface ObjectSelected {
  id: 0;
  name: "";
  desc: "";
  pic: "";
}

interface Props {
  showModal?: MouseEventHandler<HTMLAnchorElement>;
  casas?: {
    id: number;
    name: string;
    desc: string;
    pic: string;
  };
}
export const NgcCardComp = ({ showModal, casas }: Props) => {
  return (
    <Card id="card-container" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://previews.123rf.com/images/jlombard/jlombard1511/jlombard151100028/49190648-casa-en-construcci%C3%B3n.jpg"
      />
      <Card.Body>
        <Card.Title>{casas!.name}</Card.Title>
        <Card.Text>{casas!.desc}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <Card.Body>
        {/* On click submit boolean to redux in order to show modal in NgcProyects */}

        <Card.Link onClick={showModal} href="#">
          Card Link
        </Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};
