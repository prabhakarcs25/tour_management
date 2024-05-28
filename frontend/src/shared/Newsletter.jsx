import React from "react";
import "./newsletter.css";

import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";
export default function Newsletter() {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter_content">
              <h2>Subscribe Now to get useful travelling information</h2>
              <div className="newsletter__input">
                <input
                  type="email"
                  name=""
                  placeholder="Enter Your Email"
                  id=""
                />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, deserunt. Lorem ipsum dolor sit.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
                <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
