import React, { useState } from "react";

const FormClients = ({ setClients }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleClient = (e) => {
    e.preventDefault();

    const storedClients = JSON.parse(localStorage.getItem("clients")) || [];

    const client = {
      id: Date.now(),
      name,
      email,
      phone,
    };

    storedClients.push(client);
    localStorage.setItem("clients", JSON.stringify(storedClients));

    setClients(storedClients);
    alert("Client added");
  };

  return (
    <form
      onSubmit={handleClient}
      className="container m-auto mt-5 d-flex flex-column w-50 gx-3 gy-2 align-items-center border rounded p-5 gap-3"
    >
      <div className="col-sm-5">
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          className="form-control"
          required
        />
      </div>
      <div className="col-sm-5">
        <label htmlFor="email">Email</label>
        <div className="input-group">
          <div className="input-group-text">@</div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            className="form-control"
            required
          />
        </div>
      </div>
      <div className="col-sm-5">
        <label htmlFor="phone">Phone</label>
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          name="phone"
          className="form-control"
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

export default FormClients;
