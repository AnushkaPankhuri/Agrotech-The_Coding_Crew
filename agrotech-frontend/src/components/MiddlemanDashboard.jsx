import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useApi } from '../services/api';

const MiddlemanDashboard = () => {
    const { user } = useAuth();
    const api = useApi();
    const [pendingRequests, setPendingRequests] = useState([]);

    useEffect(() => {
        api.get('/api/purchase-requests/pending')
            .then((response) => {
                setPendingRequests(response.data);
            })
            .catch((error) => {
                console.error('Error fetching pending requests:', error);
            });
    }, []);

    return (
        <div className="middleman-dashboard-container">
            <h2 className="dashboard-heading">Welcome, {user?.username} (Middleman)</h2>
            <p className="dashboard-intro-text">
                This is your central hub for **farmer requests**. Compare prices and demand trends across the market to ensure you offer competitive rates and secure the best deals.
            </p>

            <div className="requests-grid">
                {pendingRequests.length > 0 ? (
                    pendingRequests.map((request) => (
                        <div key={request.id} className="request-card">
                            <p className="card-item">
                                <span className="card-label">Farmer:</span> {request.farmerUsername}
                            </p>
                            <p className="card-item">
                                <span className="card-label">Crop:</span> <span className="crop-type">{request.cropType}</span>
                            </p>
                            <p className="card-item">
                                <span className="card-label">Quantity:</span> {request.quantity} kg
                            </p>
                            <p className="card-item">
                                <span className="card-label">Asking Price:</span> <span className="price-tag">₹{request.price}</span>
                            </p>
                            <p className="card-item">
                                <span className="card-label">Needed By:</span> <span className="date-tag">{request.neededDate}</span>
                            </p>
                            <p className="card-item">
                                <span className="card-label">Status:</span> <span className={`status-tag status-${request.status.toLowerCase()}`}>{request.status}</span>
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="no-requests-message">No new farmer requests available. Check back soon!</p>
                )}
            </div>
            <style jsx>{`
                .middleman-dashboard-container {
                    padding: 2.5rem;
                    background-color: #f0f8f0;
                    min-height: calc(100vh - var(--navbar-height, 4rem) - var(--footer-height, 12rem));
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    color: #34495e;
                }

                .dashboard-heading {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    color: #2e8b57;
                    text-align: center;
                    text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
                }

                .dashboard-intro-text {
                    font-size: 1.15rem;
                    margin-bottom: 2.5rem;
                    color: #5f7a61;
                    line-height: 1.6;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                    text-align: center;
                    border-left: 4px solid #66bb6a;
                    padding-left: 1rem;
                }

                .requests-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.8rem;
                    max-width: 1200px;
                    margin-left: auto;
                    margin-right: auto;
                }

                @media (min-width: 768px) {
                    .requests-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (min-width: 1024px) {
                    .requests-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                .request-card {
                    background-color: #ffffff;
                    border-radius: 10px;
                    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.07);
                    padding: 1.6rem;
                    transition: all 0.2s ease-in-out;
                    border: 1px solid #e9ecef;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .request-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
                    border-color: #66bb6a;
                }

                .card-item {
                    font-size: 1rem;
                    margin-bottom: 0.8rem;
                    color: #495057;
                    display: flex;
                    align-items: center;
                }

                .card-label {
                    font-weight: 600;
                    color: #212529;
                    margin-right: 0.6rem;
                    min-width: 110px;
                }

                .crop-type {
                    font-weight: bold;
                    color: #8b4513;
                    text-transform: capitalize;
                }

                .price-tag {
                    font-weight: bold;
                    color: #4CAF50;
                    font-size: 1.15rem;
                    background-color: #e8f5e9;
                    padding: 0.2rem 0.6rem;
                    border-radius: 5px;
                }

                .date-tag {
                    background-color: #f0f0f0;
                    padding: 0.25rem 0.6rem;
                    border-radius: 5px;
                    font-size: 0.9rem;
                    color: #6c757d;
                    font-weight: 500;
                }

                .status-tag {
                    padding: 0.3rem 0.8rem;
                    border-radius: 20px;
                    font-weight: bold;
                    text-transform: uppercase;
                    font-size: 0.8rem;
                    letter-spacing: 0.5px;
                }

                .status-pending {
                    background-color: #fff3cd;
                    color: #856404;
                    border: 1px solid #ffeeba;
                }

                .no-requests-message {
                    grid-column: 1 / -1;
                    text-align: center;
                    font-size: 1.2rem;
                    color: #607d8b;
                    padding: 3rem 0;
                    background-color: #eceff1;
                    border-radius: 10px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                }
                :root {
                    --navbar-height: 4rem;
                    --footer-height: 12rem;
                }
            `}</style>
        </div>
    );
};

export default MiddlemanDashboard;
