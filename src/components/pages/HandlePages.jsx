import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import {
  Provider,
  Link,
  withNavigationContext,
  withNavigationHandlers,
} from "react-awesome-slider/dist/navigation";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";

// Wrap the AwesomeSlider component with the navigationHandlers
const NavigationSlider = withNavigationHandlers(AwesomeSlider);

// Create an AwesomeSlider instance with some content
const Slider = () => {
  return (
    <NavigationSlider
      className=""
      media={[
        {
          slug: "page-one",
          className: "page-one",
          children: <PageOne />, // Directly using the component
        },
        {
          slug: "page-two",
          className: "page-two",
          children: <PageTwo />, // Directly using the component
        },
        {
          slug: "page-three",
          className: "page-three",
          children: <PageThree />, // Directly using the component
        },
        {
          slug: "page-four",
          className: "page-four",
          children: <PageFour />, // Directly using the component
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
  const slug = "page-one"; // Set the initial rendered slug

  return (
    <Provider slug={slug}>
      {/* <Header /> */}
      <Slider />
    </Provider>
  );
};

export default PageTransitions;
