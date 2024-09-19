import React, { useEffect, useState } from "react";
import bootstrapImg from "../assets/images/bootstrap.png";
import cssImg from "../assets/images/css.png";
import htmlImg from "../assets/images/html.png";
import jsImg from "../assets/images/js.png";
import jqueryImg from "../assets/images/jquery.png";
import phpImg from "../assets/images/php.png";
import laravelImg from "../assets/images/laravel.png";
import mysqlImg from "../assets/images/mysql.png";
import nodejsImg from "../assets/images/nodejs.png";
import vuejsImg from "../assets/images/vue.png";
import vuetifyImg from "../assets/images/vuetify.png";
import kotlinImg from "../assets/images/kotlin.png";
import flutterImg from "../assets/images/flutter.png";
import firebaseImg from "../assets/images/firebase.png";
import githubImg from "../assets/images/github.png";

const AboutSection = ({ theme }) => {
  const cardDetails = {
    icon: <></>,
    title: "",
    subtitle: "",
  };

  const cards = [
    {
      ...cardDetails,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-10 text-primary"
        >
          <path
            fillRule="evenodd"
            d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
            clipRule="evenodd"
          />
          <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
          <path
            fillRule="evenodd"
            d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Full Stack Development",
      subtitle:
        "Experienced in PHP, JavaScript, Laravel, VueJS and React for End-to-End Development",
    },
    {
      ...cardDetails,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-10 text-primary"
        >
          <path
            fillRule="evenodd"
            d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Web Development",
      subtitle:
        "Crafting Engaging Websites with Intuitive Design and Optimal Functionality",
    },
    {
      ...cardDetails,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-10 text-primary"
        >
          <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
          <path
            fillRule="evenodd"
            d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Mobile Development",
      subtitle:
        "Experienced in PHP, JavaScript, Laravel, VueJS and React for End-to-End Development",
    },
  ];

  const skillDetails = {
    icon: "",
    text: "",
    category: "",
  };

  const listOfAllSkills = [
    {
      ...skillDetails,
      icon: htmlImg,
      text: "HTML 5",
      category: "Web Development",
    },
    {
      ...skillDetails,
      icon: cssImg,
      text: "CSS 3",
      category: "Web Development",
    },
    {
      ...skillDetails,
      icon: jsImg,
      text: "JavaScript",
      category: "Web Development",
    },
    {
      ...skillDetails,
      icon: jqueryImg,
      text: "jQuery",
      category: "Web Development",
    },
    {
      ...skillDetails,
      icon: phpImg,
      text: "PHP",
      category: "Web Development",
    },
    {
      ...skillDetails,
      icon: laravelImg,
      text: "Laravel",
      category: "Web Development",
    },
    {
      ...skillDetails,
      icon: mysqlImg,
      text: "MySQL",
      category: "Web Development",
    },
    {
      ...skillDetails,
      icon: nodejsImg,
      text: "Node JS",
      category: "Web Development",
    },
    {
      ...skillDetails,
      icon: vuejsImg,
      text: "Vue JS",
      category: "Web Development",
    },
    {
      ...skillDetails,
      icon: vuetifyImg,
      text: "Vuetify",
      category: "Web Development",
    },
    {
      ...skillDetails,
      icon: kotlinImg,
      text: "Kotlin",
      category: "Mobile Development",
    },
    {
      ...skillDetails,
      icon: flutterImg,
      text: "Flutter",
      category: "Mobile Development",
    },
    {
      ...skillDetails,
      icon: firebaseImg,
      text: "Firebase",
      category: "Mobile Development",
    },
    {
      ...skillDetails,
      icon: githubImg,
      text: "GitHub",
      category: "Others",
    },
  ];

  const [skills, setSkills] = useState(listOfAllSkills);
  const [selectedSkills, setSelectedSkills] = useState("All");

  useEffect(() => {
    let filteredSkills = listOfAllSkills;
    if (selectedSkills == "Web Development") {
      filteredSkills = listOfAllSkills.filter(
        (skill) => skill.category == "Web Development"
      );
    } else if (selectedSkills == "Mobile Development") {
      filteredSkills = listOfAllSkills.filter(
        (skill) => skill.category == "Mobile Development"
      );
    } else if (selectedSkills == "Others") {
      filteredSkills = listOfAllSkills.filter(
        (skill) => skill.category == "Others"
      );
    }
    setSkills(filteredSkills);
  }, [selectedSkills]);

  return (
    <section
      id="about"
      className="flex flex-col items-center w-full bg-black max-w-[1920px]"
    >
      <div className="flex flex-col items-center max-w-5xl px-5 sm:px-10 text-light min-h-screen">
        <h1 className="poppins-semibold text-4xl md:text-3xl">
          <span className="text-primary">#</span> About
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 gap-5 pt-10">
          {cards.map((card, index) => (
            <div
              key={`card-${index}`}
              className="w-full card p-5 gap-3 items-center bg-light text-dark dark:bg-dark dark:text-light flex flex-col justify-between hover:shadow-2xl"
            >
              <div className="py-2 rounded-full">{card.icon}</div>
              <h1 className="text-center poppins-semibold text-lg">
                {card.title}
              </h1>
              <p className="text-center">{card.subtitle}</p>
            </div>
          ))}
        </div>


        <div className="flex flex-col w-full pt-5 ">
          <div className="flex flex-col card p-5 w-full items-center gap-5">
            <h1 className="poppins-semibold text-[24px]">
              <span className="text-primary">My</span> Tech Stack
            </h1>
            
            <div className="flex flex-row w-full text-center gap-5 justify-center items-end font-semibold">
              <span
                className={`pb-1 px-2 cursor-pointer ${
                  selectedSkills == "All" && "border-b-2"
                }`}
                onClick={() => setSelectedSkills("All")}
              >
                All
              </span>
              <span
                className={`pb-1 px-2 cursor-pointer ${
                  selectedSkills == "Web Development" && "border-b-2"
                }`}
                onClick={() => setSelectedSkills("Web Development")}
              >
                Web
              </span>
              <span
                className={`pb-1 px-2 cursor-pointer ${
                  selectedSkills == "Mobile Development" && "border-b-2"
                }`}
                onClick={() => setSelectedSkills("Mobile Development")}
              >
                Mobile
              </span>
              <span
                className={`pb-1 px-2 cursor-pointer ${
                  selectedSkills == "Others" && "border-b-2"
                }`}
                onClick={() => setSelectedSkills("Others")}
              >
                Others
              </span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 w-full gap-5 justify-center">
              {skills.map((skill, index) => {
                return (
                  <div
                    key={`skill-${index}`}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="flex flex-col items-center justify-center w-full h-full">
                      <img
                        className="w-8 aspect-auto"
                        src={skill.icon}
                        alt={skill.text}
                      />
                    </div>
                    <span className="text-center">{skill.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </section>
  );
};

export default AboutSection;
