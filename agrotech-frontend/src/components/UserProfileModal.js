import React, { useEffect } from 'react';
import './UserProfileModal.css';

function UserProfileModal({ user, onClose }) {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div
            className="user-profile-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                className="modal-overlay"
                onClick={onClose}
                tabIndex="0"
                aria-label="Close modal"
            ></div>

            <div className="modal-container">
                <div className="modal-header">
                    <h3 className="modal-title" id="modal-title">Farmer Profile</h3>
                    <button
                        className="close-btn"
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        <i className="fas fa-times" aria-hidden="true"></i>
                    </button>
                </div>

                <div className="modal-body">
                    <div className="profile-header text-center">
                        <div className="profile-pic-container">
                            <img
                                // src={user.profilePicUrl || '/default-profile.png'}
                                src='data:image/jpeg;base64,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'
                                alt={`Profile of ${user.username}`}
                                className="profile-pic"
                                width="120"
                                height="120"
                                loading="lazy"
                            />
                            {/* <div className="agriculture-badge" aria-hidden="true">
                                <i className="fas fa-leaf"></i>
                            </div> */}
                        </div>
                        <h3 className="username">{user.username}</h3>
                        <p className="user-title">{user.businessType} </p>
                    </div>

                    <div className="profile-details">
                        <section className="detail-section contact-info" aria-labelledby="contact-info-title">
                            <h4 className="section-title" id="contact-info-title">
                                <i className="fas fa-id-card" aria-hidden="true"></i> Contact Information
                            </h4>
                            <div className="detail-item">
                                <i className="fas fa-envelope" aria-hidden="true"></i>
                                <a href={`mailto:${user.email}`} className="detail-link">{user.email}</a>
                            </div>
                            <div className="detail-item">
                                <i className="fas fa-phone" aria-hidden="true"></i>
                                <a href={`tel:${user.phoneNumber}`} className="detail-link">{user.phoneNumber}</a>
                            </div>
                            <div className="detail-item">
                                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                                <span>{user.address}</span>
                            </div>
                        </section>

                        <section className="detail-section" aria-labelledby="about-title">
                            <h4 className="section-title" id="about-title">
                                <i className="fas fa-info-circle" aria-hidden="true"></i> About
                            </h4>
                            <p className="user-bio">{user.bio || "Passionate about sustainable agriculture and farming."}</p>
                        </section>

                        <section className="detail-section business-info" aria-labelledby="business-info-title">
                            <h4 className="section-title" id="business-info-title">
                                <i className="fas fa-tractor" aria-hidden="true"></i> Business Details
                            </h4>
                            <div className="detail-item">
                                <i className="fas fa-building" aria-hidden="true"></i>
                                <span>{user.companyName}</span>
                            </div>
                            <div className="detail-item">
                                <i className="fas fa-industry" aria-hidden="true"></i>
                                <span>{user.businessType}</span>
                            </div>
                            <div className="detail-item">
                                <i className="fas fa-globe-americas" aria-hidden="true"></i>
                                <span>{user.marketRegions}</span>
                            </div>
                            <div className="detail-item">
                                <i className="fas fa-file-alt" aria-hidden="true"></i>
                                <span>License: {user.businessLicenseNumber}</span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfileModal;