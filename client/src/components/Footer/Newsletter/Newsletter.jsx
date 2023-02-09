import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import {BsGithub} from "react-icons/bs"

import "./Newsletter.scss";
const Newsletter = () =>
{
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">Newsletter</span>
            <span className="big-text">Sign up for latest updates and offers</span>
            <div className="form">
                <input type="email" placeholder="Email Address" />
                <button>Subscribe</button>
            </div>
            <div className="text">Will be used in accordance with our <a href="/">Privacy Policy</a></div>
            <div className="social-icons">
                <div className="icon">
                    <a href="https://www.instagram.com/i_m_prabhat__" target={'_blank'} rel="noreferrer">
                        <FaFacebook size={14} />
                    </a>
                </div>
                <div className="icon">
                    <a href="https://www.instagram.com/i_m_prabhat__" target={'_blank'} rel="noreferrer">
                        <FaInstagram size={14} />
                    </a>
                </div>
                <div className="icon">
                    <a href="https://twitter.com/i_m_prabhat__" target={'_blank'} rel="noreferrer">
                        <FaTwitter size={14} />
                    </a>
                </div>
                <div className="icon">
                    <a href="https://www.linkedin.com/in/devprabhat/" target={'_blank'} rel="noreferrer">
                        <FaLinkedinIn size={14} />
                    </a>
                </div>
                <div className="icon">
                    <a href="https://github.com/i-m-prabhat" target={'_blank'} rel="noreferrer">
                        <BsGithub size={14} />
                    </a>
                </div>
            </div>
        </div>
    </div>;
};

export default Newsletter;
