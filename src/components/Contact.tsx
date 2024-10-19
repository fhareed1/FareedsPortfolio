import { FaRegAddressBook } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="py-[11rem] px-[40px] sm:px-[70px] bg-[#fff]"
      >
        <div className="max-w-[107rem] ">
          <div className="flex flex-col">
            <div className="">
              <p className="uppercase text-[#147efb] font-medium text-[1.4rem]">
                contact
              </p>
              <h3 className="text-[1.5rem] font-semibold">
                Don't be shy! Hit me up! 👇
              </h3>
            </div>
            <div className="flex flex-wrap gap-[8rem] mt-[6rem]">
              <div className="items-center flex gap-[1.5rem]">
                <span className="items-center bg-[#fff] rounded-[50%] shadow-[0_0_10px_rgba(0,0,0,0.1)] text-[#147efb] flex h-[3rem] justify-center w-[3rem] sm:w-[5rem] sm:h-[5rem] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="tabler-icon tabler-icon-map-search"
                  >
                    <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                    <path d="M9 4v13"></path>
                    <path d="M15 7v5"></path>
                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M20.2 20.2l1.8 1.8"></path>
                  </svg>
                </span>
                <div className="flex flex-col gap[.5rem]">
                  <h3 className="text-base font-semibold">Location</h3>
                  <p className="text-[#767676] cursor-pointer text-lg">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
              <div className="items-center flex gap-[1.5rem]">
                <span className="items-center bg-[#fff] rounded-[50%] shadow-[0_0_10px_rgba(0,0,0,0.1)] text-[#147efb] flex h-[3rem] justify-center w-[3rem] sm:w-[5rem] sm:h-[5rem] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="tabler-icon tabler-icon-mail"
                  >
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                    <path d="M3 7l9 6l9 -6"></path>
                  </svg>
                </span>
                <div className="flex flex-col gap[.5rem]">
                  <h3 className="text-base font-semibold">Mail</h3>
                  <a
                    href="mailto:folorunshofareed0@gmail.com"
                    className="text-[#767676] cursor-pointer text-lg"
                  >
                    folorunshofareed0@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-[1.5rem]">
                <span className="items-center bg-[#fff] rounded-[50%] shadow-[0_0_10px_rgba(0,0,0,0.1)] text-[#147efb] flex h-[3rem] justify-center w-[3rem] sm:w-[5rem] sm:h-[5rem] ">
                  <FaRegAddressBook color="blue" size={20} />
                </span>
                <a
                  href="https://drive.google.com/file/d/1Xb4eqKjysf4lZHS9DM8ugOQUY4KgOGnn/view?usp=drive_link"
                  className="flex flex-col gap-[.5rem]"
                  target="_blank"
                  download
                >
                  <p className="text-base font-semibold">Resume</p>
                  <p className="flex gap-1">
                    <VscPreview size={20} />
                    Click to view
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
