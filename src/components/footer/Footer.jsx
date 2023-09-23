import React from "react";

function Footer() {
  return (
    <>
      <div className="font-outfit mt-14">
        <div className="flex justify-center items-center">
          <div className="h-[4px] bg-[#bab9b9] w-80 rounded-xl"> </div>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="p-3 w-full text-lg font-bold">SKENA HUB</h1>
          <h1 className="p-3 w-1/2 text-lg font-bold text-right">2023 &copy;</h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
