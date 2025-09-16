import { assets } from "@/assets/frontend_assets/assets";
import StoreContext from "@/context/StoreContext";
import React, { useContext, useState } from "react";

const FoodItem = ({ id, image, name, price, description }) => {
  const { currency, addToCart, removeFromCart, cartItems, setCartItems } =
    useContext(StoreContext);

  return (
    <div className="rounded-md bg-white shadow-md">
      <div className="relative">
        <img src={image} className="rounded-t-md" alt={name} />
        <div className="absolute bottom-2 right-2">
          {!cartItems[id] ? (
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
              className="cursor-pointer"
              alt=""
            />
          ) : (
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full">
              <img
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                className="cursor-pointer"
                alt=""
              />
              <p>{cartItems[id]}</p>
              <img
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                className="cursor-pointer"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-xl">{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p>{description}</p>
        <p className="font-semibold">
          {currency}
          {price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
