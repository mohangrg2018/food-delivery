import AppDownload from "@/components/sections/AppDownload";
import ExploreMenu from "@/components/sections/ExploreMenu";
import FoodDisplay from "@/components/sections/FoodDisplay";
import Hero from "@/components/sections/Hero";
import React, { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <main>
      <Hero />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </main>
  );
};

export default Home;
