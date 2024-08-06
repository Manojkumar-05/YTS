import React, { useState } from "react";

const data = [
  {
    title: "Agri Tech",
    content:
      "Transforming agriculture with advanced technologies to enhance productivity, efficiency, and sustainability in farming practices.",
  },
  {
    title: "Healthcare",
    content:
      "Innovating healthcare solutions to improve patient outcomes, streamline operations, and facilitate the delivery of high-quality care.",
  },
  {
    title: "Renewable Energy",
    content:
      "Driving the future of clean energy with sustainable solutions that harness the power of wind, solar, and other renewable resources.",
  },
  {
    title: "Bio Tech",
    content:
      "Pioneering advancements in biotechnology to address critical challenges in medicine, agriculture, and environmental protection.",
  },
  {
    title: "Aerospace",
    content:
      "Enhancing aerospace technology with cutting-edge solutions for improved safety, performance, and efficiency in air and space travel.",
  },
  {
    title: "Automotive",
    content:
      "Revolutionizing the automotive industry with innovations in electric vehicles, autonomous driving, and advanced manufacturing techniques.",
  },
  {
    title: "Banking",
    content:
      "Modernizing banking and financial services with secure, efficient, and user-friendly digital solutions.",
  },
  {
    title: "Retail",
    content:
      "Elevating the retail experience with technology-driven solutions that optimize operations, enhance customer engagement, and drive sales.",
  },
  {
    title: "Food Tech",
    content:
      "Innovating the food industry with sustainable practices and advanced technologies to improve food production, safety, and distribution.",
  },
  {
    title: "Manufacturing",
    content:
      "Transforming manufacturing processes with automation, IoT, and smart technologies to increase efficiency and reduce costs.",
  },
  {
    title: "Communication",
    content:
      "Advancing communication technologies to enable faster, more reliable, and more secure information exchange across the globe.",
  },
  {
    title: "Life Sciences",
    content:
      "Driving breakthroughs in life sciences with innovative research and development solutions that improve health and well-being.",
  },
  {
    title: "AR/VR",
    content:
      "Creating immersive experiences with augmented reality (AR) and virtual reality (VR) technologies for various applications, from training to entertainment.",
  },
];

const AccordionItem = ({ title, content, isVisible, toggleVisibility }) => (
  <div className="accordion-item bg-white rounded shadow">
    <button
      onClick={toggleVisibility}
      className="accordion-button w-full text-left p-4 bg-gray-200 focus:outline-none"
    >
      {title}
    </button>
    {isVisible && (
      <div className="accordion-content p-4">
        <p>{content}</p>
      </div>
    )}
  </div>
);

const ServicesAccordions = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleVisibility = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div id="accordion" className="space-y-4">
        {data.slice(0, visibleCount).map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isVisible={expandedIndex === index}
            toggleVisibility={() => toggleVisibility(index)}
          />
        ))}
      </div>
      <button
        onClick={() =>
          setVisibleCount(visibleCount >= data.length ? 5 : data.length)
        }
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {visibleCount >= data.length ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

export default ServicesAccordions;
