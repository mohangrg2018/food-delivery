import StoreContext from "@/context/StoreContext";
import React, { useContext } from "react";

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);
  return (
    <section className="container__width my-10 sm:y-20 flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Explore our menu</h2>
      <p className="w-[80vw] lg:w-[50vw]">
        Discover a wide variety of freshly prepared dishes, from appetizers to
        desserts. Each item is made with quality ingredients and crafted to
        satisfy every craving.
      </p>
      <div className="flex justify-between gap-4 overflow-x-auto no-scrollbar mt-6">
        {menu_list.map((item, index) => (
          <div
            onClick={() => setCategory(item.menu_name)}
            key={index}
            className="flex flex-col items-center gap-2"
          >
            <img
              src={item.menu_image}
              className={`min-w-[80px] cursor-pointer ${
                category === item.menu_name
                  ? "border-2 border-primary rounded-full p-1"
                  : ""
              }`}
              alt=""
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreMenu;
