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
                    padding: 2.5rem; /* Increased padding for more breathing room */
                    background-color: #f7fbe6; /* A very light, natural green/beige background */
                    min-height: calc(100vh - var(--navbar-height, 4rem) - var(--footer-height, 12rem)); /* Ensures content pushes footer down */
                    font-family: 'Arial', sans-serif; /* A clear, readable font */
                    color: #333;
                }

                .dashboard-heading {
                    font-size: 2.5rem; /* Larger heading */
                    font-weight: 700;
                    margin-bottom: 1rem;
                    color: #228B22; /* Forest Green for headings */
                    text-align: center;
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
                }

                .dashboard-intro-text {
                    font-size: 1.15rem; /* Slightly larger text */
                    margin-bottom: 2.5rem;
                    color: #556B2F; /* Olive Green for introductory text */
                    line-height: 1.6;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                    text-align: center;
                }

                .requests-grid {
                    display: grid;
                    grid-template-columns: 1fr; /* Default to one column */
                    gap: 1.5rem; /* Slightly less gap for a denser look */
                    max-width: 1200px;
                    margin-left: auto;
                    margin-right: auto;
                }

                @media (min-width: 768px) { /* Medium screens */
                    .requests-grid {
                        grid-template-columns: repeat(2, 1fr); /* Two columns */
                    }
                }

                @media (min-width: 1024px) { /* Large screens */
                    .requests-grid {
                        grid-template-columns: repeat(3, 1fr); /* Three columns */
                    }
                }

                .request-card {
                    background-color: #ffffff; /* Crisp white for cards */
                    border-radius: 12px; /* More rounded corners */
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08); /* More pronounced, softer shadow */
                    padding: 1.8rem; /* Increased padding inside cards */
                    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
                    border: 1px solid #e0e6e6; /* Light border */
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between; /* Distribute items evenly */
                }

                .request-card:hover {
                    transform: translateY(-5px); /* Lift effect on hover */
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15); /* Stronger shadow on hover */
                }

                .card-item {
                    font-size: 1rem;
                    margin-bottom: 0.75rem; /* Spacing between lines */
                    color: #444;
                    display: flex;
                    align-items: center; /* Align items for better readability */
                }

                .card-label {
                    font-weight: 600; /* Bolder labels */
                    color: #333; /* Darker color for labels */
                    margin-right: 0.5rem; /* Space between label and value */
                    min-width: 100px; /* Ensure labels align somewhat */
                }

                .crop-type {
                    font-weight: bold;
                    color: #A0522D; /* Sienna for crop type, earthy */
                    text-transform: capitalize; /* Capitalize the first letter */
                }

                .price-tag {
                    font-weight: bold;
                    color: #228B22; /* Forest Green for prices */
                    font-size: 1.1rem;
                }

                .date-tag {
                    background-color: #E6E6FA; /* Light Lavender for dates */
                    padding: 0.25rem 0.6rem;
                    border-radius: 5px;
                    font-size: 0.9rem;
                    color: #483D8B; /* Dark Slate Blue */
                    font-weight: 500;
                }

                .status-tag {
                    padding: 0.3rem 0.8rem;
                    border-radius: 20px; /* Pill shape for status */
                    font-weight: bold;
                    text-transform: uppercase;
                    font-size: 0.8rem;
                    letter-spacing: 0.5px;
                }

                .status-pending {
                    background-color: #FFFACD; /* Lemon Chiffon for pending */
                    color: #DAA520; /* Goldenrod */
                    border: 1px solid #DAA520;
                }

                /* Add more status styles if needed, e.g., accepted, rejected */
                /*
                .status-accepted {
                    background-color: #D4EDDA;
                    color: #155724;
                }
                .status-rejected {
                    background-color: #F8D7DA;
                    color: #721C24;
                }
                */

                .no-requests-message {
                    grid-column: 1 / -1; /* Span across all columns */
                    text-align: center;
                    font-size: 1.2rem;
                    color: #6B8E23; /* Olive Drab */
                    padding: 3rem 0;
                    background-color: #EEF8F1;
                    border-radius: 10px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                }

                /* Ensure the content area pushes the footer down */
                /* You might need to adjust --navbar-height and --footer-height
                   variables based on the actual height of your Navbar and Footer.
                   These are good to define globally in your root CSS if possible.
                */
                :root {
                    --navbar-height: 4rem; /* Example: adjust to your Navbar's actual height */
                    --footer-height: 12rem; /* Example: adjust to your Footer's actual height */
                }
            `}</style>
        </div>
    );
};

export default FarmerDashboard;