import React from "react";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import "./Product.scss";
const Product = () =>
{
    return <div className="product-card">
        <div className="thumbnail">
            <img src={prod} alt="product thumbnail" />
        </div>
        <div className="prod-details">
            <span className="name">Product name</span>
            <div className="price">&#8377;499</div>
        </div>
    </div>;
};

export default Product;
