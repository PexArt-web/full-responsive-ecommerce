import { Link, NavLink, useLocation } from "react-router-dom";
import BrandLogo from "../assets/images/BrandLogo/BLogo.png";
import { useLogout } from "../hooks/useLogout";
import useAuthContext from "@/hooks/useAuthContext";

const Nav = () => {
  // const location = useLocation()
  // const noSign = ['/create-account']
  // const noLogin =  ['account/login']
  // const logOut = ['/']
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold md:flex items-center space-x-4">
          <Link to={"/"}>
            <img src={BrandLogo} alt="Brand Logo" className="h-20 w-auto" />
          </Link>
          <Link to={"/"}>PexLuxora</Link>
        </div>

        <div className="space-x-8 hidden md:flex">
          <NavLink to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </NavLink>
          <NavLink to="/shop" className="text-gray-600 hover:text-gray-900">
            Shop
          </NavLink>
          <NavLink to="/about" className="text-gray-600 hover:text-gray-900">
            About Us
          </NavLink>
          <NavLink to="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </NavLink>
        </div>

        <div className="flex items-center space-x-4">
          {!user && (
            <NavLink
              to="/create-account"
              className="text-gray-600 hover:text-gray-900"
            >
              Sign Up
            </NavLink>
          )}
          {!user && (
            <NavLink
              to="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Login
            </NavLink>
          )}

          {user && (
            <div>
              <span className="mr-3">{user.userEmail}</span>
              <Link
                to={"/"}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-blue-700"
                onClick={handleClick}
              >
                Log out
              </Link>
            </div>
          )}
          <NavLink
            to="/cart"
            className="text-gray-600 hover:text-gray-900 hidden"
          >
            Cart (0)
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
