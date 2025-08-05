import React, { useState } from "react";
import { FiGlobe, FiSearch, FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link, useSearchParams } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [loggedin, setLoggedIn] = useState(false);
  const [menuClik, setMenuClick] = useState(false);
  const handleToggle = () => setClick(!click);
  const handleLoggedIn = () => setLoggedIn(!loggedin);

  console.log(menuClik);
  return (
    <nav className="w-full px-3 py-3 shadow-sm  bg-white relative top-0 z-50">
      <div className="flex items-center justify-between max-w-8xl mx-auto">
        {/* Left Logo and Explore */}
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold text-black">SkillForge</div>
        </div>

        {/* Hamburger Menu Icon (mobile) */}
        <div className="md:hidden">
          {click ? (
            <RxCross2
              className="size-6 cursor-pointer"
              onClick={handleToggle}
            />
          ) : (
            <GiHamburgerMenu
              className="size-6 cursor-pointer"
              onClick={handleToggle}
            />
          )}
        </div>

        {/* Navigation Items */}
        <div
          className={`${
            click ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent border-t md:border-none py-4 md:py-0 px-4 md:px-0 z-20`}
        >
          {/* Search */}
          <div className=" w-full md:w-[400px] relative">
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-500" />
          </div>

          {/* Navigation Links */}
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Plans & Pricing
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Course and Certifications
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Teach on Udemy
          </a>

          <div
            className={`size-14 relative right-1 ${
              loggedin ? "block" : "hidden"
            } `}
            onClick={() => setMenuClick(!menuClik)}
          >
            <img
              src="/default-avatar-profile-icon-of-social-media-user-vector.jpg"
              alt=""
              className="size-14 rounded-full object-cover"
            />
          </div>

          {/* Auth Buttons */}
          <div className={`flex gap-1.5 ${loggedin ? "hidden" : "block"}`}>
            <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded hover:bg-purple-50 text-sm font-medium">
              <Link className="w-full h-full" to="/login">
                Log in
              </Link>
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-sm font-medium">
              <Link className="w-full h-full" to="/signup">
                sign up
              </Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
