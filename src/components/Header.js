import React from "react";
import { useState } from "react";

const Header = () => {
  const mobileView = useState(false);
  return (
    <nav className="mx-auto p-5 shadow">
      <div className="flex">
        <div>E-Com</div>

        <div className="hidden sm:flex ml-auto space-x-4">
          <button className="bg-black p-2 rounded-full text-white mx-auto hover:text-gray-200">
            Sign Up
          </button>
          <button className="bg-black p-2 rounded-full text-white mx-auto hover:text-gray-200">
            {" "}
            Login{" "}
          </button>
          <button className="bg-black p-2 rounded-full text-white mx-auto hover:text-gray-200">
            Contact
          </button>
        </div>

        {/* mobileView */}

        <div className="ml-auto sm:hidden">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-bold hover:text-2xl"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div>
        <div className="flex flex-col mt-10">
          <button className="max-w border-2 h-12">test</button>
          <button className="max-w border-2 h-12">test</button>
          <button className="max-w border-2 h-12">test</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
