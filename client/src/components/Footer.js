import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="/">
            Home
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/about">
            About
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/services">
            Services
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/team">
            Team
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/contact">
            Contact
          </a>
        </li>
      </ul>
      <p>&copy; 2022 Your Company | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
