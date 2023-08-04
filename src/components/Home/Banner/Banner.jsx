import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>VENTES</h1>
                    <p>Profitez d'une collection très étendue de produits que vous ne trouverez nulle part ailleurs !</p>

                    <div className="ctas">
                        <div className="banner-cta" onClick={() => navigate(`/category/1`)}>En savoir plus</div>
                        <div className="banner-cta v2"  onClick={() => navigate(`/category/1`)}>Acheter maintenant</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </div>
    )
};

export default Banner;
