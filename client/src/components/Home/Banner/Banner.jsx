import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse incidunt aperiam mollitia deleniti? Velit voluptatibus quis tempore atque. Fugiat vitae autem est mollitia at dicta soluta magnam eius repudiandae ullam.</p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="Banner img" />
        </div>
    </div>;
};

export default Banner;
