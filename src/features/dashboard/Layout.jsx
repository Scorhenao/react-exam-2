import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import NavBar from "../landing/components/NavBar";

const Layout = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
  console.log(currentUser);

  const Exit = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <div className="container-fluid d-flex flex-column gap-5 ">
      <nav className="d-flex gap-5">
        <ul className="nav flex-column bg-light w-25 d-flex gap-4 text-center p-4 border rounded">
          <li className="nav-item">
            {" "}
            <Link
              to="products"
              className="block px-3 py-2 text-black bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
              aria-current="page"
            >
              Product
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link
              to="clients"
              className="block px-3 py-2 text-black bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
              aria-current="page"
            >
              Client
            </Link>
          </li>
        </ul>

        {/* Main content */}
        <main className="d-flex gap-3">
          <h1 className="text-lg font-semibold">Welcome {currentUser.name}</h1>
          <button className="rounded w-25 h-25 mt-3" onClick={Exit}>
            Exit
          </button>
        </main>
      </nav>

      <div className="d-flex flex-column flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
