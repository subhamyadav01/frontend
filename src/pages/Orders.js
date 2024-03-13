import React, { useState } from 'react';
import { ordermng } from "../ordermng";
import { Modal, Button, Form } from 'react-bootstrap';

const Orders = () => {
  const [data, setData] = useState(ordermng.orders || []);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // Index of item being edited

  // State for form fields
  const [formData, setFormData] = useState({
    order_id: '',
    customer_name: '',
    order_date: '',
    status: ''
  });

  // Function to handle changes in the form fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle submission of the form
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedData = [...data];
    updatedData[editIndex] = formData;
    setData(updatedData);
    setShowModal(false);
  };

  // Function to handle deletion of an item
  const handleDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  // Function to handle editing an item
  const handleEdit = (index) => {
    const itemToEdit = data[index];
    setFormData(itemToEdit);
    setEditIndex(index);
    setShowModal(true);
  };

  return (
    <div>
      <div>
        <h1 style={{ padding: '5px 5px 5px 5px', width: '100%' }}>Orders</h1>
      </div>

      {/* Modal for updating status */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formStatus">
              <Form.Label>Status:</Form.Label>
              <Form.Select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <table className="table table-striped" style={{ padding: '400px', width: '100%', margin: 'auto' }}>
        <thead>
          <tr>
            <th style={{ fontSize: '25px' }} scope="col">Order Id</th>
            <th style={{ fontSize: '25px' }} scope="col">Customer Name</th>
            <th style={{ fontSize: '25px' }} scope="col">Order Date</th>
            <th style={{ fontSize: '25px' }} scope="col">Status</th>
            <th style={{ fontSize: '25px' }} scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.order_id}</td>
              <td>{item.customer_name}</td>
              <td>{item.order_date}</td>
              <td>{item.status}</td>
              <td>
                <button
                  style={{ margin: '5px 5px 5px 5px' }}
                  className='btn btn-secondary'
                  onClick={() => handleEdit(index)}
                >
                  Update Status
                </button>
                <button
                  style={{ margin: '5px 5px 5px 5px' }}
                  className='btn btn-danger'
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
