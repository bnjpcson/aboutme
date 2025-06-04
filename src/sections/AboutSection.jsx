import React, { useEffect, useRef, useState } from "react";
import CountUp from "../reactbits/CountUp";
import Squares from "../reactbits/Squares";
import SplitText from "../reactbits/SplitText";
import RotatingText from "../reactbits/RotatingText";
import ShinyText from "../reactbits/ShinyText";

const AboutSection = ({ theme }) => {
  const experiencesData = [
    {
      date: "March 2024 - Present",
      role: "Software Engineer",
      company: "FullSuite",
      duties: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil ratione ex saepe laboriosam tempore itaque, laudantium neque, quidem dignissimos qui minima reiciendis natus obcaecati magni aperiam doloribus aliquid commodi!",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quos quam dicta quis quaerat a dolores cupiditate officiis, accusantium sequi? Ratione, quod nihil? Rem, reiciendis at obcaecati eligendi nesciunt qui?",
      ],
    },
    {
      date: "August 2023 - February 2024",
      role: "Web Developer",
      company: "Addessa Corporation",
      duties: [
        "Enhanced company's websites by implementing additional functionalities using Laravel and jQuery.",
        "Revamped company's websites using Laravel for backend development and Vue.js for frontend design.",
        "Ensure and maintained the continuous functionalities of all assigned company websites.",
        "Backed up files and conducted regular monitoring of website statistics and status on a web hosting platform.",
        "Provides technical assistance and support to colleagues for resolving company-related technical issues and problems.",
      ],
    },
    {
      date: "March 2023 - June 2023",
      role: "Intern",
      company: "Global Agility Solutions",
      duties: [
        "Designed and developed a company's Web-based ID System using Laravel PHP Framework",
        "Designed and developed a company's ID System using C# Windows Form",
        "Provides troubleshooting and maintenance support for PCs and laptops, diagnosing and resolving hardware and software issues to ensure optimal functionality.",
      ],
    },
  ];

  const [experiences, setExperiences] = useState(experiencesData);

  function getElapsedTimeFromAugust2023() {
    const startDate = new Date(2023, 7); // August 2023 (months are 0-indexed)
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();

    // Adjust if current month is before start month
    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months };
  }

  const counterData = [
    {
      count: getElapsedTimeFromAugust2023().years,
      plus: getElapsedTimeFromAugust2023().months > 0,
      label: "Years of Experience",
    },
    {
      count: 20,
      plus: false,
      label: "Handled Projects",
    },
    {
      count: 5,
      plus: false,
      label: "Certificates",
    },
  ];

  const [counter, setCounter] = useState(counterData);

  const [restartKey, setRestartKey] = useState(0);

  const handleRestart = () => {
    setRestartKey((prev) => prev + 1); // force re-mount
  };

  useEffect(() => {
    // console.log(experiences);
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col items-center w-full bg-black max-w-[1920px]"
    >
      <div className="flex flex-col px-5 items-center text-light min-h-screen max-w-5xl pb-20 w-full">
        <h1 className="poppins-semibold text-5xl md:text-4xl text-center flex items-center gap-3">
          <span className="text-light">#</span>
          <ShinyText text={"About"} speed={5} className="bg-primary py-3" />
        </h1>

        <div className="divider"></div>

        <div className="flex flex-col lg:flex-row items-start justify-start w-full">
          <div className="z-0 flex flex-col w-full">
            <div className="mockup-phone z-0">
              <div className="camera z-0"></div>
              <div className="display">
                <div
                  className={`artboard artboard-demo phone-1 bg-dark text-white z-0`}
                >
                  <div className="relative w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                      <Squares
                        speed={0.5}
                        squareSize={40}
                        direction="diagonal" // up, down, left, right, diagonal
                        borderColor="#808080"
                      />
                    </div>
                    <div className="relative bg-transparent flex h-full px-14 py-10 ">
                      <div className="flex flex-col items-start justify-between w-full">
                        <div className="flex flex-col gap-7 w-full mt-10">
                          {counter.map((count) => {
                            return (
                              <div
                                className="flex flex-col items-center"
                                key={`counter-${count.label}-${restartKey}`}
                              >
                                <div className="flex items-center gap-1 justify-center">
                                  <CountUp
                                    from={0}
                                    to={count.count}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text text-7xl poppins-bold text-light"
                                    key={`countup-${count.label}-${restartKey}`} // force rerender
                                  />
                                  {count.plus && (
                                    <span className=" poppins-bold text-4xl text-light">
                                      +
                                    </span>
                                  )}
                                </div>
                                <p className="text-center poppins-normal text-md text-light">
                                  {count.label}
                                </p>
                              </div>
                            );
                          })}
                        </div>

                        <div className="w-full text-center">
                          <button
                            className="btn btn-outline btn-secondary w-full"
                            onClick={() => {
                              handleRestart();
                            }}
                          >
                            Let's go 🚀
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-full gap-5 mt-10">
            <h1 className="text-2xl poppins-medium">
              👋 Hi, I'm Benjie Pecson
            </h1>
            <p className="poppins-normal text-sm">
              I'm a passionate and detail-oriented software engineer with
              professional experience building modern web applications using
              technologies like Laravel, VueJS, React, and NodeJS. I specialize
              in creating scalable front-end and back-end systems, with a strong
              focus on clean architecture and user-centered design.
            </p>
            <p className="poppins-normal text-sm">
              I took my degree in Information Technology, majoring in Web and
              Mobile Technologies, from Pangasinan State University. Since then,
              I've worked with companies where I contributed to the design,
              development, and deployment of internal systems and websites.
            </p>
          </div>
        </div>

        <div className="hidden space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent w-full">
          {experiences.map((experience, index) => {
            return (
              <div className="relative" key={`experience-${index}`}>
                <div className="md:flex items-center md:space-x-4 mb-3">
                  <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <time className="font-caveat font-medium  md:w-28">
                      {experience.date}
                    </time>
                  </div>
                  <h1 className="poppins-medium text-xl ml-14">
                    {experience.role}
                  </h1>
                  <div className="ml-14 italic">{experience.company}</div>
                </div>
                <div className=" text-slate-400 ml-14 md:ml-44 text-justify">
                  {experience.duties.map((duty, index) => {
                    return <li key={`duty-${index}`}>{duty}</li>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
