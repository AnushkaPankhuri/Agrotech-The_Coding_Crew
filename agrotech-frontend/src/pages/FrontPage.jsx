import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FrontPage.css'; 

function FrontPage() {
    const navigate = useNavigate();

    return (
        <div className="front-container">
            <div className="glass-card">
                <h1 className="front-title">🌿 Welcome to AgroTech</h1>
                <p className="front-subtitle">Empowering farmers & middlemen through technology</p>
                <div className="front-buttons">
                    <button onClick={() => navigate('/login')}>Login</button>
                    <button onClick={() => navigate('/register/farmer')}>Sign Up as Farmer</button>
                    <button onClick={() => navigate('/register/middleman')}>Sign Up as Middleman</button>
                </div>
            </div>
        </div>
    );
}

export default FrontPage;
