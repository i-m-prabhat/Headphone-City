import React from "react";
// import cat1 from "../../../assets/category/cat-1.jpg"
import "./Category.scss";

const Category = ({ categories }) =>
{
    return <div className="shop-by-category">
        <div className="categories">
            {categories.data.map((item) => (
                <div key={item.id} className="category">
                    <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="category img" />
                </div>
            ))}
        </div>
    </div>;
};

export default Category;
