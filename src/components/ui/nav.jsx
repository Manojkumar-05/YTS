import React from "react";
import { Link } from "react-awesome-slider/dist/navigation";

const Nav = () => {
  return (
    <header style={{ backgroundColor: "lightblue", padding: "10px" }}>
      <nav>
        <Link href="page-one">Page One</Link>
        <Link href="page-two">Page Two</Link>
        <Link href="page-three">Page Three</Link>
        <Link href="page-four">Page Four</Link>
      </nav>
    </header>
  );
};

export default Nav;
