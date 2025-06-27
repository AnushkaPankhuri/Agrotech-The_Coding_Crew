import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button'; 

function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: '1rem', 
      paddingRight: '1rem', 
      paddingTop: '3rem', 
      paddingBottom: '3rem' 
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{
          fontSize: '6rem',
          fontWeight: 'bold',
          color: '#4CAF50' 
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: '1.875rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginTop: '1rem', 
          marginBottom: '1.5rem' 
        }}>
          Page Not Found
        </h2>
        <p style={{
          fontSize: '1.125rem', 
          color: '#4b5563', 
          marginBottom: '2rem',
          maxWidth: '28rem', 
          marginLeft: 'auto', 
          marginRight: 'auto'
        }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1rem' 
        }}>
          <Link to="/home" className="footer-link-item">
                  Go to Home
                </Link>
          <Link to="/contact" className="footer-link-item">
                  Contact Us
                </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;