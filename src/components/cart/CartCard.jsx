import React, { useContext } from "react";
import { Minus, Plus } from "react-feather";
import { CartContext } from "../../contexts/cart.context";

function CartCard({ cartItem }) {
  const { addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const removeItemHandler = () => removeItemToCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);

  return (
    <div className="flex justify-center text-center items-center text-lg font-outfit mt-10">
      <div className="w-full flex justify-center items-center">
        <img src={cartItem.img} alt="" className="w-36 xl:w-56" />
      </div>
      <div className="flex flex-col items-start md:items-center w-full ml-1">
        <h1 className="text-left">{cartItem.name}</h1>
        <h1 className="text-sm">Rp. {cartItem.discount === "0" ? cartItem.originalPrice : cartItem.discountPrice}</h1>
        <h1 className="flex justify-start items-center gap-5 mt-5">
          <Minus size={15} className="cursor-pointer" onClick={removeItemHandler}/>
          <p className="text-" >{cartItem.quantity}</p>
          <Plus size={15} className="cursor-pointer" onClick={addItemHandler}/>
        </h1>
      </div>
    </div>
  );
}

export default CartCard;
