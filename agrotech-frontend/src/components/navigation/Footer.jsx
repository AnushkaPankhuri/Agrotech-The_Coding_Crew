import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
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
          
          {/* Quick Links */}
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
          
          {/* Legal */}
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
          
          {/* Contact */}
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
          background-color: #1a202c; /* bg-gray-800 */
          color: #fff; /* text-white */
        }

        .footer-container {
          max-width: 1200px; /* container-custom approximation, adjust as needed */
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
          padding-top: 3rem; /* py-12 */
          padding-bottom: 3rem; /* py-12 */
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr; /* grid-cols-1 */
          gap: 2rem; /* gap-8 */
        }

        @media (min-width: 768px) { /* md breakpoint */
          .footer-grid {
            grid-template-columns: repeat(2, 1fr); /* md:grid-cols-2 */
          }
        }

        @media (min-width: 1024px) { /* lg breakpoint */
          .footer-grid {
            grid-template-columns: repeat(4, 1fr); /* lg:grid-cols-4 */
          }
        }

        .footer-section h4 {
          font-size: 1.25rem; /* text-xl */
          font-weight: 700; /* font-bold */
          margin-bottom: 1rem; /* mb-4 */
        }

        .footer-text {
          color: #d1d5db; /* text-gray-300 */
          margin-bottom: 1rem; /* mb-4 */
        }

        .social-links {
          display: flex;
          space-x: 1rem; /* equivalent to space-x-4 */
        }

        .social-links > *:not(:last-child) {
            margin-right: 1rem;
        }

        .social-icon {
          color: #d1d5db; /* text-gray-300 */
          transition-property: color; /* transition-colors */
          transition-duration: 150ms; /* default transition duration */
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); /* default transition timing function */
        }

        .social-icon:hover {
          color: #6ee7b7; /* hover:text-accent, assuming accent is a green color */
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          space-y: 0.5rem; /* equivalent to space-y-2 */
        }

        .footer-links > *:not(:last-child) {
            margin-bottom: 0.5rem;
        }

        .footer-link-item {
          color: #d1d5db; /* text-gray-300 */
          text-decoration: none;
          transition-property: color; /* transition-colors */
          transition-duration: 150ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .footer-link-item:hover {
          color: #6ee7b7; /* hover:text-accent */
        }

        .contact-info {
          list-style: none;
          padding: 0;
          margin: 0;
          space-y: 0.75rem; /* equivalent to space-y-3 */
        }

        .contact-info > *:not(:last-child) {
            margin-bottom: 0.75rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start; /* items-start */
        }

        .contact-item.flex.items-center { /* For phone and email where icons align to center */
            align-items: center;
        }

        .contact-icon {
          margin-right: 0.5rem; /* mr-2 */
          color: #6ee7b7; /* text-accent */
        }

        .contact-text {
          color: #d1d5db; /* text-gray-300 */
        }

        .footer-bottom {
          border-top: 1px solid #4a5568; /* border-t border-gray-700 */
          margin-top: 2.5rem; /* mt-10 */
          padding-top: 1.5rem; /* pt-6 */
          text-align: center; /* text-center */
          color: #a0aec0; /* text-gray-400 */
        }
      `}</style>
    </footer>
  );
}

export default Footer;