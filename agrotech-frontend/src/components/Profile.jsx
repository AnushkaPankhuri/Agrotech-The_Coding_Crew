import React, { useEffect, useState } from 'react';
import { useApi } from '../services/api';
import { useAuth } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';

function Profile() {
    const api = useApi();
    const { user } = useAuth();

    const [profile, setProfile] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [file, setFile] = useState(null);

    useEffect(() => {
        if (user) {
            api.get('/api/user/profile')
                .then((res) => setProfile(res.data))
                .catch(() => alert('Failed to load profile'));
        }
    }, [user]);

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSave = async () => {
        const formData = new FormData();
        formData.append('phoneNumber', profile.phoneNumber || '');
        formData.append('address', profile.address || '');
        formData.append('bio', profile.bio || '');
        formData.append('companyName', profile.companyName || '');
        formData.append('businessType', profile.businessType || '');
        formData.append('marketRegions', profile.marketRegions || '');
        formData.append('businessLicenseNumber', profile.businessLicenseNumber || '');
        if (file) formData.append('profilePicture', file);

        try {
            await api.put('/api/user/profile', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('Profile updated!');
            setEditMode(false);
            const updated = await api.get('/api/user/profile');
            setProfile(updated.data);
        } catch {
            alert('Update failed.');
        }
    };
    const personalFields = ['username', 'email', 'phoneNumber', 'address', 'bio'];
    const businessFields = ['companyName', 'businessType', 'marketRegions', 'businessLicenseNumber'];

    return (
        <div className="container mt-5">
            <div className="profile-card">
                <div className="profile-header">
                    <h2>My Profile</h2>
                </div>
                <div className="profile-image-container">
                    <img
                        src={
                            profile.profilePicture
                                ? `data:image/jpeg;base64,${profile.profilePicture}`
                                : 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
                        }
                        alt="Profile"
                        className="profile-image"
                    />
                </div>

                {editMode && (
                    <div className="file-input-container text-center mt-3">
                        <label className="file-input-label">
                            Change Photo
                            <input type="file" onChange={handleFileChange} />
                        </label>
                    </div>
                )}

                <div className="profile-content">
                    <form>
                        <div className="form-section">
                            <h5 className="section-title">🌾 Personal Information</h5>
                            {personalFields.map((field) => (
                                <div className="mb-3" key={field}>
                                    <label className="form-label">
                                        {field.replace(/([A-Z])/g, ' $1')}
                                    </label>
                                    <input
                                        type="text"
                                        name={field}
                                        value={profile[field] || ''}
                                        disabled={!editMode || field === 'username' || field === 'email'}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="form-section business-fields">
                            <h5 className="section-title">🏢 Business Details</h5>
                            {businessFields.map((field) => (
                                <div className="mb-3" key={field}>
                                    <label className="form-label">
                                        {field.replace(/([A-Z])/g, ' $1')}
                                    </label>
                                    <input
                                        type="text"
                                        name={field}
                                        value={profile[field] || ''}
                                        disabled={!editMode}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                            ))}
                        </div>
                    </form>

                    <div className="button-container">
                        <button
                            className="btn btn-outline-secondary"
                            onClick={() => setEditMode(!editMode)}
                        >
                            {editMode ? 'Cancel' : 'Edit'}
                        </button>
                        {editMode && (
                            <button className="btn btn-success" onClick={handleSave}>
                                Save Changes
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;


