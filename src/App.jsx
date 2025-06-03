import { useEffect, useRef, useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
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
      return "border-b-2 border-black dark:border-white cursor-pointer poppins-semibold";
    }
    return "cursor-pointer poppins-regular hover:cursor-pointer";
  };

  const navStyleMobile = (nav) => {
    if (active == nav) {
      return "border-b-2 border-black dark:border-white cursor-pointer poppins-semibold";
    }
    return "cursor-pointer poppins-regular hover:cursor-pointer";
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
    document.getElementById("my-drawer-3").checked = false;
  };

  const LogoBtn = (
    <a className="btn btn-ghost">
      <div className="text-[24px] poppins-bold">
        <span className="tracking-widest">Bnj</span>
        <span className="text-primary tracking-widest">pcson</span>
      </div>
    </a>
  );

  return (
    <>
      <div className={theme}>
        <div
          className={`bg-light text-dark dark:bg-dark dark:text-light min-h-screen min-w-min`}
        >
          <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <div className="navbar fixed bg-light dark:bg-dark  shadow-md z-10">
                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-6 w-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
                <div className="flex flex-row w-full">
                  {LogoBtn}
                  <div className="flex flex-row w-full">
                    <div className="hidden flex-none lg:block w-full lg:ml-12">
                      <ul className="menu menu-horizontal  gap-5 flex flex-row">
                        {/* Navbar menu content here */}
                        <li className={navStyle("home")}>
                          <a
                            href="#home"
                            onClick={(e) => {
                              e.preventDefault();
                              scrollTo(homeSection.current.offsetTop);
                            }}
                          >
                            Home
                          </a>
                        </li>
                        <li className={navStyle("about")}>
                          <a
                            href="#about"
                            onClick={(e) => {
                              e.preventDefault();
                              scrollTo(aboutSection.current.offsetTop);
                            }}
                          >
                            About
                          </a>
                        </li>
                        <li className={navStyle("projects")}>
                          <a
                            href="#projects"
                            onClick={(e) => {
                              e.preventDefault();
                              scrollTo(projectSection.current.offsetTop);
                            }}
                          >
                            Projects
                          </a>
                        </li>
                        <li className={navStyle("certificates")}>
                          <a
                            href="#certificates"
                            onClick={(e) => {
                              e.preventDefault();
                              scrollTo(certificateSection.current.offsetTop);
                            }}
                          >
                            Certificates
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
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
              {/* Page content here */}
              <div className="text-[18px] md:text-[16px]">
                <HomePage
                  theme={theme}
                  setTheme={setTheme}
                  active={active}
                  setActive={setActive}
                  scrollTo={scrollTo}
                  homeSection={homeSection}
                  aboutSection={aboutSection}
                  projectSection={projectSection}
                  certificateSection={certificateSection}
                  LogoBtn={LogoBtn}
                />
              </div>
            </div>
            <div className="drawer-side z-20">
              <label
                htmlFor="my-drawer-3"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul
                className={`menu bg-light text-dark dark:bg-dark dark:text-light min-h-full w-80 p-0`}
              >
                {/* Sidebar content here */}
                <div className="p-0 h-16 shadow-md flex flex-col justify-center items-start">
                  {LogoBtn}
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <li className={navStyleMobile("home")}>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(homeSection.current.offsetTop);
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li className={navStyleMobile("about")}>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(aboutSection.current.offsetTop);
                      }}
                    >
                      About
                    </a>
                  </li>
                  <li className={navStyleMobile("projects")}>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(projectSection.current.offsetTop);
                      }}
                    >
                      Projects
                    </a>
                  </li>
                  <li className={navStyleMobile("certificates")}>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(certificateSection.current.offsetTop);
                      }}
                    >
                      Certificates
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
