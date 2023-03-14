import React from "react";
import Products from "../../Products/Products"
import useFetch from "../../../hooks/useFetch";
// import Product from "../../Products/Product/Product";

const RelatedProducts = ({ categoryId, productId }) =>
{
    const { data } = useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`)
    return <div>
        <Products headingText="Related Products" products={data} />
    </div>;
};

export default RelatedProducts;
