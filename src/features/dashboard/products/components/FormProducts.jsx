import React, { useState } from "react";
import Products from "../Products";

const FormProducts = ({ setProducts }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleProduct = (e) => {
    e.preventDefault();

    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    const product = {
      id: Date.now(),
      name,
      price,
      description,
      quantity,
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
        <label htmlFor="price">Price</label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          name="price"
          className="form-control"
          id="specificSizeInputName"
          placeholder="price: "
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
          id="specificSizeInputName"
          placeholder="description: "
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
          id="specificSizeInputName"
          placeholder="quantity: "
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
