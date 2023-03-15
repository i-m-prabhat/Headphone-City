import React, { useContext } from "react";
import { MdClose } from "react-icons/md"
import Prod from "../../../assets/products/speaker-prod-2.webp"
import { Context } from "../../../utils/context";

import "./CartItem.scss";
const CartItem = () =>
{
    const { cartItems, handleRemoveFromCart, handleCartProductQuantity } = useContext(Context);
    return <div className="cart-products">
        {cartItems.map(item =>
        (
            <div key={item.id} className="cart-product">
                <div className="img-container">
                    <img src={
                        process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url
                    } alt="product" />
                </div>
                <div className="prod-details">
                    <span className="name">{item.attributes.title}</span>
                    <MdClose className="close-btn" onClick={() => handleRemoveFromCart(item)} />
                    <div className="quantity-buttons">
                        <span onClick={() => handleCartProductQuantity('dec', item)}>-</span>
                        <span>{item.attributes.quantity}</span>
                        <span onClick={() => handleCartProductQuantity('inc', item)}>+</span>
                    </div>
                    <div className="text">
                        <span>{item.attributes.quantity}</span>
                        <span>X</span>
                        <span className="highlite">&#8377;{item.attributes.price * item.attributes.quantity}</span>
                    </div>
                </div>
            </div>
        ))}
    </div>;
};

export default CartItem;
