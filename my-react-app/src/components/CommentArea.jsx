import { Component } from "react";
import { ListGroup } from "react-bootstrap";
class Commentarea extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroup.Item>Autore</ListGroup.Item>
        <ListGroup.Item>Commento Utente</ListGroup.Item>
      </ListGroup>
    );
  }
}
export default Commentarea;
