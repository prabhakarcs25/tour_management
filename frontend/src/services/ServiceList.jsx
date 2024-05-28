import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import CustomizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate weather",
    desc: "Lorem ipsum dolor sit amet.",
  },
  {
    imgUrl: guideImg,
    title: "Best tour guide",
    desc: "Lorem ipsum dolor sit amet.",
  },
  {
    imgUrl: CustomizationImg,
    title: "Customization",
    desc: "Lorem ipsum dolor sit amet Lorem, ipsum..",
  },
];

function ServiceList() {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className='mb-4' key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
}

export default ServiceList;
