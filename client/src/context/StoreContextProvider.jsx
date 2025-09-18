import { food_list, menu_list } from "@/assets/frontend_assets/assets";
import StoreContext from "./StoreContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const StoreContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 20;
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems({ ...cartItems, [itemId]: 1 });
    } else {
      setCartItems({ ...cartItems, [itemId]: cartItems[itemId] + 1 });
    }
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 1) {
      setCartItems({ ...cartItems, [itemId]: cartItems[itemId] - 1 });
    } else {
      delete cartItems[itemId];
      setCartItems({ ...cartItems });
    }
  };

  const cartTotalAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((food) => food._id == item); // use == or convert explicitly
        if (itemInfo) {
          total += itemInfo.price * cartItems[item];
        }
      }
    }
    return total;
  };

  const StoreValue = {
    navigate,
    menu_list,
    food_list,
    currency,
    addToCart,
    removeFromCart,
    cartItems,
    setCartItems,
    cartTotalAmount,
    delivery_fee,
  };

  return (
    <StoreContext.Provider value={StoreValue}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
