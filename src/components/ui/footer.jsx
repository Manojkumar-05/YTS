import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-black">
            <Link
              to={"/"}
              className="text-[#8a31c2dd] no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              YAR
            </Link>
          </div>
          {/* <div className="flex-1">
            <p className="uppercase text-neutral-100 md:mb-6">Links</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className=" text-neutral-300 hover:text-[#8a31c2dd]">FAQ</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className=" text-neutral-300 hover:text-[#8a31c2dd]">Help</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className=" text-neutral-300 hover:text-[#8a31c2dd]">Support</a>
              </li>
            </ul>
          </div> */}
          {/* <div className="flex-1">
            <p className="uppercase text-neutral-100 md:mb-6">Legal</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className=" text-neutral-300 hover:text-[#8a31c2dd]">Terms</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className=" text-neutral-300 hover:text-[#8a31c2dd]">Privacy</a>
              </li>
            </ul>
          </div> */}
          <div className="flex-1">
            <p className="uppercase text-neutral-100 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://wa.me/message/GN4Y7XYZAYUEI1"
                  className=" text-neutral-300 hover:text-[#8a31c2dd]"
                >
                  WhatsApp
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://www.linkedin.com/in/yar-tech-services-2957b931b"
                  className=" text-neutral-300 hover:text-[#8a31c2dd]"
                >
                  Linkedin
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://www.instagram.com/yar_tech_service?utm_source=qr&igsh=dWUxdzl6NG03MWh0"
                  className=" text-neutral-300 hover:text-[#8a31c2dd]"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-neutral-100 md:mb-6">Company</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/services"
                  className=" text-neutral-300 hover:text-[#8a31c2dd]"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Our Services
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/about"
                  className=" text-neutral-300 hover:text-[#8a31c2dd]"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  About Us
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/contact"
                  className=" text-neutral-300 hover:text-[#8a31c2dd]"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer