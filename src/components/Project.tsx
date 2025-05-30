// import React from "react";
// import { FaExternalLinkAlt } from "react-icons/fa";

// interface CustomWorkProps {
//   workImg: string;
//   workAltName: string;
//   workTitle: string;
//   workDescription: string;
//   workURLlink: string;
// }
// const CustomWork: React.FC<CustomWorkProps> = ({
//   workImg,
//   workAltName,
//   workTitle,
//   workDescription,
//   workURLlink,
// }) => {
//   return (
//     <div className="rounded-xl relative overflow-hidden cursor-pointer reveal-on-scroll group">
//       <img
//         src={workImg}
//         alt={workAltName}
//         className="w-full h-auto"
//         loading="lazy"
//       />
//       <div className="w-full h-0 bg-gradient-to-b from-black/60 to-[#1d2bf4] rounded-lg absolute left-0 bottom-0 overflow-hidden flex flex-col items-center py-8 px-10 text-center text-white text-sm transition-[height] duration-500 group-hover:h-full group-hover:transform group-hover:scale-110">
//         <h3 className="font-medium mb-5">{workTitle}</h3>
//         <p>{workDescription}</p>
//         <a
//           href={workURLlink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-1 text-white no-underline text-sm leading-[35px] bg-darkblue w-[35px] h-[35px] rounded-full text-center flex items-center justify-center"
//         >
//           <FaExternalLinkAlt />
//         </a>
//       </div>
//     </div>
//   );
// };

const Project = () => {
  return (
    <>
      <div
        id="projects"
        className="bg-[#f9f9f9] min-h-screen px-8 lg:px-[70px] py-[80px] lg:py-[100px]"
      >
        <h1 className="font-semibold text-3xl mb-5">Projects</h1>
        <div className="grid grid-cols-auto-fit-250 gap-10">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-3">
              <span className="text-blue-600 font-semibold text-sm">
                2021 - 2025
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Passwave (Commercial Ticketing Platform)
            </h3>
            <p className="text-gray-600 mb-4">
              Led the frontend development of a university ticketing project
              scaled into a commercial platform, powering 50+ events with N2M+
              in transactions. Built dynamic, responsive UIs in React, optimized
              for high concurrency (200+ users), and implemented smooth user
              flows for ticket purchasing, QR check-ins, and real-time event
              updates.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                Node.js
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                GraphQL
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                MongoDB
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                AWS (EC2, RDS, S3)
              </span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-3">
              <span className="text-blue-600 font-semibold text-sm">
                2024 - 2025
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              GradWorks (Final-Year Project Repository)
            </h3>
            <p className="text-gray-600 mb-4">
              Developed a web-based repository for managing and accessing
              university final-year projects. Engineered the full-stack system
              using Node.js and React, integrated role-based access control, and
              enabled secure PDF uploads with fast search and filtering.
              Designed for scale, the platform supports supervision workflows,
              project versioning, and seamless cloud deployment.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                Node.js
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                Express
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                Render
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                Prisma
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                PostgreSQL
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                Vite
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                TailwindCSS
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                Postman
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
