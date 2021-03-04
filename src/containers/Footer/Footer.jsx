import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Air Baloon</h2>
            <Link to='./'>How it works</Link>
            <Link to='./'>Testimonials</Link>
            <Link to='./'>Investors</Link>
            <Link to='./contacts'>Term of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to='./'>Contact</Link>
            <Link to='./'>Support</Link>
            <Link to='./'>Destination</Link>
            <Link to='./'>Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Video</h2>
            <Link to='./'>Agency</Link>
            <Link to='./'>Terms</Link>
            <Link to='./'>JS</Link>
            <Link to='./'>Inf</Link>
          </div>
          <div className="footer-link-items">
            <h2>Media</h2>
            <Link to='./'>Inst</Link>
            <Link to='./'>FB</Link>
            <Link to='./'>Youtube</Link>
            <Link to='./'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">Kyrgyzstan, Bishkek</small>
          <div className="social-icons">
            <Link className="social-icon-link facebook"
              to="/"
              target='blank'
              aria-label='Facebook'
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link className="social-icon-link instagram"
              to="/"
              target='blank'
              aria-label='Instagram'
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link className="social-icon-link youtube"
              to="/"
              target='blank'
              aria-label='Youtube'
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link className="social-icon-link twitter"
              to="/"
              target='blank'
              aria-label='Twitter'
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link className="social-icon-link linkedin"
              to="/"
              target='blank'
              aria-label='Linkedin'
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;