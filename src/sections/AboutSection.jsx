import React from "react";

class Experience {
  constructor(date, role, company, duties) {
    this.date = date;
    this.role = role;
    this.company = company;
    this.duties = duties;
  }

  getObject() {
    return {
      date: this.date,
      role: this.role,
      company: this.company,
      duties: this.duties,
    };
  }
}

const AboutSection = ({ theme }) => {

  const fullSuiteExperience = new Experience("", "", "", []);
  const addessaExperience = new Experience("", "", "", []);
  const internExperience = new Experience("", "", "", []);

  const experiences = [
    internExperience.getObject(),
    addessaExperience.getObject(),
    fullSuiteExperience.getObject(),
  ];

  console.log(experiences);

  return (
    <section
      id="about"
      className="flex flex-col items-center w-full bg-black max-w-[1920px]"
    >
      <div className="flex flex-col md:px-50 lg:px-60 md:px-20 sm:px-10 px-5 items-center text-light min-h-screen  max-w-5xl">
        <h1 className="poppins-semibold text-4xl md:text-3xl">
          <span className="text-primary">#</span> About
        </h1>
        <div className="divider"></div>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent w-full">
          <div className="relative">
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
                  March 2024 - Present
                </time>
              </div>
              <h1 className="poppins-medium text-xl ml-14">
                Software Engineer
              </h1>
              <div className="ml-14 italic">FullSuite</div>
            </div>
            <div className=" text-slate-400 ml-14 md:ml-44 text-justify">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt nihil ratione ex saepe laboriosam tempore itaque,
                laudantium neque, quidem dignissimos qui minima reiciendis natus
                obcaecati magni aperiam doloribus aliquid commodi!
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam quos quam dicta quis quaerat a dolores cupiditate
                officiis, accusantium sequi? Ratione, quod nihil? Rem,
                reiciendis at obcaecati eligendi nesciunt qui?
              </li>
            </div>
          </div>
          <div className="relative">
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
                  August 2023 - February 2024
                </time>
              </div>
              <h1 className="poppins-bold text-xl ml-14">Web Developer</h1>
              <div className="ml-14 italic">Addessa Corporation</div>
            </div>
            <div className=" text-slate-400 ml-14 md:ml-44">
              <li>
                Enhanced company's websites by implementing additional
                functionalities using Laravel and jQuery.
              </li>
              <li>
                Revamped company's websites using Laravel for backend
                development and Vue.js for frontend design.
              </li>
              <li>
                Ensure and maintained the continuous functionalities of all
                assigned company websites.
              </li>
              <li>
                Backed up files and conducted regular monitoring of website
                statistics and status on a web hosting platform.
              </li>
              <li>
                Provides technical assistance and support to colleagues for
                resolving company-related technical issues and problems.
              </li>
            </div>
          </div>
          <div className="relative">
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
                  March 2023 - June 2023
                </time>
              </div>
              <h1 className="poppins-bold text-xl ml-14">Intern</h1>
              <div className="ml-14 italic">Global Agility Solutions</div>
            </div>
            <div className=" text-slate-400 ml-14 md:ml-44">
              <li>
                Designed and developed a company's Web-based ID System using
                Laravel PHP Framework
              </li>
              <li>
                Designed and developed a company's ID System using C# Windows
                Form
              </li>
              <li>
                Provides troubleshooting and maintenance support for PCs and
                laptops, diagnosing and resolving hardware and software issues
                to ensure optimal functionality.
              </li>
            </div>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    </section>
  );
};

export default AboutSection;
