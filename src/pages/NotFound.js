import React, { Component } from "react";
import NotFoundImg from "../assets/not_found.png";
import { Container, Row, Col } from "reactstrap";

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Container className="mt-5" style={{ textAlign: "center" }}>
          <Row>
            <Col>
              <img src={NotFoundImg} width={"250em"} />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              {" "}
              <h5>Sorry, the page you're looking for cannot be found</h5>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
