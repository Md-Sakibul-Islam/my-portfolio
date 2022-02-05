import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Education.css";
const Education = () => {
  return (
    <div id="education" className="container education__container">
   
        <h2>
          {" "}
          <i className="fas fa-user-graduate"></i> Education
        </h2>
   

      <div className="container mx-auto mt-5">
        <Row className="mx-auto">
          <Col sm={12} md={6} lg={6}>
            <div data-aos="zoom-in" className="education__info mb-4">
              <h3>Diploma in Engineering</h3>
              <p>Department Of Computer Technology</p>
              <p>Chapainawabganj Polytechnic Institute, Bangladesh</p>
              <p>2016-2020</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
           <div data-aos="zoom-in" className="education__info mb-4">
           <h3>Secondary School Certificate</h3>
              <p>Subject: Science</p>
              <p>Hat Kanpara High School, Bangladesh</p>
              <p>2014-2015</p>
           </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Education;
