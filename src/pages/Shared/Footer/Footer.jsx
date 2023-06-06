import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        {/* todo adding logo */}
        <h1>LOGO</h1>
        <p>
          <span className="text-2xl font-bold">
            Music<span className="text-error">Land</span>
          </span>
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <Link>Courses</Link>
        <Link>Design</Link>
        <Link>Marketing</Link>
        <Link>Advertisement</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link>About us</Link>
        <Link>Contact</Link>
        <Link>Jobs</Link>
        <Link>Press kit</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link>Terms of use</Link>
        <Link>Privacy policy</Link>
        <Link>Cookie policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
