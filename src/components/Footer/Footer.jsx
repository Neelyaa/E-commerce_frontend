import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">À propos</div>
                    <div className="text">
                        Nous nous engageons à satisfaire nos clients et nous assurons des produits de qualité. <br></br>Le matériel primé de Cyber Store comprend des périphériques gaming de haute performance pour une expérience de jeu unique et optimum
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                           Marseille 13013
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Téléphone: 07.78.13.46.19</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: store@cyber.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Catégories</div>
                    <span className="text">Casques</span>
                    <span className="text">Montres connecté</span>
                    <span className="text">Haut-parleurs Bluetooth</span>
                    <span className="text">Ecouteurs sans fil</span>
                    <span className="text">Home Cinéma</span>
                    <span className="text">Projecteurs</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Accueil</span>
                    <span className="text">À propos</span>
                    <span className="text">Politique de confidentialité</span>
                    <span className="text">Retours</span>
                    <span className="text">Termes & Conditions</span>
                    <span className="text">Nous contacter</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        CYBERSTORE 2023.
                    </span>
                    <img src={Payment} alt="paiement" />
                </div>
            </div>
        </div>
    )
};

export default Footer;
