import React, { useContext } from "react";
import { menData, womenData, saleData } from "../../../shopdata";
import { CartContext } from "../../contexts/cart.context";

function AddToCart({ id, type }) {

  const dataType = {
    men: menData,
    women: womenData,
    sale: saleData
};

  const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = () => {
    const filteredData = dataType[type].find((data) => data.id == id);
    addItemToCart(filteredData);
  };

  return (
    <div>
      <button
        onClick={addToCartHandler}
        className="btn border border-black p-3 rounded-xl hover:bg-black hover:text-white transition-all duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCart;
