import React, { useEffect, useRef, useState } from "react";
import UnderConstructionComponent from "../components/UnderConstructionComponent";
import HomeSection from "../sections/HomeSection";
import AboutSection from "../sections/AboutSection";
import ProjectSection from "../sections/ProjectSection";
import CertificateSection from "../sections/CertificateSection";

const HomePage = () => {
  const getTheme = () => {
    return localStorage.getItem("theme") == null
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : ""
      : localStorage.getItem("theme");
  };
  const [theme, setTheme] = useState(getTheme());
  const [active, setActive] = useState("home");
  const homeSection = useRef(null);
  const aboutSection = useRef(null);
  const projectSection = useRef(null);
  const certificateSection = useRef(null);

  const sunIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
    </svg>
  );

  const moonIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const navStyle = (nav) => {
    if (active == nav) {
      return "border-b-2 border-black dark:border-white p-2 cursor-pointer poppins-semibold";
    }
    return "p-2 cursor-pointer poppins-regular";
  };

  const changeTheme = () => {
    if (theme == "") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "");
      setTheme("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const home =
        homeSection.current.getBoundingClientRect().top + window.scrollY - 150;

      const about =
        aboutSection.current.getBoundingClientRect().top + window.scrollY - 150;

      const projects =
        projectSection.current.getBoundingClientRect().top +
        window.scrollY -
        150;

      const certificates =
        certificateSection.current.getBoundingClientRect().top +
        window.scrollY -
        150;

      if (scrollY >= home && scrollY < about) {
        setActive("home");
      } else if (scrollY >= about && scrollY < projects) {
        setActive("about");
      } else if (scrollY >= projects && scrollY < certificates) {
        setActive("projects");
      } else if (scrollY > certificates) {
        setActive("certificates");
      }
    });
  }, []);

  const scrollTo = (offsetTop) => {
    window.scrollTo({
      top: offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={theme}>
        <div
          className={`bg-light text-dark dark:bg-dark dark:text-light min-h-screen min-w-min`}
        >
          <div className="flex justify-center">
            <div className="navbar fixed bg-light dark:bg-dark max-w-[1920px] z-10">
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Parent</a>
                      <ul className="p-2">
                        <li>
                          <a>Submenu 1</a>
                        </li>
                        <li>
                          <a>Submenu 2</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Item 3</a>
                    </li>
                  </ul>
                </div>
                <a className="btn btn-ghost">
                  <div className="text-[24px] poppins-bold">
                    <span className="tracking-widest">Bnj</span>
                    <span className="text-primary tracking-widest">pcson</span>
                  </div>
                </a>
              </div>
              <ul className="flex-row gap-5 lg:flex hidden">
                <li
                  className={navStyle("home")}
                  onClick={() => {
                    scrollTo(homeSection.current.offsetTop);
                  }}
                >
                  Home
                </li>
                <li
                  className={navStyle("about")}
                  onClick={() => {
                    scrollTo(aboutSection.current.offsetTop);
                  }}
                >
                  About
                </li>
                <li
                  className={navStyle("projects")}
                  onClick={() => {
                    scrollTo(projectSection.current.offsetTop);
                  }}
                >
                  Projects
                </li>
                <li
                  className={navStyle("certificates")}
                  onClick={() => {
                    scrollTo(certificateSection.current.offsetTop);
                  }}
                >
                  Certificates
                </li>
              </ul>
              <div className="navbar-end">
                <button
                  className="btn btn-ghost"
                  onClick={() => {
                    changeTheme();
                  }}
                >
                  {theme == "dark" ? sunIcon : moonIcon}
                </button>
              </div>
            </div>
          </div>

          <div ref={homeSection} className="flex justify-center">
            <HomeSection theme={theme} />
          </div>

          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="bg-black w-full max-w-[1920px]"
            >
              <path
                fill={theme == "dark" ? "#44546a" : "#EFF2F4"}
                fillOpacity="1"
                d="M0,96L21.8,106.7C43.6,117,87,139,131,149.3C174.5,160,218,160,262,144C305.5,128,349,96,393,96C436.4,96,480,128,524,128C567.3,128,611,96,655,85.3C698.2,75,742,85,785,101.3C829.1,117,873,139,916,154.7C960,171,1004,181,1047,181.3C1090.9,181,1135,171,1178,186.7C1221.8,203,1265,245,1309,234.7C1352.7,224,1396,160,1418,128L1440,96L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
              ></path>
            </svg>
          </div>

          <div ref={aboutSection} className="flex justify-center">
            <AboutSection theme={theme} />
          </div>

          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="bg-black w-full max-w-[1920px]"
            >
              <path
                fill={theme == "dark" ? "#44546a" : "#EFF2F4"}
                fillOpacity="1"
                d="M0,288L21.8,288C43.6,288,87,288,131,250.7C174.5,213,218,139,262,90.7C305.5,43,349,21,393,53.3C436.4,85,480,171,524,197.3C567.3,224,611,192,655,170.7C698.2,149,742,139,785,128C829.1,117,873,107,916,117.3C960,128,1004,160,1047,170.7C1090.9,181,1135,171,1178,165.3C1221.8,160,1265,160,1309,160C1352.7,160,1396,160,1418,160L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
              ></path>
            </svg>
          </div>

          <div ref={projectSection} className="flex justify-center">
            <ProjectSection theme={theme} />
          </div>

          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="bg-light dark:bg-dark w-full max-w-[1920px]"
            >
              <path
                fill={theme == "dark" ? "#1F384C" : "#1F384C"}
                fillOpacity="1"
                d="M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,234.7C672,256,768,256,864,245.3C960,235,1056,213,1152,202.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div ref={certificateSection} className="flex justify-center">
            <CertificateSection theme={theme} />
          </div>
          <footer
            id="footer"
            className="bg-light text-dark  dark:bg-dark dark:text-light w-full text-center p-2"
          >
            <span className="text-center">
              ​© {new Date().getFullYear()} <strong>Benjie Pecson</strong>. All
              Rights Reserved
            </span>
          </footer>
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
