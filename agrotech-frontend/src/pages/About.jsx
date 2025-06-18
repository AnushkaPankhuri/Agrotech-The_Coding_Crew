import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ShieldCheck, TrendingUp, Globe, Check } from 'lucide-react';
import Button from '../components/ui/Button';
import './About.css'; // custom CSS

import Avinash from '../images/teamMembers/AVINASH.jpeg';
import Anushka from '../images/teamMembers/ANUSHKA.jpeg';
import Bhumika from '../images/teamMembers/BHUMIKA.jpeg';
import Mehul from '../images/teamMembers/MEHUL.jpeg';
import Shourya from '../images/teamMembers/SHOURYA.jpeg';
import Shikhar from '../images/teamMembers/SHIKHAR.jpeg';
import Shreyansh from '../images/teamMembers/SHREYANSH.jpeg';
import Shreya from '../images/teamMembers/SHREYA.jpeg';
import Rohit from '../images/teamMembers/ROHIT.jpeg';
import Kuber from '../images/teamMembers/KUBER.jpeg';

function About() {
  const teamMembers = [
    { name: 'Anushka Pankhuri', role: 'Team Lead', bio: '', image: Anushka },
    { name: 'Shreya Das', role: '', bio: '', image: Shreya },
    { name: 'Bhumika Mistri', role: '', bio: '', image: Bhumika },
    { name: 'Shourya Bhale', role: '', bio: '', image: Shourya },
    { name: 'Mehul Dewangan', role: '', bio: '', image: Mehul },
    { name: 'Shikhar Agarwal', role: '', bio: '', image: Shikhar },
    { name: 'Shreyansh Jain', role: '', bio: '', image: Shreyansh },
    { name: 'Avinash Singh', role: '', bio: '', image: Avinash },
    { name: 'Rohit Kumar Singh', role: '', bio: '', image: Rohit },
    { name: 'Kuber Khandare', role: '', bio: '', image: Kuber },
  ];

  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="hero-overlay" />
        <img
          src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg"
          alt="Farm field"
          className="hero-bg"
        />
        <div className="hero-content">
          <h1>About AgroTech</h1>
          <p>
            We're transforming agricultural trade with technology that empowers farmers and streamlines the supply chain.
          </p>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              At AgroTech, we believe in the power of technology to transform agriculture. Our mission is to create a more
              efficient, transparent, and equitable agricultural marketplace by connecting farmers directly with middlemen.
            </p>
            <p>
              We're dedicated to eliminating inefficiencies in the agricultural supply chain, ensuring farmers receive
              fair prices for their produce, and helping middlemen source quality crops efficiently.
            </p>
            <ul className="mission-points">
              <li>
                <Check size={20} /> <strong>Fair Pricing:</strong> Ensuring market-appropriate compensation for produce.
              </li>
              <li>
                <Check size={20} /> <strong>Transparency:</strong> Creating visibility throughout the supply chain.
              </li>
              <li>
                <Check size={20} /> <strong>Efficiency:</strong> Reducing waste and streamlining trade.
              </li>
            </ul>
          </div>
          <div className="mission-image">
            <img src="https://images.pexels.com/photos/1143673/pexels-photo-1143673.jpeg" alt="Farmer" />
            <div className="stats-box">
              <Users size={24} />
              <div>
                <p className="stat-label">Farmers Connected</p>
                <p className="stat-value">10,000+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="section-header">
          <h2>Our Core Values</h2>
          <p>
            These principles guide everything we do at AgroTech, from product development to customer support.
          </p>
        </div>
        <div className="values-grid">
          {[
            {
              icon: <Users size={28} />,
              title: 'Farmer First',
              desc: "We design all our solutions with farmers' needs at the center.",
            },
            {
              icon: <ShieldCheck size={28} />,
              title: 'Trust & Transparency',
              desc: 'Built on honest dealings, verified info, and clear communication.',
            },
            {
              icon: <TrendingUp size={28} />,
              title: 'Continuous Improvement',
              desc: 'We constantly seek feedback and innovate.',
            },
            {
              icon: <Globe size={28} />,
              title: 'Environmental Stewardship',
              desc: 'Promoting sustainable farming practices.',
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 6.75a3 3 0 11-6 0 3 3 0 016 0zM3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              ),
              title: 'Innovation',
              desc: 'Using cutting-edge tech for agricultural trading challenges.',
            },
          ].map((value, idx) => (
            <div key={idx} className="value-card">
              <div className="icon-box">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <div className="section-header">
          <h2>Meet Our Team</h2>
          <p>
            Our diverse team combines expertise in agriculture, technology, and business to create innovative solutions.
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Join the Agricultural Revolution</h2>
        <p>
          Whether you're a farmer or a middleman, AgroTech helps you succeed.
        </p>
      </section>
    </div>
  );
}

export default About;
