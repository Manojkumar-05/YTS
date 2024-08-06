import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./hooks/use-outside-click";
import { Image } from "@nextui-org/react";

export default function ExpandableCards() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] ">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center  rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral- text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral- text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 te"
                  >
                    See More
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow- text-neutral-400 [mask:linear-gradient(to_bott,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-[90%] mx-auto w-screen grid grid-cols-1 md:grid-cols-3 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col bg-black hover:bg-neutral-900 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral- text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral- text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "AI",
    src: "../assets/ai.jpg",
    content: () => (
      <p>
        Leverage the power of Artificial Intelligence to automate processes,
        gain insights, and enhance decision-making across your organization.
      </p>
    ),
  },
  {
    title: "Edge Computing",
    src: "../assets/edge-computing.jpg",
    content: () => (
      <p>
        Optimize data processing and reduce latency with edge computing
        solutions that bring computation closer to the source of data
        generation.
      </p>
    ),
  },
  {
    title: "Data Analytics",
    src: "../assets/data-analytics.jpg",
    content: () => (
      <p>
        Transform your data into actionable insights with advanced data
        analytics services, helping you make informed business decisions.
      </p>
    ),
  },
  {
    title: "IoT",
    src: "../assets/iot.jpg",
    content: () => (
      <p>
        Connect devices and systems with Internet of Things (IoT) solutions that
        improve operational efficiency, enable real-time monitoring, and drive
        innovation.
      </p>
    ),
  },
  {
    title: "Cloud",
    src: "../assets/cloud.jpg",
    content: () => (
      <p>
        Enhance scalability, flexibility, and security with our cloud computing
        services, designed to meet the demands of modern businesses.
      </p>
    ),
  },
  {
    title: "AR/VR",
    src: "../assets/ar-vr.jpg",
    content: () => (
      <p>
        Create immersive experiences with Augmented Reality (AR) and Virtual
        Reality (VR) technologies for applications ranging from training to
        customer engagement.
      </p>
    ),
  },
  {
    title: "Enterprise Solutions",
    src: "../assets/enterprise-solutions.jpg",
    content: () => (
      <p>
        Streamline operations and drive growth with enterprise solutions
        tailored to meet the specific needs of your business.
      </p>
    ),
  },
  {
    title: "Digital Engineering",
    src: "../assets/digital-engineering.jpg",
    content: () => (
      <p>
        Innovate and transform your product development process with digital
        engineering solutions that integrate cutting-edge technologies and
        methodologies.
      </p>
    ),
  },
  {
    title: "Cognitive Business Operations",
    src: "../assets/cognitive-business-operations.jpg",
    content: () => (
      <p>
        Enhance business operations with cognitive technologies that automate
        processes, improve efficiency, and enable smarter decision-making.
      </p>
    ),
  },
  {
    title: "Networking",
    src: "../assets/networking.jpg",
    content: () => (
      <p>
        Ensure robust, reliable, and secure communication infrastructure with
        our comprehensive networking solutions.
      </p>
    ),
  },
  {
    title: "Digital Marketing",
    src: "../assets/digital-marketing.jpg",
    content: () => (
      <p>
        Boost your online presence and drive customer engagement with our
        strategic digital marketing services.
      </p>
    ),
  },
  {
    title: "Sustainability",
    src: "../assets/sustainability.jpg",
    content: () => (
      <p>
        Adopt sustainable practices with our eco-friendly solutions designed to
        minimize environmental impact and promote long-term growth.
      </p>
    ),
  },
];
