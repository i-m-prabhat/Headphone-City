import { useNavigate } from "react-router-dom"

import React from "react";
// import cat1 from "../../../assets/category/cat-1.jpg"
import "./Category.scss";

const Category = ({ categories }) =>
{
    const navigate = useNavigate();
    return <div className="shop-by-category">
        <div className="categories">
            {categories?.data?.map((item) => (
                <div key={item.id}
                    className="category"
                    onClick={() => navigate(`/category/${item.id}`)}>
                    <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="category img" />
                </div>
            ))}
        </div>
    </div>;
};

export default Category;
