import React from "react";
import profile from "../assets/images/image1.jpg";
import UnderConstructionComponent from "../components/UnderConstructionComponent";
import ShinyText from "../reactbits/ShinyText";

const ProjectSection = ({ theme }) => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center w-full max-w-[1920px]"
    >
      <div className="flex flex-col px-5 py-10  min-h-screen  max-w-5xl items-center">
        <h1 className="poppins-semibold text-5xl md:text-4xl text-center flex items-center gap-3">
          <span
            className={`${theme == "dark" ? "text-light" : "text-primary"}`}
          >
            #
          </span>
          <ShinyText
            text={"Projects"}
            speed={5}
            className={`${theme == "dark" ? "bg-primary" : "bg-dark"} py-2`}
          />
        </h1>
        <div className="divider"></div>
        <UnderConstructionComponent />
        <div className="divider"></div>
      </div>
    </section>
  );
};

export default ProjectSection;
