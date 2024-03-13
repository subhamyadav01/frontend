import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Here you can fetch data for key metrics if needed

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="card mb-3">
        <div className="card-header">Key Metrics</div>
        <div className="card-body">
          <h5 className="card-title">Total Products: 10</h5>
          <h5 className="card-title">Total Orders: 10</h5>
          {/* Add more key metrics as needed */}
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Products Management</h5>
              <p className="card-text">Manage your products here.</p>
              <Link to="/products" className="btn btn-primary">
                Go to Products
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Orders Management</h5>
              <p className="card-text">Manage your orders here.</p>
              <Link to="/orders" className="btn btn-primary">
                Go to Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
