import React from "react";

function WomenNavbar({ scrollToSection, dress, skirts }) {
  return (
    <div className="mt-20 pl-5">
      <div className="flex justify-start items-center gap-5">
        <h1 className="text-3xl md:text-5xl font-outfit text-blue-700 font-bold">Women</h1>
        <div className="flex justify-center items-center gap-5 pt-2 md:pt-5 font-outfit text-lg md:text-xl">
          <p
            onClick={() => scrollToSection(dress)}
            className="hover:underline cursor-pointer"
          >
            Dress
          </p>
          <p
            onClick={() => scrollToSection(skirts)}
            className="hover:underline cursor-pointer"
          >
            Skirts
          </p>
        </div>
      </div>
    </div>
  );
}

export default WomenNavbar;
