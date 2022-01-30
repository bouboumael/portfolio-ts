import React, {useEffect, useState} from "react";
import './navbar.scss';
import {ToggleMenu} from "../../types/portfolioTypes";

function Navbar() {

    const [isShow, setIsShow] = useState<boolean>(false);
    useEffect(() => {
        toggleMenu();
    },[])

    const toggleMenu: ToggleMenu = () => {
        setIsShow(!isShow);
    }

    return (
        <>
            <div className={`navbar flex justify-center`}>
                <ul id="menu" className={isShow ? 'isVisible' : 'notVisible'}>
                    <a className="menu-button icon-plus" href="#menu" title="Afficher le Menu"/>
                    <a className="menu-button icon-minus" href="#0" title="Cacher le menu"/>
                    <li className="menu-item">
                        <a href="#menu">
                            <span className="fab fa-github"/>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#menu">
                            <span className="fas fa-envelope"/>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#menu">
                            <span className="fas fa-id-card-alt"/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;
