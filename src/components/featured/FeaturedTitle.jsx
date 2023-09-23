import React from "react";

function FeaturedTitle() {
  return (
    <>
      <div className="flex font-outfit p-5 xl:ml-10">
        <h1 className="text-3xl font-bold md:ml-10 xl:w-full">New & Featured</h1>
        <div className="mt-24 md:ml-32 xl:flex xl:flex-col xl:justify-center xl:w-[50rem]">
          <p>Summer Collection</p>
          <p className="font-bold">2023</p>
          <p className="xl:w-96">
            <b>Eternal Elegance</b> is not just a collection; it&apos;s an
            invitation to embrace the enduring beauty of fashion. Each piece in
            this collection is carefully crafted to withstand the test of time,
            ensuring that you not only look fabulous today but continue to do so
            for years to come.
          </p>
        </div>
      </div>
    </>
  );
}

export default FeaturedTitle;
