import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroimg from "../assets/images/hero-img01.jpg";
import heroimg02 from "../assets/images/hero-img02.jpg";
import herovideo from "../assets/images/hero-video.mp4";
import wordImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";
import experienceImg from "./../assets/images/experience.png";
import Searchbar from "../shared/Searchbar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";
export default function Home() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle Subtitle={"know before you Go"} />
                  <img src={wordImg} alt="" />
                </div>
                <h1>
                  "Discover the world, one
                  <span className="highlight"> journey </span> at a time."
                </h1>
                {/* <h1>
                  "Discover the world, one journey at a time."
                  <span className="highlight">memories</span>
                </h1> */}
                <p>
                  "Roam freely, embrace the unknown, Find beauty in every
                  corner, </p> <p> make it your own. Let travel be your compass,</p> <p>guiding
                  you to be grown."
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroimg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4 ">
                <video src={herovideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroimg02} alt="" />
              </div>
            </Col>
            <Searchbar />
          </Row>
        </Container>
      </section>
      {/* // ============Hero Section Start ========================== */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we Serve</h5>
              <h2 className="services__title">we offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ==============featured tour section Start==================================== */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle Subtitle={"Explore"} />
              <h2 className="featured_tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* ==============featured tour section end==================================== */}

      {/* ==============Experience Section Start ==================================== */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle Subtitle={"Experience"} />
                <h2>
                  With our all Experience <br />
                  We will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>5k+</span>
                  <h6>Regular Client</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==============Experience section end==================================== */}

      {/* ==============Gallery section end==================================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our Customers tour Gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==============GAllery section end==================================== */}
      {/* ==============Testimonial Section Start==================================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==============Testimonial Section end==================================== */}
      <Newsletter />
    </>
  );
}
