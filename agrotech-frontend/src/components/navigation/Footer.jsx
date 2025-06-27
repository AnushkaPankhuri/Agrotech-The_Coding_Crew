import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

          <div className="footer-section">
            <h4 className="footer-heading">AgroTech</h4>
            <p className="footer-text">
              Connecting farmers and middlemen to create a more efficient agricultural marketplace.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/home" className="footer-link-item">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link-item">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/demographics" className="footer-link-item">
                  Demographics
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link-item">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          

          <div className="footer-section">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li>
                <Link to="/privacy" className="footer-link-item">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="footer-link-item">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/faq" className="footer-link-item">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          

          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="contact-info">
              <li className="contact-item">
                <MapPin size={20} className="contact-icon" />
                <span className="contact-text">
                  IIIT Lucknow<br />
                </span>
              </li>
              <li className="contact-item">
                <Phone size={20} className="contact-icon" />
                <span className="contact-text">6969696969</span>
              </li>
              <li className="contact-item">
                <Mail size={20} className="contact-icon" />
                <span className="contact-text">info@agrotech.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} AgroTech. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #1a202c; 
          color: #fff; 
        }

        .footer-container {
          max-width: 1200px; 
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
          padding-top: 3rem; 
          padding-bottom: 3rem; 
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr; 
          gap: 2rem; 
        }

        @media (min-width: 768px) { 
          .footer-grid {
            grid-template-columns: repeat(2, 1fr); 
          }
        }

        @media (min-width: 1024px) { 
          .footer-grid {
            grid-template-columns: repeat(4, 1fr); 
          }
        }

        .footer-section h4 {
          font-size: 1.25rem; 
          font-weight: 700;
          margin-bottom: 1rem; 
        }

        .footer-text {
          color: #d1d5db;
          margin-bottom: 1rem;
        }

        .social-links {
          display: flex;
          space-x: 1rem; 
        }

        .social-links > *:not(:last-child) {
            margin-right: 1rem;
        }

        .social-icon {
          color: #d1d5db; 
          transition-property: color;
          transition-duration: 150ms; 
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); 
        }

        .social-icon:hover {
          color: #6ee7b7; 
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          space-y: 0.5rem; 
        }

        .footer-links > *:not(:last-child) {
            margin-bottom: 0.5rem;
        }

        .footer-link-item {
          color: #d1d5db; 
          text-decoration: none;
          transition-property: color; 
          transition-duration: 150ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .footer-link-item:hover {
          color: #6ee7b7; 
        }

        .contact-info {
          list-style: none;
          padding: 0;
          margin: 0;
          space-y: 0.75rem; 
        }

        .contact-info > *:not(:last-child) {
            margin-bottom: 0.75rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start; 
        }

        .contact-item.flex.items-center { 
            align-items: center;
        }

        .contact-icon {
          margin-right: 0.5rem; 
          
          color: #6ee7b7; 
          
        }

        .contact-text {
          color: #d1d5db; 
          
        }

        .footer-bottom {
          border-top: 1px solid #4a5568; 
          
          margin-top: 2.5rem; 
          padding-top: 1.5rem; 
          text-align: center; 
          color: #a0aec0; 
        }
      `}</style>
    </footer>
  );
}

export default Footer;