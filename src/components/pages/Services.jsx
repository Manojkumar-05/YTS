import React from "react";
import ExpandableCards from "../ui/expandable-cards";
import { ServicesAccordion } from "../ui/ServicesAccordion";

const Services = () => {
  return (
    <div className="bg-[#460073] min-h-screen overflow-auto pt-16 text-white">
      <div className="max-w-6xl mx-auto p-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg mb-8">
            At YAR Tech Services, we offer a comprehensive suite of services
            designed to drive innovation, enhance efficiency, and support
            sustainable growth across diverse industries. Our expertise in
            cutting-edge technologies enables us to deliver tailored solutions
            that meet the unique needs of our clients. Explore our key service
            offerings:
          </p>
          <ExpandableCards />
          <p className="text-lg mt-8">
            At YAR Tech Services, we are dedicated to providing innovative,
            high-quality services that empower our clients to achieve their
            business goals and stay ahead in an ever-evolving technological
            landscape.
          </p>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-lg mb-8">
            At YAR Tech Services, our expertise spans a diverse range of
            industries, enabling us to deliver specialized solutions that drive
            innovation and growth across various sectors. Our commitment to
            cutting-edge technologies and sustainable practices ensures that we
            remain at the forefront of industry advancements. Here are the key
            industries we serve:
          </p>
          <ServicesAccordion />
          <p className="text-lg mt-8">
            At YAR Tech Services, our industry-specific expertise ensures that
            we deliver tailored solutions that meet the unique needs of each
            sector, empowering our clients to achieve their goals and thrive in
            a competitive landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
  