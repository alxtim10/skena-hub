import React, { useRef } from "react";
import WomenNavbar from "../../components/women/WomenNavbar";
import AddToCart from "../../components/button/AddToCart";
import { womenData } from "../../../shopdata";

function Women() {
  const dress = useRef(null);
  const skirts = useRef(null);
  const type = "women";

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <WomenNavbar
        scrollToSection={scrollToSection}
        dress={dress}
        skirts={skirts}
      />
      <div className="flex justify-start mt-10 p-5">
        <img
          src={womenData[0].img}
          alt=""
          className="w-44 md:w-[32rem] xl:w-[50rem]"
        />
      </div>
      {/*#region Mobile */}
      <div className="md:hidden">
        <section ref={dress} className="md:hidden mt-40 p-5 font-outfit">
          <h1 className="text-4xl font-bold">Dress</h1>
          <div className="flex flex-col">
            <img src={womenData[1].img} alt="" className="w-auto mt-10" />
            <div className="w-full flex flex-col justify-center mt-5">
              <p className="font-bold">Wedding Dress</p>
              <p className="w-full">
                This exquisite gown is a masterpiece of craftsmanship, designed
                to make your special day truly unforgettable.
              </p>
              <div className="mt-5">
                <AddToCart type={type} id={"w2"}/>
              </div>
            </div>
            <div className="flex flex-col">
              <img src={womenData[2].img} alt="" className="w-auto mt-10" />
              <div className="w-full flex flex-col justify-center mt-5">
                <p className="font-bold text-right">Casual Dress</p>
                <p className="text-right w-full">
                  This versatile piece effortlessly combines style and comfort,
                  making it the perfect choice for a variety of casual occasions
                  and leisurely moments.
                </p>
                <div className="flex justify-end mt-5">
                  <AddToCart type={type} id={"w3"}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section ref={dress} className="md:hidden mt-40 p-5 font-outfit">
          <h1 className="text-4xl font-bold text-center">Skirts</h1>
          <div className="flex flex-col">
            <img src={womenData[3].img} alt="" className="w-auto mt-10" />
            <img src={womenData[4].img} alt="" className="w-auto mt-2" />
            <div className="w-full flex flex-col justify-center mt-5">
              <p className="font-bold text-center">Casual Skirts</p>
              <p className="w-full text-center">
                A wardrobe essential designed to seamlessly transition from day
                to night, casual to formal. This skirt embodies sophistication,
                style, and comfort in one flawless package.
              </p>
              <div className="flex justify-center mt-5">
                <AddToCart type={type} id={"w4"}/>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*#endregion */}
      {/*#region Medium Screen */}
      <div className="hidden md:block xl:hidden">
        <section
          ref={dress}
          className="hidden mt-48 pl-20 font-outfit min-h-screen md:block"
        >
          <h1 className="text-4xl font-bold">Dress</h1>
          <div className="flex flex-col mt-10 mr-5">
            <div className="flex justify-center">
              <img
                src={womenData[1].img}
                alt=""
                className="w-[22rem] h-[12rem] "
              />
              <div className="ml-5 flex flex-col">
                <p className="font-bold">Wedding Dress</p>
                <p className="w-[300px]">
                  This exquisite gown is a masterpiece of craftsmanship,
                  designed to make your special day truly unforgettable.
                </p>
                <div className="mt-5">
                  <AddToCart type={type} id={"w2"}/>
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse justify-center mr-10">
              <img src={womenData[2].img} alt="" className="h-[450px] mt-10" />
              <div className="flex flex-col justify-center mr-10">
                <p className="font-bold text-right">Casual Dress</p>
                <p className="text-right w-[200px]">
                  This versatile piece effortlessly combines style and comfort,
                  making it the perfect choice for a variety of casual occasions
                  and leisurely moments.
                </p>
                <div className="flex justify-end mt-5">
                  <AddToCart type={type} id={"w3"}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*#endregion */}
      {/* #region xlarge screen */}
      <div className="hidden md:hidden xl:block">
        <section
          ref={dress}
          className="hidden mt-48 pl-20 font-outfit min-h-screen md:block"
        >
          <h1 className="text-4xl font-bold">Dress</h1>
          <div className="flex flex-col mt-10 mr-5">
            <div className="flex justify-center">
              <img src={womenData[1].img} alt="" className="w-auto h-[30rem]" />
              <div className="ml-5 flex flex-col">
                <p className="font-bold">Wedding Dress</p>
                <p className="w-[300px]">
                  This exquisite gown is a masterpiece of craftsmanship,
                  designed to make your special day truly unforgettable.
                </p>
                <div className="mt-5">
                  <AddToCart type={type} id={"w2"}/>
                </div>
                <div className="flex justify-center mx-10 ">
                  <img
                    src={womenData[2].img}
                    alt=""
                    className="h-[350px] mt-10"
                  />
                  <div className="ml-10 mt-10">
                    <p className="font-bold">Casual Dress</p>
                    <p className="w-[200px]">
                      This versatile piece effortlessly combines style and
                      comfort, making it the perfect choice for a variety of
                      casual occasions and leisurely moments.
                    </p>
                    <div className="flex justify-start mt-5">
                      <AddToCart type={type} id={"w3"}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*#endregion */}
      <div className="hidden md:block">
        <section ref={skirts} className="mt-20 font-outfit p-10">
          <div className="flex justify-center gap-10 items-center">
            <h1 className="text-4xl font-bold text-center">Skirts</h1>
            <img
              src={womenData[3].img}
              alt=""
              className="w-[20rem] xl:w-[40rem]"
            />
            <img
              src={womenData[4].img}
              alt=""
              className="w-[15rem] xl:w-[25rem]"
            />
          </div>
          <div className="flex justify-center items-center mt-5">
            <div className="flex flex-col justify-start gap-2 mt-5">
              <p className="font-bold text-center">Casual Skirts</p>
              <div className="flex justify-center">
                <p className="w-[400px] text-center">
                  A wardrobe essential designed to seamlessly transition from
                  day to night, casual to formal. This skirt embodies
                  sophistication, style, and comfort in one flawless package.
                </p>
              </div>
              <div className="flex justify-center mt-5">
                <AddToCart type={type} id={"w4"}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Women;
