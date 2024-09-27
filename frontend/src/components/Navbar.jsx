import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white h-16 flex justify-center border-b transition-colors duration-300">
      <div className="w-full max-w-6xl flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="no-underline">
          <span className="font-semibold text-2xl text-black">
            lamabooking
          </span>
        </Link>

        {/* Right-side buttons */}
        <div className="flex items-center space-x-4">
          {/* Register Button */}
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300">
            Register
          </button>

          {/* Login Button */}
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
