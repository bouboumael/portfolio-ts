import React from "react";
import './footer.scss'
import {imageUrl} from "../../tools/image";

const Footer = () => {

    const copyright: number = new Date().getFullYear()

    return (
        <footer className="footer-distributed flex flex-col justify-center lg:flex-row lg:items-center">
            <div className="footer-left">
                <div className={'flex flex-col'}>
                    <img className={'lg:w-1/3 sm:w-1/3 xl:w-1/4 sm:ml-16 md:ml-20 lg:ml-28 xl:ml-40'} src={imageUrl('mael-logo-pins-200x200.png')} alt="logo mc"/>
                    <p className="footer-links">
                        <a href={"#home"} className="link-1">Home</a>
                        <a href={"#parcours"}>Mon parcours</a>
                        <a href={"#competences"}>Mes compétences</a>
                        <a href={"#projets"}>Mes Projets</a>
                        <a href="#">Contact</a>
                    </p>
                    <p className="footer-company-name lg:ml-32 xl:ml-52">MC © {copyright}</p>
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
                    <p><a href="mailto:support@company.com">mael.chariault@gmail.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About the company</span>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus
                    vehicula sit amet.
                </p>
                <div className="footer-icons">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-linkedin" /></a>
                    <a href="#"><i className="fa fa-github" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
