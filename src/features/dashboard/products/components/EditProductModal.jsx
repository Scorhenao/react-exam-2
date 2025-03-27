import React from "react";

const EditProductModal = ({ show, product, onChange, onSave, onClose }) => {
  if (!show || !product) return null;

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Product</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="name">Name</label >
              <input
                type="text"
                name="name"
                value={product.name}
                className="form-control"
                onChange={onChange}
              />
              <label htmlFor="price">Price</label >
              <input
                type="number"
                name="price"
                value={product.price}
                className="form-control"
                onChange={onChange}
              />
              <label htmlFor="description">Description</label >
              <input
                type="text"
                name="description"
                value={product.description}
                className="form-control"
                onChange={onChange}
              />
              <label htmlFor="quantity">Quantity</label >
              <input
                type="number"
                name="quantity"
                value={product.quantity}
                className="form-control"
                onChange={onChange}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={onSave}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default EditProductModal;
