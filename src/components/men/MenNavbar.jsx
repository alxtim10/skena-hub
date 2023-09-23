import React from "react";

function MenNavbar({ scrollToSection, shirts, trousers, shoes }) {
  return (
    <div className="mt-20 pl-5">
      <div className="flex justify-start items-center gap-5">
        <h1 className="text-3xl md:text-5xl font-outfit text-blue-700 font-bold">
          Men
        </h1>
        <div className="flex justify-center items-center gap-5 pt-2 md:pt-5 font-outfit text-lg md:text-xl">
          <p
            onClick={() => scrollToSection(shirts)}
            className="hover:underline cursor-pointer"
          >
            Shirts
          </p>
          <p
            onClick={() => scrollToSection(trousers)}
            className="hover:underline cursor-pointer"
          >
            Trousers
          </p>
          <p
            onClick={() => scrollToSection(shoes)}
            className="hover:underline cursor-pointer"
          >
            Shoes
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenNavbar;
