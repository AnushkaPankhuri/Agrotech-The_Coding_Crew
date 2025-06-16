import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import './MiddlemanRegisterForm.css';
function MiddlemanRegisterForm() {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: '',
        bio: '',
        companyName: '',
        businessType: '',
        preferredCrops: '',
        marketRegions: '',
        businessLicenseNumber: '',
        role: 'MIDDLEMAN',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('api/auth/register/middleman', form);
            alert('Registered successfully!');
            navigate('/login');
        } catch (err) {
            console.error(err);
            alert('Registration failed');
        }
    };

    return (
        <div className="register-container">
            <div className="register-header">
                <span className="logo-icon">🌿</span>
                <h1 className="logo-text">AgroTech</h1>
            </div>
            <form className="register-form" onSubmit={handleSubmit}>
                <h2 className="register-title">Middleman Registration</h2>
                <p className="register-subtitle">Expand your agri-business network</p>

                <div className="form-group"><label>Username</label><input name="username" onChange={handleChange} required /></div>
                <div className="form-group"><label>Email</label><input name="email" type="email" onChange={handleChange} required /></div>
                <div className="form-group"><label>Password</label><input name="password" type="password" onChange={handleChange} required /></div>
                <div className="form-group"><label>Phone Number</label><input name="phoneNumber" onChange={handleChange} required /></div>
                <div className="form-group"><label>Address</label><input name="address" onChange={handleChange} required /></div>
                <div className="form-group"><label>Bio</label><input name="bio" onChange={handleChange} /></div>
                <div className="form-group"><label>Company Name</label><input name="companyName" onChange={handleChange} required /></div>
                <div className="form-group"><label>Business Type</label><input name="businessType" onChange={handleChange} required /></div>
                <div className="form-group"><label>Preferred Crops</label><input name="preferredCrops" onChange={handleChange} /></div>
                <div className="form-group"><label>Market Regions</label><input name="marketRegions" onChange={handleChange} /></div>
                <div className="form-group"><label>Business License Number</label><input name="businessLicenseNumber" onChange={handleChange} required /></div>

                <button type="submit" className="register-btn">Register</button>
            </form>
        </div>
    );
}

export default MiddlemanRegisterForm;
