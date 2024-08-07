import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/ui-comp/sheet";
import { useState, useEffect } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY === 0) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleSelect = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <header
      className={`w-full bg-[#000] px-4 py-3 sm:px-6 md:py-4 fixed top-0 left-0 z-1000 ${
        showNav ? '' : '-translate-y-full'
      } transition-transform duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" prefetch="false">
          <p className="text-white font-bold text-3xl">YAR</p>
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <NavLink
            to="/"
            className="inline-flex h-9 items-center justify-center rounded-md bg-[#000] px-4 py-2 text-base font-medium text-primary-foreground transition-colors hover:bg-[#000]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch="false"
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className="inline-flex h-9 items-center justify-center rounded-md bg-[#000] px-4 py-2 text-base font-medium text-primary-foreground transition-colors hover:bg-[#000]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch="false"
          >
            About
          </NavLink>
          <NavLink
            to="services"
            className="inline-flex h-9 items-center justify-center rounded-md bg-[#000] px-4 py-2 text-base font-medium text-primary-foreground transition-colors hover:bg-[#000]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch="false"
          >
            Services
          </NavLink>
          <NavLink
            to="contact"
            className="inline-flex h-9 items-center justify-center rounded-md bg-[#000] px-4 py-2 text-base font-medium text-primary-foreground transition-colors hover:bg-[#000]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch="false"
          >
            Contact Us
          </NavLink>
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="bg-transparent border-none">
            <div variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="text-white ml-1" />
              <span className="sr-only">Toggle navigation menu</span>
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs bg-[#000]">
            <div className="grid gap-4 p-4">
              <button
                onClick={() => handleSelect("/")}
                className="cursor-pointer inline-flex h-9 items-center justify-center rounded-md  px-4 py-2 text-base font-medium text-primary-foreground transition-colors hover:bg-[#000]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                aria-describedby={undefined}
              >
                Home
              </button>
              <button
                onClick={() => handleSelect("about")}
                className="cursor-pointer inline-flex h-9 items-center justify-center rounded-md  px-4 py-2 text-base font-medium text-primary-foreground transition-colors hover:bg-[#000]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                aria-describedby={undefined}
              >
                About
              </button>
             <button
                onClick={() => handleSelect("services")}
                className="cursor-pointer inline-flex h-9 items-center justify-center rounded-md  px-4 py-2 text-base font-medium text-primary-foreground transition-colors hover:bg-[#000]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                aria-describedby={undefined}
              >
                Services
              </button>
              <button
                onClick={() => handleSelect("contact")}
                className="cursor-pointer inline-flex h-9 items-center justify-center rounded-md  px-4 py-2 text-base font-medium text-primary-foreground transition-colors hover:bg-[#000]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                aria-describedby={undefined}
              >
                Contact Us
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export default Nav;