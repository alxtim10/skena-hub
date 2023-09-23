import React from "react";
import { featuredData } from "../../../shopdata";

function FeaturedItems() {
  return (
    <>
      <div className="font-outfit mt-32">
        <h1 className="p-10 text-4xl font-bold xl:ml-20">Eternal Elegance</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 m-5">
          <img src={featuredData[0].img} alt="" className="w-auto md:w-[24rem] xl:w-[45rem]" />
          <div className="flex flex-col gap-2">
            <img
              src={featuredData[1].img}
              alt=""
              className="w-auto md:w-[18rem] xl:w-[24rem]"
            />
            <img
              src={featuredData[2].img}
              alt=""
              className="w-auto md:w-[13rem] xl:w-[30rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedItems;
