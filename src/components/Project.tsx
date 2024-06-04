import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface CustomWorkProps {
  workImg: string;
  workAltName: string;
  workTitle: string;
  workDescription: string;
  workURLlink: string;
}
const CustomWork: React.FC<CustomWorkProps> = ({
  workImg,
  workAltName,
  workTitle,
  workDescription,
  workURLlink,
}) => {
  return (
    <div className="rounded-xl relative overflow-hidden cursor-pointer reveal-on-scroll group">
      <img
        src={workImg}
        alt={workAltName}
        className="w-full h-auto"
        loading="lazy"
      />
      <div className="w-full h-0 bg-gradient-to-b from-black/60 to-[#1d2bf4] rounded-lg absolute left-0 bottom-0 overflow-hidden flex flex-col items-center py-8 px-10 text-center text-white text-sm transition-[height] duration-500 group-hover:h-full group-hover:transform group-hover:scale-110">
        <h3 className="font-medium mb-5">{workTitle}</h3>
        <p>{workDescription}</p>
        <a
          href={workURLlink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 text-white no-underline text-sm leading-[35px] bg-darkblue w-[35px] h-[35px] rounded-full text-center flex items-center justify-center"
        >
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <>
      <div
        id="projects"
        className="bg-[#f9f9f9] min-h-screen px-[70px] py-[80px] lg:py-[100px]"
      >
        <h1 className="font-semibold text-3xl mb-5">Projects</h1>
        <div className="grid grid-cols-auto-fit-250 gap-10">
          <CustomWork
            workImg="/assets/barrel.png"
            workAltName="Barrel Landing Page"
            workTitle="Barrel Landing Page"
            workDescription="This is a procurement automation"
            workURLlink="https://usebarrel.io/"
          />
          <CustomWork
            workImg="/assets/passwave.png"
            workAltName="Ticketing Events app"
            workTitle="Ticketing Events app"
            workDescription="This allows users create events and sell to users online"
            workURLlink="https://www.passwave.ng/"
          />
          <CustomWork
            workImg="/assets/aiscreenshot.png"
            workAltName="Ai Site"
            workTitle="Ai Site"
            workDescription="This is a Ai Site."
            workURLlink="https://reedcarwash.netlify.app/"
          />
          {/* <CustomWork
            workImg="/assets/carscreenshot.png"
            workAltName="Car Site"
            workTitle="Car Wash Site"
            workDescription="This is a Car Wash Site."
            workURLlink="https://reedcarwash.netlify.app/"
          /> */}
          <CustomWork
            workImg="/assets/work2.jpg"
            workAltName="Food App"
            workTitle="Food App"
            workDescription="This is a Food App."
            workURLlink="https://fareedfoodapp.netlify.app/"
          />
          <CustomWork
            workImg="/assets/expenseScr.png"
            workAltName="ExpenseTracker"
            workTitle="Expense App"
            workDescription="This is a React Expense App."
            workURLlink="https://fareed-expense-app.netlify.app/"
          />
          <CustomWork
            workImg="/assets/work1.jpg"
            workAltName="Weather app"
            workTitle="Weather App"
            workDescription="This allows you to search the live update of the weather."
            workURLlink="https://fhareed1.github.io/Weather-App/"
          />
          <CustomWork
            workImg="/assets/work3.jpg"
            workAltName="Weather app"
            workTitle="Github UserFinder"
            workDescription="This allows you search for a github user"
            workURLlink="https://fhareed1.github.io/githubfinder/"
          />
        </div>
      </div>
    </>
  );
};

export default Project;
