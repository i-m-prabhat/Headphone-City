import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa"
import Payment from "../../assets/payments.png"

import "./Footer.scss";
const Footer = () =>
{
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod architecto explicabo facere aliquam natus fugiat enim reprehenderit rerum totam optio eos repudiandae, aliquid magnam autem distinctio ratione suscipit quibusdam deleniti.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                        Address: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod architecto.
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">
                        Phone: 900000001
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">
                        Email: Example123@example.com
                    </div>
                </div>
            </div>
            <div className="col">
                <span className="title">Categories</span>
                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>
            <div className="col">
                <span className="title">Pages</span>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                   &copy;HEADPHONE CITY 2023 | Created by <a href="https://github.com/i-m-prabhat">Prabhat Patel</a> 
                </div>
                <img src={Payment} alt="payment pic" />
            </div>
        </div>
    </footer>;
};

export default Footer;
