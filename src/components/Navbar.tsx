import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import MenuIcon from "../assets/icons/MenuIcon";

const Navbar = () => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  const [activeLink, setActiveLink] = useState("#home");

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
  };
  return (
    <>
      <nav className="fixed top-0 left-0 z-[999] w-full border-b-gradient bg-white backdrop-blur-[8px] py-[25px] sm:px-[40px]">
        <div className="m-auto w-full px-[30px] sm:px-0 flex items-center justify-between">
          <a href="">
            <p className="text-[#2d2e32] text-[1.7rem] font-semibold">Fareed</p>
          </a>

          {/* On phone */}
          {!mobileNavIsOpen ? (
            <button
              className="text-[24px] sm:hidden"
              onClick={() => setMobileNavIsOpen(true)}
            >
              <MenuIcon />
            </button>
          ) : (
            <button
              className="text-[24px] text-white sm:hidden"
              onClick={() => setMobileNavIsOpen(false)}
            >
              <RiCloseLine color="black" />
            </button>
          )}

          <div className="hidden sm:flex flex-row items-center gap-[2rem] font-medium text-lg">
            <a
              href="#home"
              className={`relative hidden hover-effect sm:block ${
                activeLink === "#home" ? "active" : ""
              }`}
              onClick={() => handleSetActiveLink("#home")}
            >
              <p>Home</p>
              <span className="link-underline"></span>
            </a>

            <a
              href="#about"
              rel="noopener noreferrer"
              className={`relative hidden hover-effect sm:block ${
                activeLink === "#about" ? "active" : ""
              }`}
              onClick={() => handleSetActiveLink("#about")}
            >
              <p>About</p>
              <span className="link-underline"></span>
            </a>
            <a
              href="#projects"
              rel="noopener noreferrer"
              className={`relative hidden hover-effect sm:block ${
                activeLink === "#projects" ? "active" : ""
              }`}
              onClick={() => handleSetActiveLink("#projects")}
            >
              <p>Projects</p>
              <span className="link-underline"></span>
            </a>
            <a
              href="#contact"
              rel="noopener noreferrer"
              className={`relative hidden hover-effect sm:block ${
                activeLink === "#contact" ? "active" : ""
              }`}
              onClick={() => handleSetActiveLink("#contact")}
            >
              <p>Contacts</p>
              <span className="link-underline"></span>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile nav */}
      <div
        className={`sm:hidden w-full fixed top-0 left-0 z-[998] transition-all duration-300 h-auto shadow-xl ${
          mobileNavIsOpen
            ? "max-h-full overflow-auto hide-scroll pointer-events-auto bg-white"
            : "max-h-0 overflow-hidden pointer-events-none"
        }`}
      >
        <div className="h-[72px] bg-no-repeat bg-cover bg-center bg-[url('/assets/mobilebg.svg')]"></div>
        <div className="h-screen flex flex-col items-center justify-center pb-6 px-4 gap-3 bg-no-repeat bg-cover bg-center bg-[url('/assets/bg-mobile-nav.svg')]">
          <div className="flex flex-col items-center gap-[2rem] font-medium text-lg text-black">
            <a
              href="#home"
              rel="noopener noreferrer"
              className="block"
              onClick={() => setMobileNavIsOpen(false)}
            >
              <p>Home</p>
            </a>
            <a
              href="#about"
              rel="noopener noreferrer"
              className="block"
              onClick={() => setMobileNavIsOpen(false)}
            >
              <p>About</p>
            </a>
            <a
              href="#projects"
              rel="noopener noreferrer"
              className="block"
              onClick={() => setMobileNavIsOpen(false)}
            >
              <p>Projects</p>
            </a>
            <a
              href="#contact"
              rel="noopener noreferrer"
              className="block"
              onClick={() => setMobileNavIsOpen(false)}
            >
              <p>Contacts</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
