import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import {
  Provider,
  withNavigationHandlers,
} from "react-awesome-slider/dist/navigation";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
// Wrap the AwesomeSlider component with the navigationHandlers
const NavigationSlider = withNavigationHandlers(AwesomeSlider);

// Create an AwesomeSlider instance with some content
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

// Page header navigation
// const Header = () => {
//   return (
//     <header style={{ backgroundColor: "lightblue", padding: "10px" }}>
//       <nav>
//         <Link href="page-one">Page One</Link>
//         <Link href="page-two">Page Two</Link>
//         <Link href="page-three">Page Three</Link>
//         <Link href="page-four">Page Four</Link>
//       </nav>
//     </header>
//   );
// };  

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
