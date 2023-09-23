import React from "react";
import MenNavbar from "../../components/men/MenNavbar";
import AddToCart from "../../components/button/AddToCart";
import { useRef } from "react";
import { menData } from "../../../shopdata";

function Men() {
  const shirts = useRef(null);
  const trousers = useRef(null);
  const shoes = useRef(null);
  const type = "men";

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <MenNavbar
        scrollToSection={scrollToSection}
        shirts={shirts}
        trousers={trousers}
        shoes={shoes}
      />
      <div className="flex justify-end mt-10 p-5 xl:pr-20">
        <img
          src={menData[0].img}
          alt=""
          className="w-44 md:w-[30rem] xl:w-[45rem]"
        />
      </div>
      <section ref={shirts} className="mt-40 p-5 lg:p-20 font-outfit">
        <h1 className="text-4xl font-bold">Shirts</h1>
        <div className="flex flex-col">
          <img
            src={menData[1].img}
            alt=""
            className="w-auto mt-10 lg:w-[45rem]"
          />
          <div className="w-full flex flex-col justify-center mt-5">
            <p className="font-bold">{menData[1].name}</p>
            <p className="lg:w-80">{menData[1].description}</p>
            <div className="mt-5">
              <AddToCart type={type} id={"m2"}/>
            </div>
          </div>
        </div>
      </section>
      <section ref={trousers} className="mt-12 pt-20 lg:pt-14 p-5 font-outfit">
        <h1 className="text-4xl font-bold text-center">Trousers</h1>
        <div className="flex flex-col justify-center items-center">
          <img
            src={menData[2].img}
            alt=""
            className="w-auto mt-10 lg:w-[45rem]"
          />
          <div className="flex flex-col justify-center items-center gap-2 mt-5">
            <p className="font-bold">{menData[2].name}</p>
            <div className="w-full text-center">
              <p className="lg:w-96">{menData[2].description}</p>
            </div>
            <div className="mt-2">
              <AddToCart type={type} id={"m3"}/>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={shoes}
        className="mt-12 pt-20 lg:pt-1 p-5 font-outfit min-h-screen xl:pr-20"
      >
        <h1 className="text-4xl font-bold text-right">Shoes</h1>
        <div className="lg:flex lg:justify-end">
          <img
            src={menData[3].img}
            alt=""
            className="w-[1000px] mt-10 lg:w-[48rem]"
          />
        </div>
        <div className="flex flex-col justify-between lg:pl-16">
          <div className="flex gap-5 mt-10">
            <p className="font-bold">{menData[3].name}</p>
            <div className="w-full flex flex-col">
              <p className="xl:w-[50rem]">{menData[3].description}</p>
              <div className="flex justify-end mt-5 xl:justify-start">
                <AddToCart type={type} id={"m4"}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Men;
