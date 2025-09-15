import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="container__width mt-2">
      <div className="hero_background h-[60vh] lg:h-[80vh] flex flex-col gap-4 items-start justify-center px-8 text-white rounded-md">
        <h1 className="text-4xl font-bold">Order your favourite food here</h1>
        <p className="w-[70vw]">
          A fast, user-friendly platform that lets customers browse restaurants,
          discover menus, place orders online, and get fresh food delivered to
          their doorsteps.
        </p>
        <Button variant="outline" className="text-black">
          View Menu
        </Button>
      </div>
    </section>
  );
};

export default Hero;
