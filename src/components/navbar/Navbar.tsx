import React from "react";
import './navbar.scss';

function Navbar() {

    return (
        <>
            <div className="navbar flex justify-center">
                <ul id="menu">
                    <a className="menu-button icon-plus" href="#" title="Afficher le Menu"/>
                    <a className="menu-button icon-minus" href="#" title="Cacher le menu"/>
                    <li className="menu-item">
                        <a href="#menu">
                            <span className="fab fa-github"/>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#">
                            <span className="fas fa-envelope"/>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#">
                            <span className="fas fa-id-card-alt"/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;
