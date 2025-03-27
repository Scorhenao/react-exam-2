import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="nav flex-column bg-light w-25 d-flex gap-4 text-center p-4 border rounded">
      <li className="nav-item">
        {" "}
        <Link
          to="/"
          className="block px-3 py-2 text-black bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
          aria-current="page"
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        {" "}
        <Link
          to="/products"
          className="block px-3 py-2 text-black bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
          aria-current="page"
        >
          Product
        </Link>
      </li>
      <li className="nav-item">
        {" "}
        <Link
          to="/clients"
          className="block px-3 py-2 text-black bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
          aria-current="page"
        >
          Client
        </Link>
      </li>
      <li className="nav-item">
        {" "}
        <Link
          to="/login"
          className="block px-3 py-2 text-black bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
          aria-current="page"
        >
          Login
        </Link>
      </li>
      <li className="nav-item">
        {" "}
        <Link
          to="/register"
          className="block px-3 py-2 text-black bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
          aria-current="page"
        >
          Register
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
