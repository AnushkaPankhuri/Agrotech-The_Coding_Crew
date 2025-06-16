import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import './FarmerRegisterForm.css'; 

function FarmerRegisterForm() {
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
        role: 'FARMER',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('api/auth/register/farmer', form);
            alert('Registered successfully!');
            navigate('/login');
        } catch (err) {
            console.error(err);
            alert('Registration failed');
        }
    };

    return (
        <div className="form-wrapper">
            <div className="logo-header">
                <span className="logo-icon">🌿</span>
                <h1 className="logo-text">AgroTech</h1>
            </div>
            <h2 className="form-title">Farmer Registration</h2>
            <p className="form-subtitle">Join the agricultural revolution today</p>
            <form className="register-form" onSubmit={handleSubmit}>
                {[
                    ['username', 'Username'],
                    ['email', 'Email'],
                    ['password', 'Password', 'password'],
                    ['phoneNumber', 'Phone Number'],
                    ['address', 'Address'],
                    ['bio', 'Bio'],
                    ['companyName', 'Company Name'],
                    ['businessType', 'Business Type'],
                    ['preferredCrops', 'Preferred Crops'],
                    ['marketRegions', 'Market Regions'],
                    ['businessLicenseNumber', 'Business License Number'],
                ].map(([name, label, type = 'text']) => (
                    <div className="form-group" key={name}>
                        <label htmlFor={name}>{label}</label>
                        <input
                            type={type}
                            name={name}
                            id={name}
                            value={form[name]}
                            onChange={handleChange}
                            required
                        />
                    </div>
                ))}
                <button type="submit" className="submit-btn">Register</button>
            </form>
        </div>
    );
}

export default FarmerRegisterForm;
