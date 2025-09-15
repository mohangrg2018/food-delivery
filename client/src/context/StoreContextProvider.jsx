import { food_list, menu_list } from "@/assets/frontend_assets/assets";
import StoreContext from "./StoreContext";
const StoreContextProvider = ({ children }) => {
  const StoreValue = {
    menu_list,
    food_list,
  };

  return (
    <StoreContext.Provider value={StoreValue}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
