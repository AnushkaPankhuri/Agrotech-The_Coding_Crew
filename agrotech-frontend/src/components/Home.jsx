import React from 'react';
import './Home.css'; 
import FarmerImage from "../images/farmer.jpg"

function Home() {
  return (
    <div className="main">

      <section className="hero">
        <div className="badge">🌱 Connecting Agriculture</div>
        <h1>
          Bridge the Gap Between{' '}
          <span className="highlight">Farmers & Middlemen</span>
        </h1>
        <p className="subtitle">
          AgroTech revolutionizes agricultural trading with secure transactions, real-time market data, and direct
          connections between producers and buyers.
        </p>
      </section>

      <section className="features">
        <h2>Why Choose AgroTech?</h2>
        <p>Our platform provides everything you need for successful agricultural trading</p>
        <div className="features-grid">
          <div className="card">
            <div className="icon green">🌿</div>
            <h3>Direct Trading</h3>
            <p>Connect directly with farmers and middlemen without intermediaries</p>
          </div>
          <div className="card">
            <div className="icon blue">📈</div>
            <h3>Real-time Prices</h3>
            <p>Access live market data and pricing information</p>
          </div>
          <div className="card">
            <div className="icon purple">🛡️</div>
            <h3>Secure Platform</h3>
            <p>Bank-level security for all transactions and data</p>
          </div>
          <div className="card">
            <div className="icon orange">👥</div>
            <h3>Community</h3>
            <p>Join thousands of farmers and middlemen nationwide</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How AgroTech Works</h2>
        <p>Simple steps to start trading agricultural products</p>
        <div className="steps-grid">
          <div className="step">
            <div className="step-icon">1</div>
            <h3>Sign Up</h3>
            <p>Create your account as a farmer or middleman</p>
          </div>
          <div className="step">
            <div className="step-icon">2</div>
            <h3>List Products</h3>
            <p>Farmers list their produce, middlemen browse available products</p>
          </div>
          <div className="step">
            <div className="step-icon">3</div>
            <h3>Trade Securely</h3>
            <p>Negotiate prices and complete transactions safely</p>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="benefits-grid">
          <div>
            <h2>Empowering Agricultural Communities</h2>
            <div className="benefit">
              <span className="check">✔</span>
              <div>
                <h4>Fair Pricing</h4>
                <p>Transparent pricing based on real market conditions</p>
              </div>
            </div>
            <div className="benefit">
              <span className="check">✔</span>
              <div>
                <h4>Reduced Waste</h4>
                <p>Faster connections reduce post-harvest losses</p>
              </div>
            </div>
            <div className="benefit">
              <span className="check">✔</span>
              <div>
                <h4>Market Access</h4>
                <p>Connect with buyers across different regions</p>
              </div>
            </div>
          </div>
          <div className="benefits-image">
            <img src={FarmerImage} alt="Farmers using AgroTech platform" />
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Transform Your Agricultural Business?</h2>
        <p>Join thousands of farmers and middlemen already using AgroTech</p>
      </section>
    </div>
  );
}

export default Home;
