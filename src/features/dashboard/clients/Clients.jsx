import React, { useState } from "react";
import FormClients from "./components/FormClients";
import EditClientModal from "./components/EditClientModal";

const Clients = () => {
  const [clients, setClients] = useState(
    JSON.parse(localStorage.getItem("clients")) || []
  );

  const [editingClient, setEditingClient] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openEditModal = (client) => {
    setEditingClient(client);
    setModalVisible(true);
  };

  const handleEditChange = (e) => {
    setEditingClient({ ...editingClient, [e.target.name]: e.target.value });
  };

  const saveEditedClient = () => {
    const updatedClients = clients.map((client) =>
      client.id === editingClient.id ? editingClient : client
    );

    setClients(updatedClients);
    localStorage.setItem("clients", JSON.stringify(updatedClients));
    setModalVisible(false);
  };

  const deleteClient = (id) => {
    const newClients = clients.filter((client) => client.id !== id);
    setClients(newClients);
    localStorage.setItem("clients", JSON.stringify(newClients));
  };

  return (
    <div className="container-fluid d-flex">
      <FormClients setClients={setClients} />
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.length > 0 ? (
            clients.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>
                  <button
                    onClick={() => openEditModal(client)}
                    className="btn btn-primary me-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteClient(client.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No clients</td>
            </tr>
          )}
        </tbody>
      </table>

      <EditClientModal
        show={modalVisible}
        client={editingClient}
        onChange={handleEditChange}
        onSave={saveEditedClient}
        onClose={() => setModalVisible(false)}
      />
    </div>
  );
};

export default Clients;
