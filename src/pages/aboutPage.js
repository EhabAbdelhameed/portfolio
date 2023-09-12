import React from "react";
import { Container, Row, Col } from "reactstrap";
import Avatar from "../components/UIelements/avatar";
import "./about.css";

const About = () => {
  return (
    <Container className="info-container align-content-center">
      <Col xs="12">
        <Row>
          <Col xs="8" lg="3">
            {" "}
            <Avatar image="/assets/me.png" alt="kareem kamal" width="80%" />
          </Col>
          <Col xs="8" lg="9">
            <div>
              <div className="dang">
                <h1 data-shadow="Hi!">Developer</h1>
              </div>
              <p className="info-paragraph">
                I'm a{" "}
                <span className="info-with-color">mobile Application Developer</span>{" "}
                Innovative and detail-oriented Mobile App Developer with 3 years of experience in designing, developing, and
maintaining Android and iOS applications. Proficient in multiple programming languages and frameworks,
including Java, Swift, and React Native. Skilled in collaborating with cross-functional teams and delivering
high-quality apps within strict deadlines. Strong problem-solving abilities and a passion for staying up-to-date
with emerging technologies and industry trends
                <br />I have a serious passion for writing code, while I Listen
                to good music.
                <br /> Fan of <span className="info-with-color">
                  React.js
                </span>{" "}
                and Web dev. in general. on my way to be a{" "}
                <span className="info-with-color">MERN</span> dev....
                <br />
              </p>
            </div>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};
export default About;
