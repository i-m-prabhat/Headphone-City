import React, { useContext } from "react";
import { MdClose } from "react-icons/md"
import Prod from "../../../assets/products/speaker-prod-2.webp"
import { Context } from "../../../utils/context";
Context

import "./CartItem.scss";
const CartItem = () =>
{
    const { cartItems, handleAddToCart, handleRemoveFromCart } = useContext(Context);
    return <div className="cart-products">
        {cartItems.map(item =>
        {

            <div key={item.id} className="cart-product">
                <div className="img-container">
                    <img src={Prod} alt="product" />
                </div>
                <div className="prod-details">
                    <span className="name">{item.attributes.title}</span>
                    <MdClose className="close-btn" />
                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>5</span>
                        <span>+</span>
                    </div>
                    <div className="text">
                        <span>3</span>
                        <span>X</span>
                        <span className="highlite">&#8377;{item.attributes.price}</span>
                    </div>
                </div>
            </div>
        })}
    </div>;
};

export default CartItem;
