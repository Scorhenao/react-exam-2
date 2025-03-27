import React, { useState, useEffect } from "react";
import FormProducts from "./components/FormProducts";
import EditProductModal from "./components/EditProductModal";

const Products = () => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  const [clients, setClients] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const storedClients = JSON.parse(localStorage.getItem("clients")) || [];
    setClients(storedClients);
  }, []);

  const openEditModal = (product) => {
    setEditingProduct(product);
    setModalVisible(true);
  };

  const handleEditChange = (e) => {
    setEditingProduct({ ...editingProduct, [e.target.name]: e.target.value });
  };

  const saveEditedProduct = () => {
    const updatedProducts = products.map((product) =>
      product.id === editingProduct.id ? editingProduct : product
    );

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setModalVisible(false);
  };

  const deleteProduct = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  const clientName = (id) => {
    console.log("The array of clients is:", clients);
    console.log("Searching for client with ID:", id);

    const name = clients.find(
      (client) => Number(client.id) === Number(id)
    )?.name;
    console.log("Client name found:", name);

    return name || "No client";
  };

  return (
    <div className="container-fluid d-flex">
      <FormProducts setProducts={setProducts} />
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Client</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.quantity}</td>
                <td>{clientName(product.clientId)}</td>{" "}
                <td>
                  <button
                    onClick={() => openEditModal(product)}
                    className="btn btn-primary me-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No products</td>
            </tr>
          )}
        </tbody>
      </table>

      <EditProductModal
        show={modalVisible}
        product={editingProduct}
        onChange={handleEditChange}
        onSave={saveEditedProduct}
        onClose={() => setModalVisible(false)}
      />
    </div>
  );
};

export default Products;
