import { assets } from "@/assets/frontend_assets/assets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StoreContext from "@/context/StoreContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    currency,
    food_list,
    removeFromCart,
    cartTotalAmount,
    delivery_fee,
  } = useContext(StoreContext);

  if (Object.keys(cartItems).length === 0) {
    return (
      <div className="container__width">
        <h1 className="h-[40vh] text-2xl font-bold my-20 text-center">
          Your cart is empty
        </h1>
      </div>
    );
  }

  return (
    <div className="container__width mb-12 sm:mb-20">
      <div className="grid grid-cols-6 capitalize mt-12">
        <p>items</p>
        <p>title</p>
        <p>price</p>
        <p>quantity</p>
        <p>total</p>
        <p>remove</p>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col gap-3 mb-12 sm:mb-20">
        {food_list.map((item, index) => {
          if (cartItems[item._id]) {
            return (
              <div key={index} className="grid grid-cols-6 items-center">
                <img src={item.image} className="w-12 sm:w-20" />
                <h1 className="font-bold text-sm sm:text-base">{item.name}</h1>
                <p>
                  {currency}
                  {item.price}
                </p>
                <p>{cartItems[item._id]}</p>
                <p>
                  {currency}
                  {cartItems[item._id] * item.price}
                </p>
                <img
                  onClick={() => removeFromCart(item._id)}
                  src={assets.cross_icon}
                  className="cursor-pointer"
                  alt=""
                />
              </div>
            );
          }
        })}
      </div>
      {/*  total */}
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-6 sm:gap-32">
        {/* cart total */}
        <div className="w-full sm:w-1/2">
          <h2 className="text-2xl font-semibold">Cart total</h2>
          <div className="flex justify-between border-b pb-2">
            <p>Subtotal</p>
            <p>{cartTotalAmount()}</p>
          </div>
          <div className="flex justify-between border-b pb-2">
            <p>Delivery Fee</p>
            <p>{delivery_fee}</p>
          </div>
          <div className="flex justify-between pb-4">
            <p>Total</p>
            <p>{cartTotalAmount() + delivery_fee}</p>
          </div>
          <Link to="/order">
            <Button className="rounded-none">Proceed to checkout</Button>
          </Link>
        </div>
        {/* coupon code */}
        <div className="w-full sm:w-1/2">
          <p>If you have a promo code. Enter it here</p>
          <form className="flex items-center mt-4">
            <Input
              type={"text"}
              className="rounded-none"
              placeholder="Promo code"
            />
            <Button type="submit" className="rounded-none">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
