import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useApi } from '../services/api';

const FarmerDashboard = () => {
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
        <div className="farmer-dashboard-container">
            <h2 className="dashboard-heading">Welcome, {user?.username} (Farmer)</h2>
            <p className="dashboard-intro-text">
                Explore current market requests from middlemen. This data helps you compare prices and demand trends, empowering you to **optimally price your crops** and **increase your chances of successful sales**.
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
                                <span className="card-label">Expected Price:</span> <span className="price-tag">₹{request.price}</span>
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
                    <p className="no-requests-message">No pending market requests at the moment. Check back later!</p>
                )}
            </div>

            <style jsx>{`
                .farmer-dashboard-container {
                    padding: 2.5rem;
                    background-color: #f7fbe6;
                    min-height: calc(100vh - var(--navbar-height, 4rem) - var(--footer-height, 12rem)); 
                    font-family: 'Arial', sans-serif;
                    color: #333;
                }

                .dashboard-heading {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    color: #228B22;
                    text-align: center;
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
                }

                .dashboard-intro-text {
                    font-size: 1.15rem; 
                    margin-bottom: 2.5rem;
                    color: #556B2F; 
                    line-height: 1.6;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                    text-align: center;
                }

                .requests-grid {
                    display: grid;
                    grid-template-columns: 1fr; 
                    gap: 1.5rem; 
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
                    border-radius: 12px;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08); 
                    padding: 1.8rem;
                    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
                    border: 1px solid #e0e6e6; 
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .request-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
                }

                .card-item {
                    font-size: 1rem;
                    margin-bottom: 0.75rem; 
                    color: #444;
                    display: flex;
                    align-items: center;
                }

                .card-label {
                    font-weight: 600; 
                    color: #333; 
                    margin-right: 0.5rem; 
                    min-width: 100px;
                }

                .crop-type {
                    font-weight: bold;
                    color: #A0522D; 
                    text-transform: capitalize;
                }

                .price-tag {
                    font-weight: bold;
                    color: #228B22; 
                    font-size: 1.1rem;
                }

                .date-tag {
                    background-color: #E6E6FA; 
                    padding: 0.25rem 0.6rem;
                    border-radius: 5px;
                    font-size: 0.9rem;
                    color: #483D8B;
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
                    background-color: #FFFACD; 
                    color: #DAA520;
                    border: 1px solid #DAA520;
                }


                .status-accepted {
                    background-color: #D4EDDA;
                    color: #155724;
                }
                .status-rejected {
                    background-color: #F8D7DA;
                    color: #721C24;
                }
            

                .no-requests-message {
                    grid-column: 1 / -1;
                    text-align: center;
                    font-size: 1.2rem;
                    color: #6B8E23;
                    padding: 3rem 0;
                    background-color: #EEF8F1;
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

export default FarmerDashboard;
