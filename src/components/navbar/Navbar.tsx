import React from 'react';
import './navbar.scss'

const Navbar = () => {


    return (
        <div className="navbar w-screen flex justify-center">
            <ul className={"menu-bar"}>
                <li><a href={"#home"}>Accueil</a></li>
                <li><a href={"#parcours"}>Mon parcours</a></li>
                <li><a href={"#competences"}>Mes Compétences</a></li>
                <li><a href={"#projets"}>Mes Projets</a></li>
                <li><a href={"#contact"}>Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar;
