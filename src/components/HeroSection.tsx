import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
// import { BsTwitterX } from "react-icons/bs";

const HeroSection = () => {
  return (
    <>
      <div
        id="home"
        className="bg-[#F9F9F9] min-h-screen align-middle pt-[106px] sm:px-[70px] w-full space-y-[3rem] content-center "
      >
        {/* Top section */}
        <div className="flex flex-col-reverse lg:flex-row items-center  justify-between w-full">
          {/* Left section */}
          <div className="flex flex-col gap-10 lg:w-1/2 pt-5 w-full lg:px-0 px-5">
            {/* h1 */}
            <div className="flex flex-row gap-1 items-center w-full text-center place-content-center lg:place-content-start">
              <h1 className="text-3xl sm:text-5xl font-semibold sm:font-medium whitespace-nowrap text-center">
                Hi, I'm <span className="text-blue-600"> Fareed Folorunsho </span>
              </h1>
            </div>
            {/* subtext */}
            <div className="w-full">
              <p className="leading-6 w-full text-center  lg:text-justify items-start">
                A full-stack engineer passionate about building end-to-end
                systems that power real-world operations. I specialize in
                crafting scalable web applications using Node.js, PostgreSQL,
                and Express on the backend, paired with React, TailwindCSS, and
                GraphQL/REST on the frontend.
              </p>
            </div>
            {/* Links */}
            <div className="flex flex-row items-center gap-4 justify-center lg:justify-normal place-content-center">
              <a
                href="https://www.linkedin.com/in/fareed-folorunsho/"
                target="_blank"
              >
                <PiLinkedinLogoBold size={32} />
              </a>

              <a href="https://github.com/fhareed1/" target="_blank">
                <FiGithub size={32} />
              </a>
              {/* <a href="https://x.com/CodedFareed/" target="_blank">
                <BsTwitterX size={32} />
              </a> */}
            </div>
          </div>
          {/* Right section */}
          <div className="hero-img "></div>
        </div>

        {/* Stack section */}
        <div className="align-middle bottom-0 flex flex-col  sm:flex-row font-[1.7rem] left-0 px-[70px] sm:px-0 gap-3 items-center ">
          <p className="text-center sm:border-b-0 sm:border-r-[2px] border-b-[2px] border-solid border-[#2d2e327f] mb-4 font-semibold pr-1 ">
            Tech Stack
          </p>

          <ul className="flex flex-col sm:flex-row flex-wrap gap-[2rem] lg:gap-[3rem]">
            <li className="cursor-pointer">
              <img
                src="https://skillicons.dev/icons?i=html,css"
                alt="skill-icon"
                className="transition-all ease-in-out 0.3s hover:translate-y-[-1rem]"
              />
            </li>
            <li className="cursor-pointer">
              <img
                src="https://skillicons.dev/icons?i=js,ts"
                alt="skill-icon"
                className="transition-all ease-in-out 0.3s hover:translate-y-[-1rem]"
              />
            </li>
            <li className="cursor-pointer">
              <img
                src="https://skillicons.dev/icons?i=react,next"
                alt="skill-icon"
                className="transition-all ease-in-out 0.3s hover:translate-y-[-1rem]"
              />
            </li>
            <li className="cursor-pointer">
              <img
                src="https://skillicons.dev/icons?i=tailwind,scss"
                alt="skill-icon"
                className="transition-all ease-in-out 0.3s hover:translate-y-[-1rem]"
              />
            </li>
            <li className="cursor-pointer">
              <img
                src="https://skillicons.dev/icons?i=nodejs,express,postgres"
                alt="skill-icon"
                className="transition-all ease-in-out duration-300 hover:translate-y-[-1rem]"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
