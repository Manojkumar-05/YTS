import { useState } from "react";
import {
  IconBrandWhatsapp,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react"; // Import icons from tabler
import WhatsApp from "../assets/QR/Whatsapp.jpg";
import Instagram from "../assets/QR/Instagram.jpg";
import LinkedIn from "../assets/QR/LinkedIn.png";

const socialMediaLinks = [
  {
    name: "WhatsApp",
    url: "https://wa.me/message/GN4Y7XYZAYUEI1",
    qr: WhatsApp,
    icon: <IconBrandWhatsapp className="h-6 w-6 text-green-400" />,
    color: "bg-green-400", // Change text color to bg color
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yar-tech-services-2957b931b",
    qr: LinkedIn,
    icon: <IconBrandLinkedin className="h-6 w-6 text-blue-700" />,
    color: "bg-blue-700", // Change text color to bg color
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/yar_tech_service?utm_source=qr&igsh=dWUxdzl6NG03MWh0",
    qr: Instagram,
    icon: <IconBrandInstagram className="h-6 w-6 text-pink-500" />,
    color: "bg-pink-500", // Change text color to bg color
  },
];

const SocialMediaModal = ({ isOpen, onClose, selectedMedia }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`${selectedMedia.color} rounded-lg p-8 max-w-sm w-full`}>
        <h3 className="text-2xl font-bold mb-4 text-white">
          {selectedMedia.name}
        </h3>
        <img
          src={selectedMedia.qr}
          alt={`${selectedMedia.name} QR`}
          className="w-40 h-40 mx-auto mb-4"
        />
        <p className="text-center mb-4 text-white">
          Scan the QR code or visit the link below:
        </p>
        <a
          href={selectedMedia.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-white"
        >
          URL : <span className="text-blue-500 underline">{selectedMedia.name}</span>
        </a>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-white text-black py-2 rounded-lg hover:bg-gray-300 transition-all"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const SocialMediaLinks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleIconClick = (media) => {
    setSelectedMedia(media);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMedia(null);
  };

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Social Media
        </h2>
        <div className="flex gap-3 mt-5 transition-all ease-in-out duration-300">
          {socialMediaLinks.map((media) => (
            <button
              key={media.name}
              onClick={() => handleIconClick(media)}
              className="hover:scale-110 transition-transform duration-200"
            >
              {media.icon}
            </button>
          ))}
        </div>
      </div>

      <SocialMediaModal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedMedia={selectedMedia}
      />
    </>
  );
};

export default SocialMediaLinks;
