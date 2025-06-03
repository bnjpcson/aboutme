import React from "react";
import profile from "../assets/images/image1.jpg";
import UnderConstructionComponent from "../components/UnderConstructionComponent";

const ProjectSection = ({ theme }) => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center w-full max-w-[1920px]"
    >
      <div className="flex flex-col px-5 py-10  min-h-screen  max-w-5xl">
        <h1 className="poppins-semibold text-4xl md:text-3xl text-center">
          <span className="text-primary">#</span> Projects
        </h1>
        <div className="divider"></div>
        <UnderConstructionComponent />
        <div className="divider"></div>
      </div>
    </section>
  );
};

export default ProjectSection;
