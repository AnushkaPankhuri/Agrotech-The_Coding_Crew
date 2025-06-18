import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    if (!user) return null;

    const styles = {
        navbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#ffffff',
            padding: '0.75rem 2rem',
            borderBottom: '1px solid #e0e0e0',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
        },
        logo: {
            display: 'flex',
            alignItems: 'center',
            fontSize: '1.6rem',
            fontWeight: 'bold',
            color: '#2e7d32',
            textDecoration: 'none',
        },
        logoIcon: {
            backgroundColor: '#4CAF50',
            color: '#fff',
            padding: '0.5rem',
            borderRadius: '8px',
            marginRight: '0.5rem',
            fontSize: '1rem',
        },
        navLinks: {
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
        },
        link: {
            color: '#424242',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '0.95rem',
            position: 'relative',
        },
        linkHover: {
            transition: 'color 0.3s',
        },
        button: {
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            padding: '0.5rem 1.2rem',
            borderRadius: '20px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        avatar: {
            backgroundColor: '#81C784',
            color: 'white',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            marginLeft: '1rem',
        }
    };

    const purchaseRoute = user.role === 'MIDDLEMAN' ? '/purchase/middleman' : '/purchase';
    const transactionRoute = user.role === 'MIDDLEMAN' ? '/transactions/middleman' : '/transactions';
    let dashboardRoute = '/';
    if (user.role === 'MIDDLEMAN') dashboardRoute = '/middleman';
    if (user.role === 'FARMER') dashboardRoute = '/farmer';


    const userInitials = user.username
        .split(' ')
        .map(word => word[0].toUpperCase())
        .join('');

    return (
        <nav style={styles.navbar}>
            <Link to="/home" style={styles.logo}>
                <span style={styles.logoIcon}>🌱</span>
                AgroTech
            </Link>
            <div style={styles.navLinks}>

                <Link to="/market-data" style={styles.link}>Market Data</Link>
                <Link to="/demographics" style={styles.link}>Demographics</Link>
                <Link to="/about" style={styles.link}>About Us</Link>
                <Link to="/contact" style={styles.link}>Contact</Link>
                <Link to={purchaseRoute} style={styles.link}>Purchase Requests</Link>
                <Link to={transactionRoute} style={styles.link}>Transactions</Link>
                <Link to={dashboardRoute} style={styles.link}>Dashboard</Link>
                <Link to="/profile" style={styles.link}>Profile</Link>
                <button onClick={handleLogout} style={styles.button}>Sign Out</button>
            </div>
        </nav>
    );
};

export default Navbar;
