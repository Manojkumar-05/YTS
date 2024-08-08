import { Button } from "@nextui-org/react";
import { ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const navigate = useNavigate()
  const jobOpenings = [
    {
      title: "Software Developers",
      description:
        "Develop and maintain software solutions across various platforms.",
      requirements:
        "Proficiency in programming languages such as Java, Python, or C++; experience with software development lifecycle.",
    },
    {
      title: "Product Managers",
      description:
        "Oversee product development from ideation to launch, ensuring alignment with business goals.",
      requirements:
        "Strong project management skills, experience in product development, excellent communication abilities.",
    },
    {
      title: "Data Analysts",
      description:
        "Analyze data to provide insights that drive business decisions and strategies.",
      requirements:
        "Proficiency in data analysis tools, strong analytical skills, experience with big data technologies.",
    },
    {
      title: "IoT Engineers",
      description:
        "Design and implement IoT solutions to enhance connectivity and automation.",
      requirements:
        "Experience with IoT platforms and devices, strong problem-solving skills, knowledge of networking protocols.",
    },
    {
      title: "AI Specialists",
      description:
        "Develop and integrate AI solutions to improve product functionality and user experience.",
      requirements:
        "Expertise in machine learning algorithms, experience with AI frameworks, strong programming skills.",
    },
    {
      title: "Digital Marketing Experts",
      description:
        "Plan and execute digital marketing strategies to enhance our online presence and engagement.",
      requirements:
        "Experience with digital marketing tools and platforms, strong analytical and creative skills.",
    },
  ];

  return (
    <div className="w-full py-12 md:mt-[-5rem] mt-[0rem] md:py-24 lg:py-32">
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
                Innovative Environment: Be part of a culture that encourages
                creativity, innovation, and continuous learning.
              </li>
              <li>
                Cutting-Edge Technologies: Work on projects that utilize the
                latest technologies and shape the future of various industries.
              </li>
              <li>
                Collaborative Culture: Join a team that values collaboration,
                open communication, and mutual respect.
              </li>
              <li>
                Professional Growth: Access opportunities for professional
                development, training, and career advancement.
              </li>
              <li>
                Impactful Work: Contribute to meaningful projects that make a
                difference in the world.
              </li>
            </ul>
          </div>

          <div>
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
          </div>

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
