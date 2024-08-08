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

export default function App() {
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
      className={`bg-black text-white font-medium transition-transform duration-300 ${
        showNav ? "transform translate-y-full" : "transform -translate-y-full"
      }`}
    >
      <NavbarBrand className="text-4xl font-bold">
        <Link to="/">YAR</Link>
      </NavbarBrand>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="end">
        <NavbarItem>
          <Link to="/" className="text-white font-medium">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/about" className="text-white font-medium">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/services" className="text-white font-medium">
            Services
          </Link>
        </NavbarItem>
        {/* <Dropdown isHoverable onOpenChange={setIsDropdownHovered} disableRipple>
          <DropdownTrigger>
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent flex font-medium"
              endContent={<DropdownIcon hovered={isDropdownHovered} />}
            >
              Contact
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Join Us features"
            className="w-[120px] bg-black text-white font-medium p-4"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              className="py-2 hover:bg-neutral-800"
              key="contact_us"
            >
              <Link to="/contact" className="w-full h-full">
                Contact Us
              </Link>
            </DropdownItem>
            <DropdownItem className="py-2 hover:bg-neutral-800" key="careers">
              <Link to="/careers" className="w-full h-full">
                Careers
              </Link>
            </DropdownItem>
            <DropdownItem className="py-2 hover:bg-neutral-800" key="join_us">
              <Link to="/join" className="w-full h-full">
                Join Us
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
        <DropDownButton />
      </NavbarContent>

      <NavbarMenu className="flex flex-col gap-8 justify-center items-center bg-black text-white">
        <NavbarMenuItem>
          <Link
            to="/"
            className="w-full"
            onClick={() => setIsMenuOpen(false)}
            size="lg"
          >
            <div>Home</div>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            to="/about"
            className="w-full"
            onClick={() => setIsMenuOpen(false)}
            size="lg"
          >
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            to="/services"
            className="w-full"
            onClick={() => setIsMenuOpen(false)}
            size="lg"
          >
            Services
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            to="/careers"
            className="w-full"
            onClick={() => setIsMenuOpen(false)}
            size="lg"
          >
            Careers
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            to="/contact"
            className="w-full"
            onClick={() => setIsMenuOpen(false)}
            size="lg"
          >
            Contact Us
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
