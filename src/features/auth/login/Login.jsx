import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(Array.isArray(storedUsers) ? storedUsers : [storedUsers]);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const userFound = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      alert(`✅ LOGGED IN SUCCESSFULLY!\nEmail: ${email}`);
      localStorage.setItem("currentUser", JSON.stringify(userFound));
      navigate("/dashboard");
    } else {
      alert("❌ Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        onSubmit={handleLogin}
        className="bg-light p-5 rounded shadow-lg w-50"
      >
        <h2 className="text-center text-primary fw-bold mb-4">Login</h2>

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
          Login 🚀
        </button>
      </form>
    </div>
  );
};

export default Login;
