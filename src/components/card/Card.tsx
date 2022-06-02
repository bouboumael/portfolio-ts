import React from 'react';
import './card.scss';
import ModalProject from "../modal/ModalProject";
import {Project} from "../../types/portfolioTypes";
import {imageUrl} from "../../tools/image";

const Card = (project: Project) => {
    const {title, description, imgSrc, imgAlt} = project;
    return (
        <div className="card-project rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-10 md:mr-5 md:w-2/3 lg:w-1/3 xl:w-1/4">
            <img className="card-img rounded-t-lg" src={imageUrl(imgSrc ?? '')} alt={imgAlt ?? ''}/>
            <div className="card-content p-5">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            </div>
            <div className="card-btn float-right mr-5">
                <ModalProject {...project}/>
            </div>
        </div>
    );
}

export default Card;
