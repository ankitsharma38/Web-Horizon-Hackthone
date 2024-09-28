import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Initialize translation and i18n
  const [isOpen, setIsOpen] = useState(false); // Controls mobile menu
  const [user, setUser] = useState(null);
  const [showLangMenu, setShowLangMenu] = useState(false); // Controls language dropdown visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  // Language change handler
  const changeLanguage = (lng) => {
    console.log("Selected language:", lng); // Debugging log
    i18n.changeLanguage(lng)
      .then(() => {
        console.log(`Language changed to ${lng}`);
        setShowLangMenu(false); // Close language dropdown after selection
      })
      .catch((error) => {
        console.error("Language change error:", error);
      });
  };

  const toggleLangMenu = () => {
    setShowLangMenu((prevState) => !prevState); // Toggle language dropdown
  };

  return (
    <div className="bg-white h-16 fixed top-0 left-0 w-full flex justify-between items-center shadow-md px-4 z-50">
      {/* Logo */}
      <Link to="/" className="no-underline">
        <img
          src="https://i.im.ge/2024/09/27/kdlet6.logo-removebg-preview.png"
          alt="logo"
          className="w-34 h-12"
        />
      </Link>

      {/* Hamburger icon for mobile view */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center px-2 py-1 rounded focus:outline-none"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <div
        className={`flex-col md:flex md:flex-row md:items-center absolute md:static bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${isOpen ? "top-16 left-0 w-full" : "top-[-300px]"} md:top-0 md:w-auto md:space-x-4`}
      >
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0">
          <Link
            to="/offer"
            className="px-4 py-2 text-gray-600 hover:text-gray-900 font-semibold"
          >
            {t("offers")}
          </Link>
          <Link
            to="/customercare"
            className="px-4 py-2 text-gray-600 hover:text-gray-900 font-semibold"
          >
            {t("customerService")}
          </Link>

          {/* Language Switcher */}
          <div className="relative">
            <button
              className="px-4 py-2 text-gray-600 font-semibold"
              onClick={toggleLangMenu}
            >
              Language
            </button>
            {showLangMenu && (
              <div className="absolute bg-white shadow-lg rounded mt-2 z-10">
                <button
                  onClick={() => changeLanguage("en")}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("hi")}
                  className="block px-3 py-2 hover:bg-gray-200"
                >
                  Hindi
                </button>
              </div>
            )}
          </div>

          {user ? (
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-2">
                {/* Display user profile image or default icon */}
                <Link to="/profile">
                  <img
                    src="https://i.im.ge/2024/09/27/kdlCkq.profile.jpeg"
                    alt="Profile"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                  />
                </Link>

                {/* Display username */}
                <span className="text-gray-700 font-bold">{user.user}</span>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-all duration-300 font-semibold"
              >
                {t("logout")}
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 font-semibold"
            >
              {t("signIn")}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
