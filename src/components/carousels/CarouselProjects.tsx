import React from "react";
import './carouselProjects.scss';
import {imageUrl} from "../../tools/image";

const CarouselProjects = () => {
    return (
        <div className={'carousel-projects'}>
            <input type="radio" name="choice" id="javascript" checked={true}/>
            <input type="radio" name="choice" id="typescript"/>
            <div className="scene">
                <label htmlFor="typescript"/>
                <label htmlFor="javascript"/>
                <div className="card  ">
                    <h1 className="card__content">Mes Projets</h1>
                    <p className={'mt-5'}>Découvrez mes différents projets</p>
                    <footer className="card__footer">
                        <img src={imageUrl('mael-logo-pins-200x200.png')} alt={'test'}/><span>Chariault</span>
                    </footer>
                </div>
                <div className="card card--answer card--javascript">
                    <div className="card__content">Recherche de taf</div>
                    <p className={'mt-10 text-black'}>Y a pas un pekin qui me donne une chance</p>
                    <button type="button"
                            className="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default
                    </button>
                    <footer className="card__footer">
                        <img src={imageUrl('mael-logo-pins-200x200.png')} alt={'test'}/><span>Le 1er projet de moi<sub>{new Date().getFullYear()}</sub></span>
                    </footer>
                </div>
                <div className="card card--answer card--typescript">
                    <div className="card__content">Quitter mon job</div>
                    <p className={'mt-10 text-black'}>Ras le bol des fichiers excel...</p>
                    <button type="button"
                            className="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default
                    </button>
                    <footer className="card__footer">
                        <img src={imageUrl('mael-logo-pins-200x200.png')} alt={'test'}/><span>Le 2ème projet de moi<sub>{new Date().getFullYear()}</sub></span>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default CarouselProjects;
