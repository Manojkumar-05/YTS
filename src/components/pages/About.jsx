import { IconBook, IconDeviceLaptop, IconGlobe, IconSchool, IconTools } from "@tabler/icons-react";
import { University } from "lucide-react";
import meetingImg from "../assets/meet.jpg"
import GradualSpacing from "../ui/ui-comp/gradual-spacing";
import { TextGenerateEffect } from "../ui/ui-comp/text-generate-effect";

const About = () => {
  return (
    <div className="flex flex-col min-h-dvh bg-[#460073] text-white font-medium">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black ">
        <div className="container px-4 md:px-6 text-center">
          <GradualSpacing
            className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
            text="About Us"
          />
          {/* <p className="mx-auto max-w-[700px] text-lg md:text-xl mt-4">
            Welcome to YAR Tech Services, where we transform visions into
            reality. As a premier Product Development, Software Development,
            consulting, and business solutions organization, we have been
            partnering with businesses for the past four years, driving success
            through innovative approaches and state-of-the-art technologies.
          </p> */}
          <TextGenerateEffect
            className="mx-auto max-w-[700px] text-lg md:text-xl mt-4"
            words={
              "  Welcome to YAR Tech Services, where we transform visions into reality. As a premier Product Development, Software Development, consulting, and business solutions organization, we have been partnering with businesses for the past four years, driving success through innovative approaches and state-of-the-art technologies."
            }
          />
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Who We Are
              </h2>
              <p className="text-white">
                Building Wonders through Innovation and Cutting-Edge
                Technologies. Our team of dedicated professionals is committed
                to pushing the boundaries of what's possible, crafting solutions
                that not only meet but exceed our clients' expectations. Join us
                on this journey as we continue to build wonders, one innovation
                at a time. Together, we can transform the world.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src={meetingImg}
                alt="Meeting"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="text-black container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What We Do
            </h2>
            <p className=" mx-auto max-w-[700px]">
              Developing Eco-Friendly Products through Innovation and
              Cutting-Edge Technologies. At YAR Tech Services, we are committed
              to creating products that harness the power of innovation and
              cutting-edge technologies while prioritizing environmental
              sustainability. Our dedicated team works tirelessly to develop
              eco-friendly solutions that reduce environmental impact while
              delivering exceptional performance.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 font-normal">
        <div className=" container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              MOUs and Partnerships
            </h2>
            <p className="mx-auto max-w-[700px]">
              At YAR Tech Services, we believe in the power of collaboration and
              the importance of nurturing future talent. We have established
              Memorandums of Understanding (MOUs) and partnerships with a
              diverse range of educational institutions.
            </p>
          </div>
          <div className="grid gap-6 mt-8 md:grid-cols-3 text-black">
            <div className="card bg-white rounded-lg p-6 shadow-sm">
              <IconSchool size={70} className="mx-auto" />
              <h3 className="text-xl font-bold mt-4">Engineering Colleges</h3>
              <p className="mt-2">
                We partner with leading engineering colleges to provide students
                with hands-on experience in product development, software
                engineering, and emerging technologies, preparing them for
                successful careers in the tech industry.
              </p>
            </div>
            <div className="card bg-white rounded-lg p-6 shadow-sm">
              <IconBook size={70} className="mx-auto" />
              <h3 className="text-xl font-bold mt-4">
                Arts and Science Colleges
              </h3>
              <p className="mt-2">
                Our collaborations with arts and science colleges facilitate
                interdisciplinary learning, integrating technology with various
                fields of study to inspire innovative thinking and creative
                problem-solving.
              </p>
            </div>
            <div className="card bg-white rounded-lg p-6 shadow-sm">
              <IconTools size={70} className="mx-auto" />
              <h3 className="text-xl font-bold mt-4">Technical Institutes</h3>
              <p className="mt-2">
                Through our partnerships with technical institutes, we offer
                specialized training programs and workshops, equipping students
                with the skills and knowledge needed to excel in technical and
                vocational careers.
              </p>
            </div>
            <div className="card bg-white rounded-lg p-6 shadow-sm">
              <University size={70} className="mx-auto" />
              <h3 className="text-xl font-bold mt-4">Universities</h3>
              <p className="mt-2">
                Our MOUs with universities around the globe enable us to engage
                in joint research projects, share resources, and create
                internship opportunities that benefit both students and faculty
                members.
              </p>
            </div>
            <div className="card bg-white rounded-lg p-6 shadow-sm">
              <IconGlobe size={70} className="mx-auto" />
              <h3 className="text-xl font-bold mt-4">International Schools</h3>
              <p className="mt-2">
                We collaborate with international schools to introduce advanced
                technology curricula and extracurricular programs, fostering a
                global perspective and preparing students for the digital
                future.
              </p>
            </div>
            <div className="card bg-white rounded-lg p-6 shadow-sm">
              <IconDeviceLaptop size={70} className="mx-auto" />
              <h3 className="text-xl font-bold mt-4">CBSE Schools</h3>
              <p className="mt-2">
                By partnering with CBSE schools, we bring technology-driven
                educational initiatives to younger students, promoting early
                exposure to STEM subjects and encouraging innovation from a
                young age.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
