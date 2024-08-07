import React from 'react'

const Footer = () => {
  return (
 <footer className="bg-black text-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-black">
            <a className="text-[#460073] no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
              YAR
            </a>
          </div>
          <div className="flex-1">
            <p className="uppercase text-neutral-100 md:mb-6">Links</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-neutral-300 hover:text-[#460073]">FAQ</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-neutral-300 hover:text-[#460073]">Help</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-neutral-300 hover:text-[#460073]">Support</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-neutral-100 md:mb-6">Legal</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-neutral-300 hover:text-[#460073]">Terms</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-neutral-300 hover:text-[#460073]">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-neutral-100 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-neutral-300 hover:text-[#460073]">Facebook</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-neutral-300 hover:text-[#460073]">Linkedin</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-neutral-300 hover:text-[#460073]">Twitter</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-neutral-100 md:mb-6">Company</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-neutral-300 hover:text-[#460073]">Official Blog</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-neutral-300 hover:text-[#460073]">About Us</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-neutral-300 hover:text-[#460073]">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </footer>
  )
}

export default Footer