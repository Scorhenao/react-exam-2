import React from "react";

const EditClientModal = ({ show, client, onChange, onSave, onClose }) => {
  if (!show || !client) return null;

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Client</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={client.name}
                className="form-control"
                onChange={onChange}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={client.email}
                className="form-control"
                onChange={onChange}
              />
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                value={client.phone}
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

export default EditClientModal;
