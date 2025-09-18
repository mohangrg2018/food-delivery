import { assets } from "@/assets/frontend_assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext, useState } from "react";
import StoreContext from "@/context/StoreContext";

const Navbar = () => {
  const { navigate } = useContext(StoreContext);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleSignIn = () => {
    setIsOpenMenu(false);
    navigate("/login");
  };
  return (
    <header className="container__width flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} className="w-32" alt="" />
      </Link>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-8 lg:gap-20">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/mobile-app">Mobile App</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4 sm:gap-6">
        <img src={assets.search_icon} className="w-6" alt="" />
        <Link to="/cart">
          <img src={assets.basket_icon} className="w-6" alt="" />
        </Link>
        <Button
          onClick={handleSignIn}
          variant="outline"
          className="hidden md:block"
        >
          Sign In
        </Button>
        <img
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          src={assets.menu}
          className="w-6 md:hidden"
          alt=""
        />
      </div>
      {isOpenMenu && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-white z-10 flex flex-col items-center justify-center gap-10">
          <img
            onClick={() => setIsOpenMenu(false)}
            src={assets.close}
            className="w-10 absolute top-4 right-4"
            alt=""
          />
          <ul className="flex flex-col items-center gap-10">
            <li onClick={() => setIsOpenMenu(false)}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={() => setIsOpenMenu(false)}>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li onClick={() => setIsOpenMenu(false)}>
              <NavLink to="/mobile-app">Mobile App</NavLink>
            </li>
            <li onClick={() => setIsOpenMenu(false)}>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <Button onClick={handleSignIn} variant="outline">
            Sign In
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
