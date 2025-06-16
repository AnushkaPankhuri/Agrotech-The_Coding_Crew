import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginForm.css';

function LoginForm() {
    const [form, setForm] = useState({
        username: '',
        password: '',
        role: 'FARMER',
    });

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(form.username, form.password, form.role);
            alert(`Login successful! Welcome, ${form.username} (${form.role})`);

            if (form.role === 'FARMER') navigate('/farmer');
            else if (form.role === 'MIDDLEMAN') navigate('/middleman');
            else navigate('/');
        } catch (err) {
            alert('Login failed. Check your credentials and role.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-header">
                <span className="logo-icon">🌿</span>
                <h1 className="logo-text">AgroTech</h1>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="login-title">Login</h2>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        name="username"
                        id="username"
                        placeholder="Enter username"
                        value={form.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="role">Select Role</label>
                    <select
                        name="role"
                        id="role"
                        value={form.role}
                        onChange={handleChange}
                        required
                    >
                        <option value="FARMER">Farmer</option>
                        <option value="MIDDLEMAN">Middleman</option>
                    </select>
                </div>

                <button type="submit" className="login-btn">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
