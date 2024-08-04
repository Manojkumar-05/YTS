import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import {
  Provider,
  withNavigationHandlers,
} from "react-awesome-slider/dist/navigation";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";


const NavigationSlider = withNavigationHandlers(AwesomeSlider);

const Slider = () => {
  return (
    <NavigationSlider
      className=""
      media={[
        {
          slug: "home",
          className: "home",
          children: <Home />, // Directly using the component
        },
        {
          slug: "services",
          className: "services",
          children: <Services />, // Directly using the component
        },
        {
          slug: "about",
          className: "about",
          children: <About />, // Directly using the component
        },
        {
          slug: "contact",
          className: "contact",
          children: <Contact />, // Directly using the component
        },
      ]}
    />
  );
};

// Wrap the application with the navigation Provider passing down the current page slug.
const PageTransitions = () => {
  const slug = "home"; // Set the initial rendered slug

  return (
    <Provider slug={slug} >
      {/* <Header /> */}
      <Slider />
    </Provider>
  );
};

export default PageTransitions;
