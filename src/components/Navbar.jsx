import React from "react";

export default function Navbar() {
  const buttonClass =
    "px-4 py-2 rounded-full border border-yellow-400 text-white hover:bg-yellow-400 hover:text-black transition-colors duration-300";

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f172a] text-white shadow-md z-50">
      <div className="navbar px-4 md:px-6 lg:px-8">
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div
              tabIndex="0"
              role="button"
              className="btn btn-ghost lg:hidden text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-gray-800 dark:bg-gray-900 space-y-4 rounded-box z-[1] mt-3 w-52 p-4 shadow"
            >
              <li>
                <a className={buttonClass} href="/">
                  Home
                </a>
              </li>
              <li>
                <a className={buttonClass} href="/about">
                  About
                </a>
              </li>
              <li>
                <a className={buttonClass} href="/service">
                  Service
                </a>
              </li>
              <li>
                <a className={buttonClass} href="/Portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className={`${buttonClass} bg-yellow-400 text-black hover:bg-yellow-500 hover:text-white`}
                  href="/contact"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <a
            className="text-xl mb-5 font-extrabold text-[#F8B90C] dark:text-yellow-400"
            href="/"
          >
            MST.SUVA  
            <span className="text-blue-400 dark:text-blue-300">Akther</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-x-4 font-bold">
            <li>
              <a className={buttonClass} href="/">
                Home
              </a>
            </li>
            <li>
              <a className={buttonClass} href="/about">
                About
              </a>
            </li>
            <li>
              <a className={buttonClass} href="/service">
                Service
              </a>
            </li>
            <li>
              <a className={buttonClass} href="/Portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a
                className={`${buttonClass} bg-yellow-400 text-black hover:bg-yellow-500 hover:text-white`}
                href="/contact"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
