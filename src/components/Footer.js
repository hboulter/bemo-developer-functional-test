import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <span className="copyright">
        ©2013-2016 BeMo Academic Consulting Inc. All rights reserved.
      </span>
      <span className="disclaimer">Disclaimer & Privacy Policy </span>
      <span className="contact">Contact Us </span>
      <span className="icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="facebook" icon={faFacebookF} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="twitter" icon={faTwitter} />
        </a>
      </span>
    </div>
  );
};

export default Footer;
