import React, {useEffect, useState} from "react";
import './footer.scss'
import {imageUrl} from "../../tools/image";
import {api} from "../../services/getApi";
import {Social} from "../../types/portfolioInterface";




const Footer = () => {
    const copyright: number = new Date().getFullYear()
    const [socials, setSocials] = useState<Social[]>([])
    useEffect(() => {
        apiSocials()
    }, [])

    const apiSocials = async () => {
        const response = await api.get('/socials')
        const data = response.data['hydra:member']
        setSocials(data)
    }

    return (
        <footer className="footer-distributed flex flex-col justify-between lg:flex-row md:items-center">
            <div className="footer-left">
                <div className={'flex flex-col items-center md:justify-center'}>
                    <img className={'w-full lg:w-1/4 xl:w-1/4'} src={imageUrl('mael-logo-pins-200x200.png')} alt="logo mc"/>
                    <p className="footer-links text-center">
                        <a href={"#home"} className="link-1">Home</a>
                        <a href={"#parcours"}>Mon parcours</a>
                        <a href={"#competences"}>Mes compétences</a>
                        <a href={"#projets"}>Mes Projets</a>
                        <a href={"#contact"}>Contact</a>
                    </p>
                    <p className="footer-company-name">MC © {copyright}</p>
                </div>
            </div>
            <div className="footer-center text-center lg:text-left">
                <div className={'text-left md:text-center lg:text-left lg:pl-20'}>
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
                        <p><a href={"/contact"}>Contactez moi</a></p>
                    </div>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>Maël Chariault</span>
                    Développeur web & web mobile. Passionné de développement et de nouvelles technologies. J'aime le travail d'équipe, mais je sais aussi travailler en solo. En perpétuelle formation, j'aime apprendre et évoluer. En faisant appel à moi, je serai un atout pour votre projet.
                </p>
                <div className="footer-icons flex justify-around">
                    {socials.filter((social: Social) => social.isActive ).map((social: Social, index: number) => {
                        return (
                            <a key={index} href={social.url} target={'_blank'} rel="noreferrer">
                                <i className={`social-links ${social.icon}`}></i>
                            </a>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}

export default Footer;
