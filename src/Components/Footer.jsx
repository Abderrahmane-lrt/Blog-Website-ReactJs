import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row text-md-left">

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-secondary">Tech News</h5>
            <p>Welcome to TechNews! Sharing the latest updates, tutorials, and insights in technology and web development.</p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-secondary">Quick Links</h5>
            <p><a href="#" className="text-white text-decoration-none">Home</a></p>
            <p><a href="#" className="text-white text-decoration-none">About</a></p>
            <p><a href="#" className="text-white text-decoration-none">Blog</a></p>
            <p><a href="#" className="text-white text-decoration-none">Contact</a></p>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-secondary">Follow Us</h5>
            <a href="#" className="text-white me-4"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="text-white me-4"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="text-white me-4"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="text-white me-4"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>

          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-secondary">Contact</h5>
            <p><FontAwesomeIcon icon={faHome} className="me-3"/> 123 Tech Street, City, Country</p>
            <p><FontAwesomeIcon icon={faEnvelope} className="me-3"/> contact@technews.com</p>
            <p><FontAwesomeIcon icon={faPhone} className="me-3"/> +123 456 7890</p>
          </div>

        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>© 2025 TechNews. All rights reserved.</p>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <a href="#" className="text-white me-4"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="text-white me-4"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
