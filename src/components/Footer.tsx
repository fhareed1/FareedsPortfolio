import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className=" bg-[#2d2e32] w-full px-[40px] sm:px-[70px]  py-[5rem] ">
        <div className="m-auto max-w-[107rem] ">
          <div className="items-center flex justify-between flex-col sm:flex-row space-y-5">
            <h3 className="text-[#fff] text-lg whitespace-nowrap">
              Copyright © {currentYear}. All rights are reserved
            </h3>
            <div className="flex flex-row items-center gap-4 justify-center lg:justify-normal place-content-center">
              <a
                href="https://www.linkedin.com/in/fareed-folorunsho/"
                target="_blank"
              >
                <PiLinkedinLogoBold size={32} color="white" />
              </a>

              <a href="https://github.com/fhareed1/" target="_blank">
                <FiGithub size={32} color="white" />
              </a>
              {/* <a href="https://x.com/CodedFareed/" target="_blank">
                <BsTwitterX size={32} color="white" />
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
