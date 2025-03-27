import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

  const Exit = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <div className="container-fluid d-flex vh-100">
      {/* Sidebar */}
      <nav
        className="bg-light border-end p-4 d-flex flex-column align-items-start gap-4"
        style={{ width: "250px" }}
      >
        <h2 className="text-primary fw-bold">Dashboard</h2>
        <ul className="nav flex-column w-100">
          <li className="nav-item">
            <Link to="products" className="nav-link text-dark fw-semibold">
              🛒 Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="clients" className="nav-link text-dark fw-semibold">
              👥 Clients
            </Link>
          </li>
        </ul>
        <button className="btn btn-danger mt-auto w-100" onClick={Exit}>
          🚪 Exit
        </button>
      </nav>

      {/* Main content */}
      <div className="flex-grow-1 p-4">
        <header className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="text-primary">
            Welcome, {currentUser?.name || "Guest"}! 👋
          </h1>
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
