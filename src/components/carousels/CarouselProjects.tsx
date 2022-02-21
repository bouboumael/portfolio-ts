import React from "react";
import './carouselProjects.scss';
import {imageUrl} from "../../tools/image";
import {projects} from "../../datas/projects";
import {Project} from "../../types/portfolioTypes";

const CarouselProjects = () => {

    return (
        <div className={'carousel-projects'}>
            {projects.map((project: Project, index: number) => {
                return (
                    <input key={index} type="radio" name="choice" id={`project-${index}`} checked={true}/>
                )
            })}
            <div className="scene">
                {projects.map((project: Project, index: number) => {
                    return (
                        <label key={index} htmlFor={`project-${index}`}/>
                    )
                })}
                <div className="card">
                    <h1 className="card__content">Mes Projets</h1>
                    <p className={'mt-5'}>Découvrez mes différents projets</p>
                    <footer className="card__footer">
                        <img src={imageUrl('mael-logo-pins-200x200.png')} alt={'test'}/><span>Chariault</span>
                    </footer>
                </div>

                    {projects.map((project: Project, index: number) => {
                        return (
                            <div key={index} className={`card card--answer card--project-${index}`}>
                                <h3 className="card__content">{project.title}</h3>
                                <p className={'mt-10 text-black'}>{project.description}</p>
                                <a href={'#'} type="button"
                                   className="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default
                                </a>
                                <footer className="card__footer">
                                    <img src={imageUrl('mael-logo-pins-200x200.png')}
                                         alt={'test'}/><span>{project.subDescription}<sub>{project.year}</sub></span>
                                </footer>
                            </div>
                        )
                    })}

            </div>
        </div>
    )
}

export default CarouselProjects;
