import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
        ✅ REGISTERED SUCCESSFULLY!
        Name: ${name}
        Email: ${email}
        Password: ${password}
    `);
    localStorage.setItem("users", JSON.stringify({ name, email, password }));
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        onSubmit={handleSubmit}
        className="bg-light p-5 rounded shadow-lg w-50"
      >
        <h2 className="text-center text-primary fw-bold mb-4">Register</h2>

        {/* Name Input */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-semibold">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">
            Email
          </label>
          <div className="input-group">
            <span className="input-group-text">@</span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="form-label fw-semibold">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100 fw-semibold">
          Register 🚀
        </button>
      </form>
    </div>
  );
};

export default Register;
