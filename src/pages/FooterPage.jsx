import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  facebookIcon,
  githubIcon,
  instagramIcon,
  linkedinIcon,
} from "../components/GetIcons";

const FooterPage = ({ theme, LogoBtn }) => {
  const [quote, setQuote] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  //   const fetchQuotes = async () => {
  //     try {
  //       setIsLoading(true);
  //       const api_url = "http://localhost:3000/quotes-of-the-day";
  //       const response = await fetch(api_url);
  //       var data = await response.json();
  //       console.log(data);
  //       setQuote(data);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  useEffect(() => {
    // fetchQuotes();
  }, []);
  return (
    <footer
      id="footer"
      className="bg-light text-dark  dark:bg-dark dark:text-light w-full text-center flex flex-col justify-center items-center py-16 px-5 sm:px-10"
    >
      <div className="flex flex-col lg:flex-row gap-3 w-full justify-between items-center">
        <div className="flex flex-col gap-3 max-w-lg items-center justify-center">
          {LogoBtn}
          <div
            dangerouslySetInnerHTML={{
              __html: new DOMParser().parseFromString(
                "\u003Cblockquote\u003E&ldquo;Any fool can write code that a computer can understand. Good programmers write code that humans can understand.&rdquo; &mdash; \u003Cfooter\u003EMartin Fowler\u003C/footer\u003E\u003C/blockquote\u003E",
                "text/html"
              ).body.innerHTML,
            }}
          />
        </div>
        <div className="flex flex-col justify-around gap-10 lg:mr-10">
          <div className="flex flex-row w-full justify-between mt-5">
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
          <span className="text-center">
            ​© {new Date().getFullYear()} <strong>Benjie Pecson</strong>. All
            Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
