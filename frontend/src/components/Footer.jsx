import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Zentry. All rights reserved.</p>
        <div className="socials">
          <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
