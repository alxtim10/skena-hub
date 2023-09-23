import React, { useState } from "react";
import Navbar from "../header/Navbar";
import { heroData } from "../../../shopdata.js";

function Hero({scrollToSection, featured}) {
  const [photo, setPhoto] = useState(heroData[0].img);
  const [isShow, setIsShow] = useState(false);

  const showPhoto = (id, isHover) => {
    if (isHover) {
      setIsShow(true);
      setPhoto(heroData[id - 1].img);
    } else {
      setIsShow(false);
    }
  };



  return (
    <section>
      <div className="flex md:justify-around mt-24 px-14 md:p-20">
        <div className="flex flex-col">
          <h1 className="text-4xl font-outfit text-blue-700 font-bold">
            Skena Hub
          </h1>
          <Navbar showPhoto={showPhoto} scrollToSection={scrollToSection} featured={featured} />
        </div>
        <div className="hidden md:block">
          <img
            src={photo}
            alt=""
            className={`w-[400px] max-h-[600px] xl:w-[800px] ${
              isShow ? "opacity-1" : "opacity-0"
            } object-cover transition-all duration-500`}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
