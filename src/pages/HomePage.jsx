import React, { useEffect, useRef, useState } from "react";
import UnderConstructionComponent from "../components/UnderConstructionComponent";
import HomeSection from "../sections/HomeSection";
import AboutSection from "../sections/AboutSection";
import ProjectSection from "../sections/ProjectSection";
import CertificateSection from "../sections/CertificateSection";
import FooterPage from "./FooterPage";

const HomePage = ({
  theme,
  setTheme,
  active,
  setActive,
  scrollTo,
  homeSection,
  aboutSection,
  projectSection,
  certificateSection,
  LogoBtn,
}) => {
  return (
    <>
      <div className={theme}>
        <div
          className={`bg-light text-dark dark:bg-dark dark:text-light min-h-screen min-w-min mt-5`}
        >
          <div ref={homeSection} className="flex justify-center">
            <HomeSection
              theme={theme}
              scrollTo={scrollTo}
              homeSection={projectSection}
            />
          </div>

          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="bg-black w-full max-w-[1920px]"
            >
              <path
                fill={theme == "dark" ? "#44546a" : "#EFF2F4"}
                // fillOpacity="1"
                d="M0,96L21.8,106.7C43.6,117,87,139,131,149.3C174.5,160,218,160,262,144C305.5,128,349,96,393,96C436.4,96,480,128,524,128C567.3,128,611,96,655,85.3C698.2,75,742,85,785,101.3C829.1,117,873,139,916,154.7C960,171,1004,181,1047,181.3C1090.9,181,1135,171,1178,186.7C1221.8,203,1265,245,1309,234.7C1352.7,224,1396,160,1418,128L1440,96L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
              ></path>
            </svg>
          </div>

          <div ref={aboutSection} className="flex justify-center">
            <AboutSection theme={theme} />
          </div>

          <div ref={projectSection} className="flex justify-center">
            <ProjectSection theme={theme} />
          </div>

          <div ref={certificateSection} className="flex justify-center">
            <CertificateSection theme={theme} />
          </div>

          <FooterPage theme={theme} LogoBtn={LogoBtn} />
        </div>
      </div>

      <dialog id="my_modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <UnderConstructionComponent />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default HomePage;
