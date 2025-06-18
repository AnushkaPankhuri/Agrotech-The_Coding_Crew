import React, { useEffect, useState } from "react";
import { useApi } from '../services/api';
import UserProfileModal from './UserProfileModal';
import './FarmerTransactionPage.css';

const FarmerTransactionPage = () => {
    const api = useApi();
    const [transactions, setTransactions] = useState([]);
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchTransactions = () => {
        setIsRefreshing(true);
        api.get("/api/transactions")
            .then((response) => {
                setTransactions(response.data);
                setIsLoading(false);
                setIsRefreshing(false);
            })
            .catch((error) => {
                console.error("Error fetching transactions:", error);
                setIsLoading(false);
                setIsRefreshing(false);
            });
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    const handleViewProfile = (middlemanUsername) => {
        api.get(`/api/transactions/profile/${middlemanUsername}`)
            .then((response) => {
                setSelectedProfile(response.data);
                setShowProfileModal(true);
            })
            .catch((error) => {
                console.error("Error fetching profile:", error);
            });
    };

    const getStatusBadge = (status) => {
        switch(status.toLowerCase()) {
            case 'completed':
                return 'success';
            case 'pending':
                return 'warning';
            case 'failed':
                return 'danger';
            default:
                return 'primary';
        }
    };

    const getCropImage = (cropType) => {
        const cropImages = {
            'wheat': '🌾',
            'rice': '🌾',
            'corn': '🌽',
            'vegetables': '🥬',
            'fruits': '🍎',
            'coffee': '☕',
            'tea': '🍃',
            'cotton': '🧵',
            'sugarcane': '🎋'
        };
        return cropImages[cropType.toLowerCase()] || '🌱';
    };

    return (
        <div className="farmer-transaction-app">
            <div className="grain-decor grain-1"></div>
            <div className="grain-decor grain-2"></div>
            <div className="grain-decor grain-3"></div>

            <div className="farmer-header-container">
                <div className="page-header text-center">
                    <h1 className="display-4 font-weight-bold text-white">
                        <span className="header-icon">👨‍🌾</span> Farmer Transactions
                    </h1>
                    <p className="lead text-light">Your agricultural sales records</p>
                    <div className="header-decoration">
                        <div className="decoration-line"></div>
                        <div className="decoration-icon"><i className="fas fa-tractor"></i></div>
                        <div className="decoration-line"></div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5 main-content">
                <div className="text-center mb-4">
                    <button
                        onClick={fetchTransactions}
                        className="refresh-button"
                        disabled={isRefreshing}
                    >
                        <i className={`fas fa-sync-alt ${isRefreshing ? 'fa-spin' : ''}`}></i>
                        {isRefreshing ? ' Refreshing...' : ' Refresh Data'}
                    </button>
                </div>

                {isLoading ? (
                    <div className="text-center py-5 loading-state">
                        <div className="spinner-grow text-success" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <h4 className="mt-4 text-muted">Harvesting your transaction data...</h4>
                        <div className="loading-bar">
                            <div className="loading-progress"></div>
                        </div>
                    </div>
                ) : transactions.length === 0 ? (
                    <div className="text-center py-5 empty-state">
                        <div className="empty-illustration">
                            <div className="basket">
                                <div className="produce"></div>
                            </div>
                        </div>
                        <h3 className="mt-4">No Transactions Found</h3>
                        <p className="text-muted">Your sales records will appear here after transactions</p>
                        <button
                            onClick={fetchTransactions}
                            className="refresh-button mt-3"
                        >
                            <i className="fas fa-sync-alt"></i> Try Refreshing
                        </button>
                    </div>
                ) : (
                    <div className="row">
                        {transactions.map((tx, index) => (
                            <div key={tx.id} className="col-xl-3 col-lg-4 col-md-6 mb-4">
                                <div
                                    className={`card transaction-card h-100 delay-${index % 4}`}
                                    data-status={tx.status.toLowerCase()}
                                >
                                    <div className="card-crop-icon">
                                        {getCropImage(tx.cropType)}
                                    </div>
                                    <div className="card-body">
                                        <div className="transaction-header">
                                            <h5 className="card-title">{tx.cropType}</h5>
                                            <span className={`status-badge badge-${getStatusBadge(tx.status)}`}>
                                                {tx.status}
                                            </span>
                                        </div>

                                        <div className="transaction-detail farmer-detail">
                                            <div className="detail-icon">
                                                <i className="fas fa-user"></i>
                                            </div>
                                            <div className="detail-content">
                                                <small>You</small>
                                                <p>{tx.farmerUsername}</p>
                                            </div>
                                        </div>

                                        <div className="transaction-detail middleman-detail">
                                            <div className="detail-icon">
                                                <i className="fas fa-user-tie"></i>
                                            </div>
                                            <div className="detail-content">
                                                <small>Middleman</small>
                                                <p>{tx.middlemanUsername}</p>
                                            </div>
                                        </div>

                                        <div className="transaction-metrics">
                                            <div className="metric-item">
                                                <div className="metric-icon">
                                                    <i className="fas fa-weight-hanging"></i>
                                                </div>
                                                <div>
                                                    <small>Quantity Sold</small>
                                                    <h6>{tx.quantity} kg</h6>
                                                </div>
                                            </div>
                                            <div className="metric-item">
                                                <div className="metric-icon">
                                                    <i className="fas fa-rupee-sign"></i>
                                                </div>
                                                <div>
                                                    <small>Amount Earned</small>
                                                    <h6>₹{tx.price}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button
                                            onClick={() => handleViewProfile(tx.middlemanUsername)}
                                            className="btn profile-btn"
                                        >
                                            <i className="fas fa-user-tie mr-2"></i>View Middleman
                                        </button>
                                        <div className="transaction-date">
                                            <i className="far fa-calendar-alt mr-2"></i>
                                            {new Date().toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {showProfileModal && selectedProfile && (
                <UserProfileModal
                    user={selectedProfile}
                    onClose={() => setShowProfileModal(false)}
                />
            )}
        </div>
    );
};

export default FarmerTransactionPage;
