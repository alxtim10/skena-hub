import React from "react";
import AddToCart from "../button/AddToCart";

function SaleCard({ item }) {

  const type = "sale";

  return (
    <div className="flex flex-col justify-center items-center w-full md:basis-1/2 xl:basis-2/6">
      <img src={item.img} alt="" className="w-64 mt-10" />
      <div className="mt-10 font-outfit">
        <p className="text-lg font-bold">{item.name}</p>
        <p className="text-md">
          {item.description}
        </p>
        <span className="text-sm">Rp. {item.discountPrice}</span>
        <span className="text-sm ml-5 line-through opacity-60">Rp. {item.originalPrice}</span>
        <div className="flex flex-col justify-between">
          <p className="mt-2 mb-2 text-green-700 font-bold">{item.discount}% off</p>
          <AddToCart type={type} id={item.id}/>
        </div>
      </div>
    </div>
  );
}

export default SaleCard;
