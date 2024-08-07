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
                <img
                  priority
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
            className="p-4 flex flex-col  bg-black hover:bg-neutral-900 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full items-center">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-80 rounded-lg object-cover object-top ]"
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
    src: "https://imageio.forbes.com/specials-images/imageserve/645b3eca0059191fb09c02fa/15-Amazing-Real-World-Applications-Of-AI-Everyone-Should-Know-About/960x0.jpg?height=400&width=711&fit=bounds",
    content: () => (
      <p>
        Leverage the power of Artificial Intelligence to automate processes,
        gain insights, and enhance decision-making across your organization.
      </p>
    ),
  },
  {
    title: "Edge Computing",
    src: "https://www.networkcablingservices.com/wp-content/uploads/2021/11/edge-computing-graphic.jpg",
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
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeCI9FkSFEJOC_DIK5ZCu5MffwAJ6SJ6uNtQ&s",
    content: () => (
      <p>
        Transform your data into actionable insights with advanced data
        analytics services, helping you make informed business decisions.
      </p>
    ),
  },
  {
    title: "IoT",
    src: "https://www.ssldragon.com/wp-content/uploads/2023/05/iot-device-certificate.webp",
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
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJUWrYcyY6byzsX3AfL9LbvtpvjPW2KZ5fUQ&s",
    content: () => (
      <p>
        Enhance scalability, flexibility, and security with our cloud computing
        services, designed to meet the demands of modern businesses.
      </p>
    ),
  },
  {
    title: "AR/VR",
    src: "https://media.istockphoto.com/id/1351141161/photo/woman-wearing-vr-glasses-s.webp?b=1&s=170667a&w=0&k=20&c=zRX7KjPUZqm5IgV9FRAXZfp4dJZfiyb8-qgPljvwxYk=",
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
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1I1Jl4sRDqug9RnnJI0aYQPER34AK_7qc1g&s",
    content: () => (
      <p>
        Streamline operations and drive growth with enterprise solutions
        tailored to meet the specific needs of your business.
      </p>
    ),
  },
  {
    title: "Digital Engineering",
    src: "https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2019/06/Digital-Engineering.jpg",
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
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLTr17cdQhSzway_yWJTVBRfx9Ow1qDvNG6g&s",
    content: () => (
      <p>
        Enhance business operations with cognitive technologies that automate
        processes, improve efficiency, and enable smarter decision-making.
      </p>
    ),
  },
  {
    title: "Networking",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZqKS_Zh6YdJYet9bHEZcgt-BiRHCRk1o2gQ&s",
    content: () => (
      <p>
        Ensure robust, reliable, and secure communication infrastructure with
        our comprehensive networking solutions.
      </p>
    ),
  },
  {
    title: "Digital Marketing",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROl5sKvuHGEe2s0D4bHX0NxXtakhxvKyu1Sw&s",
    content: () => (
      <p>
        Boost your online presence and drive customer engagement with our
        strategic digital marketing services.
      </p>
    ),
  },
  {
    title: "Sustainability",
    src: "https://www.spcdn.org/blog/wp-content/uploads/2022/05/sustainable-marketing_elements.jpg",
    content: () => (
      <p>
        Adopt sustainable practices with our eco-friendly solutions designed to
        minimize environmental impact and promote long-term growth.
      </p>
    ),
  },
];
