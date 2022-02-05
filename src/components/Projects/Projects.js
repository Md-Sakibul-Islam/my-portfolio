import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import "./Projects.css";
import car1 from "../../images/project/car-1.png";
import car2 from "../../images/project/car-2.png";
import car3 from "../../images/project/car-3.png";
import hos1 from "../../images/project/hospital-1.png";
import hos3 from "../../images/project/hospital-3.png";
import hos2 from "../../images/project/hospital-2.png";
import tour1 from "../../images/project/tour-1.png";
import tour2 from "../../images/project/tour-2.png";
import tour3 from "../../images/project/tour-3.png";
const Projects = () => {
  return (
    <div id="projects" className="container project__container">
      <h3>
        <i className="fas fa-cog"></i> Projects
      </h3>

      {/* ----------project infinity car area start ------------ */}
      <div className="container" data-aos="zoom-in">
        <Row className="mt-5 project__border">
          <Col className="mb-4" sm={12} md={6} lg={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded-3"
                  src={car1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded-3"
                  src={car2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded-3"
                  src={car3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div data-aos="zoom-in" className="project__info">
              <h3>Infinity Car</h3>
              <h4>A MERN Stack Project</h4>
              <h3>Overview</h3>
              <p>
                Users are able to add a review and that review appears on the
                home page. A User can be able to buy a product and remove his
                order. An admin is able to manage all orders, make another
                admin, add more products on the products page.
              </p>
              <span>
                <i className="fas fa-eye"></i>{" "}
                <a
                  rel="noreferrer"
                  href="https://infinity-car-d7c25.web.app/"
                  target="_blank"
                >
                  Live
                </a>{" "}
                |{" "}
                <a
                  rel="noreferrer"
                  href="https://github.com/Md-Sakibul-Islam/infinity-car-client"
                  target="_blank"
                >
                  Client
                </a>{" "}
                |{" "}
                <a
                  rel="noreferrer"
                  href="https://github.com/Md-Sakibul-Islam/infinity-car-server"
                  target="_blank"
                >
                  Server
                </a>
              </span>
              <p>
                Technologies: React js, React Router Dom, React Bootstrap, Node
                js, Express js, MongoDB, Firebase.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      {/* ----------project infinity car area end ------------ */}

      {/* ----------------project infinity tour area start ---------- */}
      <div className="container" data-aos="zoom-in">
        <Row className="mt-5 project__border">
          <Col className="mb-4" sm={12} md={6} lg={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded-3"
                  src={tour1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded-3"
                  src={tour2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded-3"
                  src={tour3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="project__info">
              <h3>Infinity Tour</h3>
              <h4>A MERN Stack Project</h4>
              <h3>Overview</h3>
              <p>
                Users can be able to services booking and remove their services.
                Option for adding more service to the home page.
              </p>

              <span>
                <i className="fas fa-eye"></i>{" "}
                <a
                  href="https://infinity-tour.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>{" "}
                |{" "}
                <a
                  rel="noreferrer"
                  href="https://github.com/Md-Sakibul-Islam/infinity-tour-client"
                  target="_blank"
                >
                  {" "}
                  Client
                </a>{" "}
                |{" "}
                <a
                  rel="noreferrer"
                  href="https://github.com/Md-Sakibul-Islam/infinity-tour-server"
                  target="_blank"
                >
                  Server
                </a>
              </span>
              <p>
                Technologies: React js, React Router Dom, React Bootstrap, Node
                js, Express js, MongoDB, Firebase.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      {/* ----------------project infinity tour area end ---------- */}

      {/*-------------- project infinity hospital area start ------------ */}

      <div className="container " data-aos="zoom-in">
        <Row className="mt-5 project__border">
          <Col className="mb-4" sm={12} md={6} lg={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded-3"
                  src={hos1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded-3"
                  src={hos2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded-3"
                  src={hos3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="project__info">
              <h3>Infinity Hospital</h3>
              <h4>A MERN Stack Project</h4>
              <h3>Overview</h3>
              <p>
                Users are able to create an account email and password or google
                sign in. Once logged in, the user name, logout button appear on
                the header menu.
              </p>

              <span>
                <i className="fas fa-eye"></i>{" "}
                <a
                  rel="noreferrer"
                  href="https://infinity-hospital.web.app/"
                  target="_blank"
                >
                  Live
                </a>{" "}
                |{" "}
                <a
                  rel="noreferrer"
                  href="https://github.com/Md-Sakibul-Islam/infinity-hospital"
                  target="_blank"
                >
                  Client
                </a>
              </span>
              <p>
                Technologies: React js, React Router Dom, React Bootstrap,
                Firebase.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      {/* ---------------- project infinity hospital  area end ------------------- */}
    </div>
  );
};

export default Projects;
