import React, { useState } from "react";
import { Link } from "react-awesome-slider/dist/navigation";
import { Divide as Hamburger } from "hamburger-react";

export function Nav(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      style={{
        backgroundColor: "#AB4ABA",
        padding: "15px",
      }}
    >
      <section className="flex justify-between items-center">
        <div className="font-bold text-3xl ml-6 flex justify-center items-center flex-col">
          <Link
            href="home"
            className="text-white bg-clip-text font-bold"
            onClick={handleMenuToggle}
          >
            YAR
          </Link>
        </div>
        <div className="hidden md:flex gap-4">
          <ul className="flex gap-4">
            <li className="hover:text-[#ccc]">
              <Link href="home" className="text-lg text-white">
                Home
              </Link>
            </li>
            {/* <li className="hover:text-[#ccc]">
              <Link href="services" className="text-lg text-white">
                Services
              </Link>
            </li> */}
            <li className="hover:text-[#ccc]">
              <Link href="about" className="text-lg text-white">
                About
              </Link>
            </li>
            <li className="hover:text-[#ccc]">
              <Link href="contact" className="text-lg text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex justify-end">
          <button
            className="text-white hover:text-[#ccc]"
            onClick={handleMenuToggle}
          >
            <Hamburger />
          </button>
        </div>
      </section>
      {isMenuOpen && (
        <div
          className="md:hidden flex flex-col gap-4 p-4 transition ease-in-out delay-150"
          style={{
            backgroundColor: "#AB4ABA",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <ul className="flex flex-col gap-4">
            <li className="hover:text-[#ccc]">
              <Link href="home" className="text-lg text-white">
                Home
              </Link>
            </li>
            <li className="hover:text-[#ccc]">
              <Link href="services" className="text-lg text-white">
                Services
              </Link>
            </li>
            <li className="hover:text-[#ccc]">
              <Link href="about" className="text-lg text-white">
                About
              </Link>
            </li>
            <li className="hover:text-[#ccc]">
              <Link href="contact" className="text-lg text-white">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

