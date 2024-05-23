const About = () => {
  return (
    <>
      <div
        id="about"
        className="bg-white w-full  min-h-screen flex flex-col items-center lg:flex-row lg:justify-between px-[40px] sm:px-[70px]  py-[80px] lg:py-[150px] content-center"
      >
        {/* Image */}
        <div className="flex w-full img-side">
          <img src="/assets/working-emoji.png" alt="" className="work-emoji" />
          <img
            src="/assets/about.webp"
            alt=""
            className="img-side__main-img "
            loading="lazy"
          />
          <span>
            <img src="/assets/rotatingtext.svg" alt="text" className="" />
          </span>
        </div>
        {/* Text section */}
        <div className="flex flex-col w-full gap-4 pt-10  sm:pt-0">
          <h3 className="text-[#147efb] font-bold text-lg text-center sm:text-justify sm:text-xl uppercase">
            About me
          </h3>
          <h4 className="text-2xl sm:text-[30px] leading-[1.4] font-semibold text-center sm:text-justify">
            Front-end Developer <br /> based in Lagos, Nigeria 📍
          </h4>
          <p className="font-medium text-[#767676] leading-[1.5] text-center sm:text-justify">
            Hey, my name is Fareed, and I'm a Frontend Developer. My passion is
            to create and develop a clean UI/UX for my users.
            <br />
            <br />
            My main stack currently is React/Next.js in combination with
            Tailwind CSS and TypeScript.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
