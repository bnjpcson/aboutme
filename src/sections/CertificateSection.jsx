import React from "react";
import profile from "../assets/images/image1.jpg";
import UnderConstructionComponent from "../components/UnderConstructionComponent";
import ShinyText from "../reactbits/ShinyText";

const CertificateSection = ({ theme }) => {
  return (
    <section
      id="certificates"
      className="flex flex-col items-center w-full bg-black max-w-[1920px]"
    >
      <div className="flex flex-col px-5 py-10 text-light min-h-screen max-w-5xl items-center">
        <h1 className="poppins-semibold text-5xl md:text-4xl text-center flex items-center gap-3">
          <span className={`text-white`}>#</span>
          <ShinyText
            text={"Certificates"}
            speed={5}
            className={`bg-primary py-2`}
          />
        </h1>
        <div className="divider"></div>
        <UnderConstructionComponent />
        <div className="divider"></div>
      </div>
    </section>
  );
};

export default CertificateSection;
