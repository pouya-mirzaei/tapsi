import React from 'react';
import Navbar from '../Navbar/Navbar';

export default function Header() {
  return (
    <header className="flex justify-around items-center bg-gray-2 py-3.5 px-5 border border-[#e1e3e1]">
      {/* logo */}
      <div>
        <a href="#">
          <img src="images/logo.png" className="w-[86px]" alt="logo" />
        </a>
      </div>
      {/*Navigation  */}
      <Navbar></Navbar>

      {/* app icon */}
      <div className="cursor-pointer bg-primary text-white px-3 py-1.5 rounded-md">
        {' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      </div>
    </header>
  );
}
