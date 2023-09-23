import React from "react";
import SaleCard from "../../components/sale/SaleCard";
import {saleData} from "../../../shopdata.js";

function Sale() {
  return (
    <div className="mt-10 mb-20">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-outfit text-blue-700 font-bold">Sale</h1>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap  justify-cemter mt-5">
        {saleData.map((data) => {
          return <SaleCard key={data.id} item={data} />;
        })}
      </div>
    </div>
  );
}

export default Sale;
