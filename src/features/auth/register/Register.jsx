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
        ¡REGISTERED SUCCESSFULLY!
        name: ${name}, email: ${email}, password: ${password}
        `);
    localStorage.setItem("users", JSON.stringify({ name, email, password }));
    navigate("/login");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="container m-auto mt-5 d-flex flex-column w-50 gx-3 gy-2 align-items-center border rounded p-5 gap-3"
    >
      <div className="col-sm-5">
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          className="form-control"
          id="specificSizeInputName"
          placeholder="name: "
          required
        />
      </div>
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
            required
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
          required
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

export default Register;
