import React, { useState, useEffect } from "react";

const FormProducts = ({ setProducts }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [clientId, setClientId] = useState("");
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const storedClients = JSON.parse(localStorage.getItem("clients")) || [];
    setClients(storedClients);
  }, []);

  const handleProduct = (e) => {
    e.preventDefault();

    if (!clientId) {
      alert("Please select a client before adding a product.");
      return;
    }

    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    const product = {
      id: Date.now(),
      name,
      price,
      description,
      quantity,
      clientId,
    };

    storedProducts.push(product);
    localStorage.setItem("products", JSON.stringify(storedProducts));
    setProducts(storedProducts);

    alert("Product added");
  };

  return (
    <form
      onSubmit={handleProduct}
      className="container m-auto mt-5 d-flex flex-column w-50 gx-3 gy-2 align-items-center border rounded p-5 gap-3"
    >
      <div className="col-sm-5">
        <label htmlFor="client">Client</label>
        <select
          className="form-control"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          required
        >
          <option value="">Select a client</option>
          {clients.map((client) => (
            <option key={client.id} value={client.id}>
              {client.name}
            </option>
          ))}
        </select>
      </div>
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
        <label htmlFor="price">Price</label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          name="price"
          className="form-control"
          required
        />
      </div>
      <div className="col-sm-5">
        <label htmlFor="description">Description</label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          className="form-control"
          required
        />
      </div>
      <div className="col-sm-5">
        <label htmlFor="quantity">Quantity</label>
        <input
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
          name="quantity"
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

export default FormProducts;
