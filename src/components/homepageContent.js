import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import About from "./about";
import KeyDates from "./keyDates";
import ConferenceTopics from "./conferenceTopics";
import Committee from "./committee";
import KeySpeakers from "./keySpeakers";
import Submissions from "./submissions";
import Partners from "./partners";

export default () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12}>
            <section id={"About"}>
              <About />
            </section>
            <section id={"KeyDates"}>
              <KeyDates />
            </section>
            <section id={"ConferenceTopics"}>
              <ConferenceTopics />
            </section>
            <section id={"Committee"}>
              <Committee />
            </section>
            <section id={"KeySpeakers"}>
              <KeySpeakers />
            </section>
            <section id={"Partners"}>
              <Partners />
            </section>
            <section id={"Submissions"}>
              <Submissions />
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
