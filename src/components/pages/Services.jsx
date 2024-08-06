import React from "react";
import ServicesAccordions from "../ui/ServicesAccordions";
import ExpandableCards from "../ui/expandable-cards";

const Services = () => {
  return (
    <div className="bg-[#460073] min-h-screen overflow-auto pt-[4rem]">
      <div>
        <h1>Our Services</h1>
        <p>
          At YAR Tech Services, we offer a comprehensive suite of services
          designed to drive innovation, enhance efficiency, and support
          sustainable growth across diverse industries. Our expertise in
          cutting-edge technologies enables us to deliver tailored solutions
          that meet the unique needs of our clients. Explore our key service
          offerings:
        </p>
        <ExpandableCards />
        <p>
          At YAR Tech Services, we are dedicated to providing innovative,
          high-quality services that empower our clients to achieve their
          business goals and stay ahead in an ever-evolving technological
          landscape.
        </p>
      </div>
      <div>
        <h1>Industries We Serve</h1>
        <p>
          At YAR Tech Services, our expertise spans a diverse range of
          industries, enabling us to deliver specialized solutions that drive
          innovation and growth across various sectors. Our commitment to
          cutting-edge technologies and sustainable practices ensures that we
          remain at the forefront of industry advancements. Here are the key
          industries we serve:
        </p>
        <ServicesAccordions />
        <p>
          At YAR Tech Services, our industry-specific expertise ensures that we
          deliver tailored solutions that meet the unique needs of each sector,
          empowering our clients to achieve their goals and thrive in a
          competitive landscape.
        </p>
      </div>
    </div>
  );
};

export default Services;
