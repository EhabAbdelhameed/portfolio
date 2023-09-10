import React from "react";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Buton from "../FormElements/Button";
import "./Modal.css";

const MyModal = (props) => {
  return (
    <React.Fragment>
      <Modal
        backdrop={true}
        centered
        scrollable
        fullscreen="lg"
        size="lg"
        toggle={props.show}
        isOpen={props.shown}
      >
        <ModalHeader toggle={props.hide}>{props.project.name}</ModalHeader>
        <ModalBody>
          <Row className={`work-row ${!props.shown && "main-content-hide"}`}>
            <Col md="6" className="work-image-column">
              <Row className="align-items-center">
                <Col className="justify-content-center">
                  <Row>
                    <div className="work-image">
                      <img src={props.project.image} alt={props.project.name} />
                    </div>
                  </Row>
                  {props.project.link ? (
                    <a
                      href={props.project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {props.project.name}{" "}
                      <span>
                        <i class="fa-solid fa-up-right-from-square"></i>
                      </span>
                    </a>
                  ) : (
                    <Row className="justify-content-center">
                      <Col
                        xs="12"
                        md="8"
                        className=" link  justify-content-center"
                      >
                        <button className="link link-google">
                          <a
                            style={{ display: "block" }}
                            href={props.project.googleLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            .
                          </a>
                        </button>
                      </Col>
                      <Col
                        xs="12"
                        md="5"
                        className=" link  justify-content-center"
                      >
                        <button className="link link-apple">
                          <a
                            style={{ display: "block" }}
                            href={props.project.appleLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            .
                          </a>
                        </button>
                      </Col>
                    </Row>
                  )}
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <div className="harth-paragraph">
                <p> {props.project.p1} </p>
                <br />
                <p> {props.project.p2} </p>
              </div>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Buton text="Close" onClick={props.hide} />
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default MyModal;
