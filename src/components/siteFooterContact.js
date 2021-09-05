import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SiteFooterContact = () => {
  return (
    <section id={"Contact"}>
      <Container>
        <Row>
          <Col sm={12} className={"text-center"}>
            <h2 className="section-title">Contacts</h2>
          </Col>
          <Row style={{ textAlign: "center" }}>
            <Col xs={4}>
              <h3>Ask questions here</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </Col>
            <Col xs={4}>
              <h3>Venue address</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </Col>
            <Col xs={4}>
              <h3>Details</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default SiteFooterContact;
