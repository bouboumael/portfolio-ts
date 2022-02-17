import React from "react";
import './footer.scss'
import {imageUrl} from "../../tools/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    const copyright: number = new Date().getFullYear()

    return (
        <footer className="footer-distributed flex flex-col justify-between md:flex-row md:items-center">
            <div className="footer-left">
                <div className={'flex flex-col items-center md:justify-center'}>
                    <img className={'sm:w-1/2 lg:w-1/4 xl:w-1/4'} src={imageUrl('mael-logo-pins-200x200.png')} alt="logo mc"/>
                    <p className="footer-links text-center">
                        <a href={"#home"} className="link-1">Home</a>
                        <a href={"#parcours"}>Mon parcours</a>
                        <a href={"#competences"}>Mes compétences</a>
                        <a href={"#projets"}>Mes Projets</a>
                        <a href="#">Contact</a>
                    </p>
                    <p className="footer-company-name">MC © {copyright}</p>
                </div>
            </div>
            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"/>
                    <p>St Cyr en Val, Loiret, France</p>
                </div>
                <div>
                    <i className="fa fa-phone"/>
                    <p>(+33) 06 08 61 30 88</p>
                </div>
                <div>
                    <i className="fa fa-envelope"/>
                    <p><a href="mailto:support@company.com">bouboumael@gmail.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>Maël Chariault</span>
                    Développeur web & web mobile. Passionné de développement et de nouvelles technologies. J'aime le travail d'équipe, mais je sais aussi travailler en solo. En perpétuelle formation, j'aime apprendre et évoluer. En faisant appel à moi, je serai un atout pour votre projet.
                </p>
                <div className="footer-icons flex justify-around">
                    <a href={"https://github.com/bouboumael"} target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faGithub} size={'2x'}/></a>
                    <a href={"https://www.linkedin.com/in/ma%C3%ABl-chariault/"} target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size={'2x'}/></a>
                    <a href={"https://www.facebook.com/bouboumael"} target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size={'2x'}/></a>
                    <a href={"https://twitter.com/djboubou45"} target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size={'2x'}/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
