import React, { useState } from "react";
import { Link } from "react-awesome-slider/dist/navigation";
import { Divide as Hamburger } from "hamburger-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      style={{
        backgroundColor: "lightblue",
        padding: "10px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <nav className="flex justify-between items-center">
        <div className="font-bold text-3xl ml-6 flex justify-center itfems-center flex-col">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r to-fuchsia-600 via-purple-600 from-pink-600 font- ">
            YAR
          </h1>
        </div>
        <div className="hidden md:flex gap-4">
          <ul className="flex gap-4">
            <li className="hover:text-[#9f64a4]">
              <Link href="page-one" className="text-lg">
                Home
              </Link>
            </li>
            <li className="hover:text-[#ab41b5]">
              <Link href="page-two" className="text-lg">
                Join Us
              </Link>
            </li>
            <li className="hover:text-[#ab41b5]">
              <Link href="page-three" className="text-lg">
                About
              </Link>
            </li>
            <li className="hover:text-[#ab41b5]">
              <Link href="page-four" className="text-lg">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex justify-end">
          <button
            className="text-[#ab41b5] hover:text-[#9f64a4]"
            onClick={handleMenuToggle}
          >
            <Hamburger />
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 p-4 bg-lightblue">
          <ul className="flex flex-col gap-4">
            <li className="hover:text-[#9f64a4]">
              <Link href="page-one" className="text-lg">
                Page One
              </Link>
            </li>
            <li className="hover:text-[#ab41b5]">
              <Link href="page-two" className="text-lg">
                Page Two
              </Link>
            </li>
            <li className="hover:text-[#ab41b5]">
              <Link href="page-three" className="text-lg">
                Page Three
              </Link>
            </li>
            <li className="hover:text-[#ab41b5]">
              <Link href="page-four" className="text-lg">
                Page Four
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
