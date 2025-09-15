import { food_list, menu_list } from "@/assets/frontend_assets/assets";
import StoreContext from "./StoreContext";
const StoreContextProvider = ({ children }) => {
  const currency = "$";
  const StoreValue = {
    menu_list,
    food_list,
    currency,
  };

  return (
    <StoreContext.Provider value={StoreValue}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
