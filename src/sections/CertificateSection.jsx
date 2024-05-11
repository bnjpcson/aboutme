import React from "react";
import profile from "../assets/images/image1.jpg";

const CertificateSection = ({ theme }) => {
  return (
    <section
      id="certificates"
      className="flex flex-col items-center w-full bg-black max-w-[1920px]"
    >
      <div className="flex flex-col md:px-50 lg:px-60 md:px-20 sm:px-10 px-5 items-center text-light min-h-screen  max-w-5xl">
        <h1 className="poppins-semibold text-4xl md:text-3xl">
          <span className="text-primary">#</span> Certificates
        </h1>
        <div className="divider"></div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ex
          laudantium illo, voluptas exercitationem tenetur expedita non
          laboriosam aspernatur doloribus vitae necessitatibus fugiat numquam
          rem officia voluptatum? Maiores, vero tenetur!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
          possimus facilis officiis fuga delectus sequi dignissimos perferendis
          doloribus esse amet, qui aliquam voluptates labore iure quo inventore
          aliquid magni odio!
        </p>
        <div className="divider"></div>
      </div>
    </section>
  );
};

export default CertificateSection;
