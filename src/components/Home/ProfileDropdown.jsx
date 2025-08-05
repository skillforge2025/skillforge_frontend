import React from "react";
import { FiGlobe } from "react-icons/fi";

const ProfileDropdown = () => {
  return (
    <div className=" h-full w-full group bg-black text-black">
      {/* Profile Button */}

      {/* Dropdown Panel */}
      <div className="bg-white transition-all"></div>
      <div className="absolute right-1 top-15 w-72 bg-white shadow-lg border rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50">
        <div className="px-4 py-3 border-b">
          <div className="font-semibold text-black">Swapnil Rathod</div>
          <div className="text-sm text-gray-500 truncate">
            swapnilrathod1002@gmail.com
          </div>
        </div>

        <div className="p-2 text-sm text-gray-700 space-y-1">
          <a href="#" className="block hover:bg-gray-100 rounded px-2 py-1">
            My learning
          </a>
          <a href="#" className="block hover:bg-gray-100 rounded px-2 py-1">
            My cart
          </a>
          <a href="#" className="block hover:bg-gray-100 rounded px-2 py-1">
            Wishlist
          </a>
          <a href="#" className="block hover:bg-gray-100 rounded px-2 py-1">
            Refer a friend
          </a>
          <a href="#" className="block hover:bg-gray-100 rounded px-2 py-1">
            Teach on Udemy
          </a>
        </div>

        <div className="p-2 text-sm text-gray-700 space-y-1 border-t">
          <a href="#" className="block hover:bg-gray-100 rounded px-2 py-1">
            Notifications
          </a>
          <a href="#" className="block hover:bg-gray-100 rounded px-2 py-1">
            Messages
          </a>
        </div>

        <div className="p-2 text-sm text-gray-700 space-y-1 border-t">
          <a href="#" className="block hover:bg-gray-100 rounded px-2 py-1">
            Account settings
          </a>
          <a href="#" className="block hover:bg-gray-100 rounded px-2 py-1">
            Payment methods
          </a>
          <a href="#" className="block hover:bg-gray-100 rounded px-2 py-1">
            Subscriptions
          </a>
          <a href="#" className="block hover:bg-gray-100 rounded px-2 py-1">
            Udemy credits
          </a>
          <a href="#" className="block hover:bg-gray-100 rounded px-2 py-1">
            Purchase history
          </a>
        </div>

        <div className="p-2 text-sm text-gray-700 border-t flex justify-between items-center hover:bg-gray-100 rounded-b">
          <span>Language</span>
          <span className="flex items-center gap-1">
            English <FiGlobe />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
