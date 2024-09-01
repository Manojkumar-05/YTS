import React from "react";

const Join = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] ">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Join Us</h1>
        <p className="text-gray-600 mb-8">
          Explore exciting opportunities to work and grow with us. Choose one of
          the options below to get started.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="/apply-jobs"
            className="bg-black text-white py-3 px-6 rounded-lg hover:bg-[#460073] transition duration-300"
          >
            Apply for Jobs
          </a>
          <a
            href="/apply-internships"
            className="bg-black text-white py-3 px-6 rounded-lg hover:bg-[#460073] transition duration-300"
          >
            Apply for Internships
          </a>
        </div>
      </div>
    </div>
  );
};

export default Join;
