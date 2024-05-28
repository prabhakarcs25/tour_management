import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick__links = [
  {
    path: "/home",
    disply: "Home",
  },
  {
    path: "/about",
    disply: "About",
  },
  {
    path: "/tours",
    disply: "Tours",
  },
];
const quick__links2 = [
  {
    path: "/gallery",
    disply: "Gallery",
  },
  {
    path: "/login",
    disply: "Login",
  },
  {
    path: "/register",
    disply: "Register",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p> <strong style={{justifyContent:'center'}}> "Tour Its: Where Every Moment Becomes an Unforgettable
                Adventure, Come Journey with Us Across the World!"</strong>
               
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-circle-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discove </h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.disply}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">quick Links </h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.disply}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Contact </h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  Address :
                </h6>
                <p className="mb-0">Gorakhpur, INDIA</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  Email :
                </h6>
                <p className="mb-0"> prabhakar***15@gmail.com</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>
                  Phone :
                </h6>
                <p className="mb-0">+979**41**8 </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>

        <Row>
          <Col lg="4" className="text-center pt-5">
            <p className="copyright">Copyright &copy;{year}</p>
          </Col>
          <Col lg="4" className="text-center pt-5">
            <p className="copyright">
              designed and Developed by Prabhakar Singh
            </p>
          </Col>
          <Col lg="4" className="text-center pt-5">
            <p className="copyright">All rights reserved</p>
          </Col>
        </Row>

        {/* <Row style={{background:'grey'}} className='mt-5'>
          <Col lg="4 align-items-center fw-bold">
            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
              Copyright &copy; {year},
            </ListGroupItem>
          </Col>

          <Col lg="4 fw-bold">
            <ListGroupItem className=" ps-0 border-0 d-flex align-items-center gap-3">
              All Right Reserved
            </ListGroupItem>
          </Col>

          <Col lg="4 fw-bold">
            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
               Developed By || Prabhakar Singh
            </ListGroupItem>
          </Col>

          
        </Row> */}
      </Container>
    </footer>
  );
}
