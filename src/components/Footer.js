import React from 'react';
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
  return (
    <div>
        <div className="footer-background">
            <div className="footer-container">
                <img src={ Logo } alt="Little Lemon logo" />
                <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
                <div className="footer-content">
                    <div className="locations">
                        <h5>LOCATIONS</h5>
                        <ul>
                            <li>New York</li>
                            <li>Boston</li>
                            <li>Austin</li>
                            <li>San Fransico</li>
                        </ul>
                    </div>
                    <div className="opening-times">
                        <h5>HOURS</h5>
                        <ul>
                            <li>Mon - Thur: 9:30 AM - 10:00 PM</li>
                            <li>Fri: 9:00 AM - 11:00 PM</li>
                            <li>Sat - Sun: 10:30 AM - 11:00 AM</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h5>CONTACT US</h5>
                        <ul>
                            <li>35 Main St, New York, NY</li>
                            <li>Tel: 555-129-2525</li>
                            <li>Email: info@littlelemon.com</li>
                        </ul>
                    </div>
            </div>
            <div className="copyright">
                <p>© {new Date().getFullYear()} Little Lemon Ltd. All rights reserved.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
