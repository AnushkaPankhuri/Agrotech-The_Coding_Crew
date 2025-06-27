import React, { useState, useEffect } from 'react';
import { useApi } from '../services/api';
import './PurchaseRequestForm.css';

function PurchaseRequestForm() {
    const api = useApi();
    const [form, setForm] = useState({
        cropType: '',
        quantity: '',
        price: '',
        requestDate: '',
        neededDate: ''
    });
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        const res = await api.get('/api/purchase-requests');
        setRequests(res.data);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post('/api/purchase-requests', form);
        setForm({
            cropType: '',
            quantity: '',
            price: '',
            requestDate: '',
            neededDate: ''
        });
        fetchRequests();
    };

    const handleDelete = async (id) => {
        await api.delete(`/api/purchase-requests/${id}`);
        fetchRequests();
    };

    const cropOptions = [
        'Wheat', 'Rice', 'Maize', 'Barley', 'Oats', 'Rye', 'Millet', 'Sorghum',
        'Corn', 'Soybean', 'Lentils', 'Chickpeas', 'Peas', 'Beans', 'Sunflower',
        'Canola', 'Cotton', 'Sugarcane', 'Potato', 'Tomato', 'Onion', 'Carrot',
        'Cabbage', 'Cauliflower', 'Broccoli', 'Spinach', 'Lettuce', 'Cucumber'
    ];

    return (
        <div className="purchase-request-container">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="section-header text-center mb-5">
                            <h1 className="display-5 fw-bold text-primary">Agricultural Purchase Requests</h1>
                            <p className="lead text-muted">Submit your crop purchase requests and manage existing ones</p>
                        </div>

                        <div className="request-form-card card border-0 shadow-lg mb-5">
                            <div className="card-header bg-primary text-white py-3">
                                <h2 className="h4 mb-0">
                                    <i className="bi bi-cart-plus me-2"></i>
                                    Create New Purchase Request
                                </h2>
                            </div>
                            <div className="card-body p-4">
                                <form onSubmit={handleSubmit} className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="cropType" className="form-label">
                                            Crop Type <span className="text-danger">*</span>
                                        </label>
                                        <select
                                            id="cropType"
                                            name="cropType"
                                            value={form.cropType}
                                            onChange={handleChange}
                                            required
                                            className="form-select form-select-lg"
                                        >
                                            <option value="" disabled>Select a crop</option>
                                            {cropOptions.map((crop) => (
                                                <option key={crop} value={crop}>
                                                    {crop}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="quantity" className="form-label">
                                            Quantity (kg) <span className="text-danger">*</span>
                                        </label>
                                        <div className="input-group">
                                            <input
                                                type="number"
                                                id="quantity"
                                                name="quantity"
                                                placeholder="Enter quantity"
                                                value={form.quantity}
                                                onChange={handleChange}
                                                required
                                                className="form-control form-control-lg"
                                            />
                                            <span className="input-group-text">kg</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="price" className="form-label">
                                            Price (₹) <span className="text-danger">*</span>
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text">₹</span>
                                            <input
                                                type="number"
                                                id="price"
                                                name="price"
                                                placeholder="Enter price"
                                                value={form.price}
                                                onChange={handleChange}
                                                required
                                                className="form-control form-control-lg"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="requestDate" className="form-label">
                                            Request Date <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            id="requestDate"
                                            name="requestDate"
                                            value={form.requestDate}
                                            onChange={handleChange}
                                            required
                                            className="form-control form-control-lg"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="neededDate" className="form-label">
                                            Needed By Date <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            id="neededDate"
                                            name="neededDate"
                                            value={form.neededDate}
                                            onChange={handleChange}
                                            required
                                            className="form-control form-control-lg"
                                        />
                                    </div>
                                    <div className="col-12 mt-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg w-100 py-3 submit-btn"
                                        >
                                            <i className="bi bi-send-check me-2"></i>
                                            Submit Purchase Request
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="requests-list card border-0 shadow-lg">
                            <div className="card-header bg-success text-white py-3">
                                <h2 className="h4 mb-0">
                                    <i className="bi bi-list-check me-2"></i>
                                    Your Purchase Requests
                                </h2>
                            </div>
                            <div className="card-body p-0">
                                {requests.length === 0 ? (
                                    <div className="text-center py-5">
                                        <i className="bi bi-inbox text-muted" style={{ fontSize: '3rem' }}></i>
                                        <h4 className="mt-3">No requests found</h4>
                                        <p className="text-muted">Submit your first purchase request above</p>
                                    </div>
                                ) : (
                                    <div className="table-responsive">
                                        <table className="table table-hover mb-0">
                                            <thead className="table-light">
                                            <tr>
                                                <th>Crop</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                                <th>Request Date</th>
                                                <th>Needed By</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {requests.map((req) => (
                                                <tr key={req.id}>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="crop-icon me-2">
                                                                <i className="bi bi-tree-fill text-success"></i>
                                                            </div>
                                                            <div>
                                                                <h6 className="mb-0">{req.cropType}</h6>
                                                                <small className="text-muted">by {req.farmerUsername}</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{req.quantity} kg</td>
                                                    <td>₹{req.price}</td>
                                                    <td>{req.requestDate}</td>
                                                    <td>{req.neededDate}</td>
                                                    <td>
                                                            <span className={`badge ${req.status === 'Pending' ? 'bg-warning' : req.status === 'Approved' ? 'bg-success' : 'bg-danger'}`}>
                                                                {req.status}
                                                            </span>
                                                    </td>
                                                    <td>
                                                        <button
                                                            onClick={() => handleDelete(req.id)}
                                                            className="btn btn-sm btn-outline-danger"
                                                            title="Delete Request"
                                                        >delete
                                                            <i className="bi bi-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PurchaseRequestForm;