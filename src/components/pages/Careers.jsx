import { Button } from "@nextui-org/react";
import { ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full py-12 md:mt-[-5rem] mt-[0rem] md:pt-24 lg:pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-2">
          <h1 className="text-4xl font-bold ">Careers</h1>
          <p className="text-xl  mt-4">Join Our Team and Build the Future</p>
          {/* <Button
            className="bg-black rounded-lg h-[2.5rem] w-[8rem] font-semibold flex"
            onClick={() => navigate("/services")}
          >
            <span>Join Now</span>{" "}
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </Button> */}
          <p className="text-lg  mt-2">
            At YAR Tech Services, we are passionate about innovation,
            cutting-edge technologies, and making a positive impact on the
            world. Our dynamic and diverse team is at the heart of everything we
            do, and we are always looking for talented individuals who share our
            vision and values.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-semibold ">Why Work with Us?</h2>
            <ul className="list-disc list-inside mt-4 space-y-2 ">
              <li>
                <span className="font-semibold">Innovative Environment:</span>
                Be part of a culture that encourages creativity, innovation, and
                continuous learning.
              </li>
              <li>
                <span className="font-semibold">Cutting-Edge Technologies:</span>
                Work on projects that utilize the latest technologies and shape
                the future of various industries.
              </li>
              <li>
                <span className="font-semibold">Collaborative Culture:</span>
                Join a team that values collaboration, open communication, and
                mutual respect.
              </li>
              <li>
                <span className="font-semibold">Professional Growth:</span>
                Access opportunities for professional development, training, and
                career advancement.
              </li>
              <li>
                <span className="font-semibold">Impactful Work:</span>
                Contribute to meaningful projects that make a difference in the
                world.
              </li>
            </ul>
          </div>

          {/* <div>
            <h2 className="text-3xl font-semibold ">Current Openings</h2>
            <div className="mt-4 space-y-8">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="p-6 bg-white text-black rounded-lg shadow-lg"
                >
                  <h3 className="text-2xl font-bold ">{job.title}</h3>
                  <p className=" mt-2">{job.description}</p>
                  <p className=" mt-2">
                    <span className="font-semibold">Requirements:</span>{" "}
                    {job.requirements}
                  </p>
                </div>
              ))}
            </div>
          </div> */}

          <div className="text-center mt-12">
            <h2 className="text-3xl font-semibold ">How to Apply</h2>
            <p className=" mt-4">
              If you are ready to take your career to the next level and be part
              of a team that is shaping the future, we would love to hear from
              you. Please send your resume and a cover letter to{" "}
              <a
                href="mailto:info@yarts.in"
                className="text-blue-600 hover:underline"
              >
                info@yarts.in
              </a>
              . Be sure to specify the position you are applying for in the
              subject line.
            </p>
            <p className=" mt-4">
              Join YAR Tech Services and help us build wonders through
              innovation and cutting-edge technologies. Together, we can
              transform the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
