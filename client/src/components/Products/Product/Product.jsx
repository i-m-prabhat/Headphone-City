import React from "react";
// import prod from "../../../assets/products/earbuds-prod-1.webp";
import "./Product.scss";
const Product = ({ id, data }) =>
{
    return <div className="product-card">
        <div className="thumbnail">
            <img src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url} alt="product thumbnail" />
        </div>
        <div className="prod-details">
            <span className="name">{data.title}</span>
            <div className="price">&#8377; {data.price}</div>
        </div>
    </div>;
};

export default Product;
