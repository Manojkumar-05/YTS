import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-full h-dvh">
      <section className="py-12 ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Get in Touch with YAR Tech Services
              </h2>
              <p className="text-muted-foreground md:text-xl">
                We are here to help you with any inquiries, support, or
                information you need. Whether you’re interested in our products,
                services, partnerships, or career opportunities, we look forward
                to hearing from you.
              </p>
            </motion.div>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                All Inquiries
              </h2>
              <div className="space-y-2">
                <p className="text-muted-foreground md:text-xl">
                  For all inquiries, please contact us at:
                </p>
                <div className="flex items-center gap-2">
                  <MailIcon className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="mailto:info@yarts.in"
                    className="text-primary hover:underline"
                  >
                    info@yarts.in
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="tel:+919500210190"
                    className="text-primary hover:underline"
                  >
                    +91 9500210190
                  </a>
                </div>
                <p className="text-muted-foreground md:text-xl">
                  Support Hours: Monday to Sunday, 9:00 AM – 10:00 PM
                </p>
                <p className="text-muted-foreground md:text-xl">
                  Website:{" "}
                  <a
                    href="http://yarts.in"
                    className="text-primary hover:underline"
                  >
                    yarts.in
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Office Locations
              </h2>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">Headquarters</h3>
                  <p className="text-muted-foreground">
                    YAR Tech Services, Venkatraya Nagar, Nizampet, Hyderabad,
                    Telangana 500090
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Regional Offices</h3>
                  <p>Madurai, Coimbatore, Chennai, Banglore</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Social Media
              </h2>

              <div className="mt-4 space-y-4 flex gap-5">
                <a href="#" className="">
                  <LinkedinIcon className="h-6 w-6 text-blue-700 hover:scale-110 transition-transform duration-200" />
                </a>
                <a href="#" className="">
                  <TwitterIcon className="h-6 w-6 text-blue-400 hover:scale-110 transition-transform duration-200" />
                </a>
                <a href="#" className="">
                  <InstagramIcon className="h-6 w-6 text-pink-600 hover:scale-110 transition-transform duration-200" />
                </a>
                <a href="#" className="">
                  <FacebookIcon className="h-6 w-6 text-blue-700 hover:scale-110 transition-transform duration-200" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function FacebookIcon(props) {
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
      <path d="M18 2h4v4h-4V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2h-2v4h2v8h4v-8h4l-1-4h-3V4h1a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default Contact;
