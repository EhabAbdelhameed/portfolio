import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./skills.css";

const Skills = () => {
  return (
    <Container className="skills-container">
      <Row>
        <Col xs="11" md="6" className="kalam">
          <div className="dang-skills">
            <h1>
              Frontend developer <i className="fa-brands fa-react"></i>
            </h1>
            <hr />
            <p className="skills-paragraph">HTML, CSS, JS</p>
            <p className="skills-paragraph">React.js</p>
            <p className="skills-paragraph">Gatsby.js</p>
            <p className="skills-paragraph">Next.js</p>
            <p className="skills-paragraph">Flutter</p>
            <p className="skills-paragraph">Dart</p>
          </div>
        </Col>
        <Col xs="11" md="6" className="anime">
          <div className="dang-skills">
            <h1>
              Backend developer <i class="fa-brands fa-node-js"></i>
            </h1>
            <hr />

            <p className="skills-paragraph">Node.js</p>
            <p className="skills-paragraph">Express</p>
            <p className="skills-paragraph">MongoBD</p>
            <p className="skills-paragraph">Graphql</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Skills;
