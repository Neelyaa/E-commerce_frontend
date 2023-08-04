import "./Newsletter.scss";
import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    S'inscrire pour les dernières offres et nouveautés
                </span>
                <div className="form">
                    <input type="text" placeholder="Adresse e-mail" />
                    <button>S'inscrire</button>
                </div>
                <div className="text">Sera utilisé conformément à notre Politique de Confidentialité.</div>
                <div className="social-icons">

                    <div className="icon">
                    <FaFacebookF size={14}/>
                    </div>
                    <div className="icon">
                    <FaTwitter size={14}/>
                    </div>
                    <div className="icon">
                    <FaInstagram size={14}/>
                    </div>
                    <div className="icon">
                    <FaLinkedinIn size={14}/>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Newsletter;
