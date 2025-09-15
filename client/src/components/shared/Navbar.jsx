import { assets } from "@/assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="container__width flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} className="w-32" alt="" />
      </Link>
      <nav>
        <ul className="flex items-center gap-20">
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
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-6" alt="" />
        <img src={assets.basket_icon} className="w-6" alt="" />
      </div>
    </header>
  );
};

export default Navbar;
