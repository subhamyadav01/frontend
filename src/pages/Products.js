import React, { useState } from 'react';
import { info } from "../info";
import { Modal, Button, Form } from 'react-bootstrap';

const Products = () => {
  const [data, setData] = useState(info.products || []);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // Index of item being edited

  // State for new item form fields
  const [newItem, setNewItem] = useState({
    product_name: '',
    category: '',
    price: '',
    stock: ''
  });

  // Function to handle changes in the form fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItem({
      ...newItem,
      [name]: value
    });
  };

  // Function to handle submission of the form
  const handleSubmit = (event) => {
    event.preventDefault();
    if (editIndex !== null) {
      // Editing an existing item
      const updatedData = [...data];
      updatedData[editIndex] = newItem;
      setData(updatedData);
    } else {
      // Adding a new item
      const updatedData = [...data, newItem];
      setData(updatedData);
    }
    setNewItem({
      product_name: '',
      category: '',
      price: '',
      stock: ''
    });
    setEditIndex(null);
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
    setNewItem(itemToEdit);
    setEditIndex(index);
    setShowModal(true);
  };

  return (
    <div>
      <div>
        <h1 style={{ padding: '5px 5px 5px 5px', width: '100%' }}>Products</h1>
        <button
          style={{ margin: '5px' }}
          className='btn btn-primary'
          onClick={() => {
            setNewItem({
              product_name: '',
              category: '',
              price: '',
              stock: ''
            });
            setEditIndex(null);
            setShowModal(true);
          }}
        >
          Add Product
        </button>
      </div>

      {/* Modal for adding/editing a new item */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex !== null ? 'Edit Item' : 'Add New Item'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formProductName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                name="product_name"
                value={newItem.product_name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCategory">
              <Form.Label>Category:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                name="category"
                value={newItem.category}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter price"
                name="price"
                value={newItem.price}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStock">
              <Form.Label>Stock:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter stock quantity"
                name="stock"
                value={newItem.stock}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {editIndex !== null ? 'Save Changes' : 'Submit'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <table className="table table-striped" style={{ padding: '400px', width: '100%', margin: 'auto' }}>
        <thead>
          <tr>
            <th style={{ fontSize: '25px' }} scope="col">Name</th>
            <th style={{ fontSize: '25px' }} scope="col">Category</th>
            <th style={{ fontSize: '25px' }} scope="col">Price</th>
            <th style={{ fontSize: '25px' }} scope="col">Stock</th>
            <th style={{ fontSize: '25px' }} scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.product_name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>
                <button
                  style={{ margin: '5px 5px 5px 5px' }}
                  className='btn btn-secondary'
                  onClick={() => handleEdit(index)}
                >
                  Edit
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

export default Products;
