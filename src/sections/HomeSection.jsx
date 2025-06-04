import React from "react";
import profile from "../assets/images/image1.webp";
import {
  facebookIcon,
  githubIcon,
  instagramIcon,
  linkedinIcon,
} from "../components/GetIcons";
import RotatingText from "../reactbits/RotatingText";
import ShinyText from "../reactbits/ShinyText";

const HomeSection = ({ theme, scrollTo, homeSection }) => {
  return (
    <section id="home" className="flex flex-col items-center max-w-[1920px]">
      <div className="flex flex-col justify-center items-center pt-32 max-w-5xl px-5 sm:px-10">
        <div className="flex flex-row justify-center items-start">
          <div className="flex flex-col w-full gap-3">
            <img
              className="aspect-auto w-20 rounded-full sm:hidden"
              src={profile}
              alt=""
            />
            <div className="flex">
              <RotatingText
                texts={["Web", "Mobile", "Software"]}
                mainClassName={`px-2 sm:px-2 md:px-3 bg-primary text-white poppins-bold text-[48px] overflow-hidden sm:py-1 md:py-2 justify-center rounded-lg`}
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
            <h1 className="poppins-bold text-[48px]">Developer</h1>
            <p className="poppins-regular text-[16px]">
              Hi! I'm Benjie, specialized in web and mobile technologies.
            </p>
            <div className="flex flex-row gap-5 py-5">
              <div>
                <button
                  className="btn btn-outline btn-info dark:btn-secondary w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(homeSection.current.offsetTop);
                  }}
                >
                  View my projects
                </button>
              </div>
              <div>
                <a
                  href="/aboutme/Resume_BP.pdf"
                  target="_blank"
                  className="btn btn-outline btn-primary w-full"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="flex flex-row w-full justify-between pr-5">
              <a href="https://www.linkedin.com/in/bnjpcson/" target="_blank">
                {linkedinIcon(theme)}
              </a>
              <a href="https://github.com/bnjpcson" target="_blank">
                {githubIcon(theme)}
              </a>
              <a href="https://www.facebook.com/bnjpcson" target="_blank">
                {facebookIcon(theme)}
              </a>
              <a href="https://www.instagram.com/bnjpcson/" target="_blank">
                {instagramIcon(theme)}
              </a>
            </div>
          </div>
          <div className="sm:flex flex-col justify-center items-center w-full hidden">
            <img
              className="w-full sm:w-[75%] rounded-full"
              src={profile}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
