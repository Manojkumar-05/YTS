import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import DropDownButton from "./ui-comp/dropDown";

const DropdownIcon = ({ hovered }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`feather feather-chevron-down transition-transform ${
      hovered ? "rotate-180" : ""
    }`}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY || window.scrollY === 0) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`bg-black text-white font-medium transition-transform duration-300 
      ${
        showNav ? "transform translate-y-full" : "transform -translate-y-full"
      }`}
    >
      <NavbarBrand className="text-4xl font-bold">
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to="/"
        >
          YAR
        </Link>
      </NavbarBrand>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="end">
        <NavbarItem>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/"
            className="text-white font-medium"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/about"
            className="text-white font-medium"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/services"
            className="text-white font-medium"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/contact"
            className="text-white font-medium"
          >
            Contact Us
          </Link>
        </NavbarItem>

        {/* <DropDownButton /> */}
      </NavbarContent>

      <NavbarMenu className="flex flex-col gap-8 justify-center items-center bg-black text-white">
        <NavbarMenuItem>
          <Link
            to="/"
            className="w-full"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            size="lg"
          >
            <div>Home</div>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            to="/about"
            className="w-full"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            size="lg"
          >
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            to="/services"
            className="w-full"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            size="lg"
          >
            Services
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            to="/contact"
            className="w-full"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            size="lg"
          >
            Contact Us
          </Link>
        </NavbarMenuItem>
        {/* <NavbarMenuItem>
          <Link
            to="/join"
            className="w-full"
            onClick={() => {setIsMenuOpen(false);  window.scrollTo({ top: 0, behavior: "smooth" })}}
            size="lg"
          >
            Join Us
          </Link>
        </NavbarMenuItem> */}
      </NavbarMenu>
    </Navbar>
  );
}
