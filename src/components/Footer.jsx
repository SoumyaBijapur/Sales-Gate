import { Link } from "react-router-dom";
import SalesGateLogo from "../assets/logo/Sales_gate_mainLogo.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">

          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img
                src={SalesGateLogo}
                alt="Sales Gate"
                className="footer-logo"
              />
            </Link>

            <p className="footer-description">
              AI-powered sales solutions built to help businesses turn
              opportunities into predictable revenue.
            </p>

            <a
              href="mailto:contact@salesgatehub.com"
              className="footer-email"
            >
              contact@salesgatehub.com
            </a>

            <div className="footer-socials">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/salesgate1/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="Sales Gate LinkedIn"
              >
                in
              </a>

              {/* X */}
              <a
                href="#"
                className="footer-social"
                aria-label="Sales Gate X"
                onClick={(e) => e.preventDefault()}
              >
                X
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/salesgate1?stkn=MWh5ZXU3Z2IxMWNrMw=="
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="Sales Gate Instagram"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4.2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <circle
                    cx="17.4"
                    cy="6.6"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </a>

            </div>
          </div>

          <div className="footer-column">
            <h3>PLATFORM</h3>

            <Link to="/ai-sales">AI Sales</Link>
            <Link to="/ai-solutions">AI Solutions</Link>
            <Link to="/managed-sales">Managed Sales</Link>
          </div>

          <div className="footer-column">
            <h3>COMPANY</h3>

            <Link to="/about-us">About Us</Link>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Careers
            </a>

            <Link to="/about-us">Contact</Link>
          </div>

          <div className="footer-column">
            <h3>RESOURCES</h3>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Blog
            </a>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Insights
            </a>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Case Studies
            </a>
          </div>

          <div className="footer-column footer-contact">
            <h3>CONTACT</h3>

            <a href="mailto:contact@salesgatehub.com">
              contact@salesgatehub.com
            </a>

            <a href="tel:+917353339571">
              +91 73533 39571
            </a>

            <p>Bengaluru, India</p>
          </div>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>© 2026 Sales Gate. All rights reserved.</p>

          <div className="footer-legal">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Terms of Service
            </a>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;