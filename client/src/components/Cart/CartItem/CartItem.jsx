import React from "react";
import { MdClose } from "react-icons/md"
import Prod from "../../../assets/products/speaker-prod-2.webp"

import "./CartItem.scss";
const CartItem = () =>
{
    return <div className="cart-products">
        <div className="cart-product">
            <div className="img-container">
                <img src={Prod} alt="product" />
            </div>
            <div className="prod-details">
                <span className="name">Product name</span>
                <MdClose className="close-btn" />
                <div className="quantity-buttons">
                    <span>-</span>
                    <span>5</span>
                    <span>+</span>
                </div>
                <div className="text">
                    <span>3</span>
                    <span>X</span>
                    <span className="highlite">&#8377;4578</span>
                </div>
            </div>
        </div>
    </div>;
};

export default CartItem;
