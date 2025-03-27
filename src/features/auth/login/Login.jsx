import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    setUsers(users);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email == users.email && password == users.password) {
      alert(`
            ¡LOGGED SUCCESSFULLY!
            email: ${email}, password: ${password}
            `);
      localStorage.setItem("currentUser", JSON.stringify(users));
      navigate("/dashboard");
    } else {
      alert(`
            ¡Invalid credentials!
            email: ${email}, password: ${password}
            `);
    }
  };
  return (
    <form
      onSubmit={handleLogin}
      className="container m-auto mt-5 d-flex flex-column w-50 gx-3 gy-2 align-items-center border rounded p-5 gap-3"
    >
      <div className="col-sm-5">
        <label htmlFor="email">Email</label>
        <div className="input-group">
          <div className="input-group-text">@</div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            className="form-control"
            id="specificSizeInputGroupUsername"
            placeholder="email: "
          />
        </div>
      </div>
      <div className="col-sm-5">
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          className="form-control"
          id="specificSizeInputGroupUsername"
          placeholder="password: "
        />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
