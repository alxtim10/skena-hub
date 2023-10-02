import React, { useContext } from "react";
import CartCard from "../../components/cart/CartCard";
import { CartContext } from "../../contexts/cart.context";
import Swal from "sweetalert2";

function Cart() {
  const { cartItems, cartTotal, clearCart } = useContext(CartContext);

  const handlePurchase = async () => {
    Swal.fire({
      title: "Confirmation",
      text: "Do you want to purchase?",
      icon: "info",
      confirmButtonText: "Confirm",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Purchased", "", "success");
        clearCart();
      }
    });
  };

  return (
    <section className="my-10 p-5 font-outfit">
      <div className="w-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl mb-5 text-center text-blue-700 font-bold">
            Shopping Cart
          </h1>
          <div className="h-[1px] w-56 bg-black"></div>
        </div>
        {cartItems.map((cartItem) => {
          return <CartCard key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>
      <div className="lg:flex lg:justify-center">
        <div className="w-full lg:w-1/2 mt-20">
          <h1 className="text-3xl mb-10">Cart Totals</h1>
          <div className="flex justify-between text-lg font-outfit">
            <h1>Subtotal</h1>
            <h1>Rp. {cartTotal}</h1>
          </div>
          <div className="flex justify-between text-lg font-outfit">
            <h1>Shipping</h1>
            <h1>Rp. 50000</h1>
          </div>
          <div className="flex justify-between text-lg font-outfit mt-5">
            <h1>Total</h1>
            <h1 className="font-bold">Rp. {cartTotal + 50000}</h1>
          </div>
          <button
            onClick={handlePurchase}
            className={`${
              cartItems.length == 0 ? "hidden" : "block"
            } bg-black w-full mt-5 text-white p-4 rounded-md hover:border hover:border-black hover:bg-white hover:text-black transition-all duration-300`}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
