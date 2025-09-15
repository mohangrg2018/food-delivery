import { food_list } from "@/assets/frontend_assets/assets";
import StoreContext from "@/context/StoreContext";
import React, { useContext } from "react";
import FoodItem from "../shared/FoodItem";

const FoodDisplay = () => {
  const { food_list } = useContext(StoreContext);
  return (
    <section className="container__width my-10 sm:y-20 flex flex-col gap-6">
      <hr />
      <h2 className="text-2xl font-semibold mt-4">Top dishes near you</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {food_list.slice(0, 12).map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FoodDisplay;
