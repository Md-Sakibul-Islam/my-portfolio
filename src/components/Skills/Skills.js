import React from "react";
import { Col, ProgressBar, Row } from "react-bootstrap";
import "./Skills.css";

const Skills = () => {
  return (
    <div id="skill" className="skill__container">
      <div className="container">
        <h3>
          <i className="fas fa-code"></i> Skills
        </h3>

        <Row className="mt-4">
          <Col className="mx-auto" sm={12} md={5} lg={5}>
            <div data-aos="zoom-in">
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>HTML</span> <span>85%</span>
                </div>
                <ProgressBar className="progress__bar" now={85}></ProgressBar>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>CSS</span> <span>80%</span>
                </div>
                <ProgressBar className="progress__bar" now={85}></ProgressBar>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>BOOTSTRAP</span> <span>80%</span>
                </div>
                <ProgressBar className="progress__bar" now={80}></ProgressBar>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>JAVASCRIPT</span> <span>75%</span>
                </div>
                <ProgressBar className="progress__bar" now={75}></ProgressBar>
              </div>
            </div>
          </Col>
          <Col className="mx-auto" sm={12} md={5} lg={5}>
            <div data-aos="zoom-in">
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>REACT</span> <span>75%</span>
                </div>
                <ProgressBar className="progress__bar" now={75}></ProgressBar>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>NODE JS</span> <span>50%</span>
                </div>
                <ProgressBar className="progress__bar" now={50}></ProgressBar>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>EXPRESS JS</span> <span>50%</span>
                </div>
                <ProgressBar className="progress__bar" now={50}></ProgressBar>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>MONGODB</span> <span>50%</span>
                </div>
                <ProgressBar className="progress__bar" now={50}></ProgressBar>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Skills;
