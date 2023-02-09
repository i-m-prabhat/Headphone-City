import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";
const Home = () =>
{
    return <div>
        <Banner />
        <div className="main-content">
            <div className="layout">
                <Category />
                <Products/>
            </div>
        </div>
    </div>;
};

export default Home;
