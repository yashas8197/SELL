import { NavLink } from "react-router-dom";

const Head = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <div className="mb-4 sm:mb-0">
        <NavLink to="/" className="font-bold text-2xl font-serif">
          S E L L <span style={{ color: "#0284c7" }}>.</span>
        </NavLink>
      </div>

      <nav className="flex space-x-6 items-center">
        <NavLink to="/search" className="group cursor-pointer">
          <i className="bi bi-search text-xl"></i>
        </NavLink>
        <NavLink to="/profile" className="group cursor-pointer">
          <i className="bi bi-person-circle text-xl"></i>
        </NavLink>
        <NavLink to="/wishlist" className="group cursor-pointer">
          <i className="bi bi-heart text-xl"></i>
        </NavLink>
        <NavLink to="/cart" className="group cursor-pointer">
          <i className="bi bi-cart2 text-xl"></i>
        </NavLink>
      </nav>
    </div>
  );
};

export default Head;
