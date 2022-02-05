import React from "react";
import { Col, Row } from "react-bootstrap";
import "./About.css";
import aboutImg from "../../images/about-2.png";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div id="about" className="container about-container">
      <Row>
        <Col sm={12} md={4} lg={4}>
          <div data-aos="zoom-in">
            {" "}
            <img src={aboutImg} className="img-fluid" alt="" />
          </div>
        </Col>
        {/* About Info section start  */}
        <Col sm={12} md={6} lg={6} className="mx-auto">
          <div data-aos="zoom-in" className="about__info">
            <h2>Hi, I'm Md Sakibul Islam</h2>
            <span style={{ color: "whitesmoke", fontSize: "28px" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Front-End Developer",
                  "React Developer",
                  "JavaScript Developer",
                  "MERN Developer",
                ]}
                loop={30}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={60}
                delaySpeed={1000}
              />
            </span>

            <p>
              I'm an enthusiastic front-end developer and Hugh level experienced
              in Backend development. I'm always excited to learn and explore
              new technology. I'm developing my skills daily and enjoying my
              life with programming.
            </p>
            <div className="d-flex">
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/md-sakibul-islam-infinity-ai/"
                target="_blank"
              >
                <i className="fab icon__tag fa-linkedin-in"></i>
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/Md-Sakibul-Islam"
                target="_blank"
              >
                <i className="fab fa-github icon__tag"></i>
              </a>
              <a
                rel="noreferrer"
                href="https://www.facebook.com/mdsakibul.islam.581730/"
                target="_blank"
              >
                <i className="fab fa-facebook icon__tag"></i>
              </a>
            </div>
            <a
            className="download-btn"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1F5I265JSZkWlEMNYQXGsF6PzCCrmAq7K/view?usp=sharing"
              target="_blank"
            >
              Download Resume
            </a>
          </div>
        </Col>
        {/* About Info section end  */}
      </Row>
    </div>
  );
};

export default About;
