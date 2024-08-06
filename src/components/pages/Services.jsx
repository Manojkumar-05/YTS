import React from "react";
import ExpandableCardDemo from "../ui/ui-comp/expandable-card-demo-grid";

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
        <ExpandableCardDemo cards={cards} />
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
        <div>
          <h2>Agri Tech</h2>
          <p>
            Transforming agriculture with advanced technologies to enhance
            productivity, efficiency, and sustainability in farming practices.
          </p>
        </div>
        <div>
          <h2>Healthcare</h2>
          <p>
            Innovating healthcare solutions to improve patient outcomes,
            streamline operations, and facilitate the delivery of high-quality
            care.
          </p>
        </div>
        <div>
          <h2>Renewable Energy</h2>
          <p>
            Driving the future of clean energy with sustainable solutions that
            harness the power of wind, solar, and other renewable resources.
          </p>
        </div>
        <div>
          <h2>Bio Tech</h2>
          <p>
            Pioneering advancements in biotechnology to address critical
            challenges in medicine, agriculture, and environmental protection.
          </p>
        </div>
        <div>
          <h2>Aerospace</h2>
          <p>
            Enhancing aerospace technology with cutting-edge solutions for
            improved safety, performance, and efficiency in air and space
            travel.
          </p>
        </div>
        <div>
          <h2>Automotive</h2>
          <p>
            Revolutionizing the automotive industry with innovations in electric
            vehicles, autonomous driving, and advanced manufacturing techniques.
          </p>
        </div>
        <div>
          <h2>Banking</h2>
          <p>
            Modernizing banking and financial services with secure, efficient,
            and user-friendly digital solutions.
          </p>
        </div>
        <div>
          <h2>Retail</h2>
          <p>
            Elevating the retail experience with technology-driven solutions
            that optimize operations, enhance customer engagement, and drive
            sales.
          </p>
        </div>
        <div>
          <h2>Food Tech</h2>
          <p>
            Innovating the food industry with sustainable practices and advanced
            technologies to improve food production, safety, and distribution.
          </p>
        </div>
        <div>
          <h2>Manufacturing</h2>
          <p>
            Transforming manufacturing processes with automation, IoT, and smart
            technologies to increase efficiency and reduce costs.
          </p>
        </div>
        <div>
          <h2>Communication</h2>
          <p>
            Advancing communication technologies to enable faster, more
            reliable, and more secure information exchange across the globe.
          </p>
        </div>
        <div>
          <h2>Life Sciences</h2>
          <p>
            Driving breakthroughs in life sciences with innovative research and
            development solutions that improve health and well-being.
          </p>
        </div>
        <div>
          <h2>AR/VR</h2>
          <p>
            Creating immersive experiences with augmented reality (AR) and
            virtual reality (VR) technologies for various applications, from
            training to entertainment.
          </p>
        </div>
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

const cards = [
  {
    title: "",
    src: "../assets/meet.jpg",
    content: () => (
      <p>
      </p>
    ),
  },
 
];
