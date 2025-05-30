const About = () => {
  return (
    <>
      <div
        id="about"
        className="bg-white w-full  min-h-screen flex flex-col items-center lg:flex-row lg:justify-between px-[40px] sm:px-[70px]  py-[80px] lg:py-[150px] content-center justify-around sm:justify-normal"
      >
        {/* Image */}
        <div className="flex w-full img-side">
          {/* <img src="/assets/working-emoji.png" alt="" className="work-emoji" /> */}
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
            Software engineer
          </h4>
          <p className="font-medium text-[#767676] leading-[1.5] text-center sm:text-justify">
            A full-stack engineer with hands-on experience in infrastructure,
            API architecture, and UI/UX, I’ve delivered systems that manage
            procurement flows, digital repositories, and event platforms—like
            PassWave and Barrel—serving hundreds of users and processing
            transactions at scale. Whether it's building internal admin
            dashboards, real-time features, or automating workflows, I thrive in
            creating robust, user-focused solutions that simplify complex
            processes.
            <br />
            <br />
            My main stack currently is TypeScript, Javascript, React/Next.js,
            Node, Express, PostgreSQL.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
