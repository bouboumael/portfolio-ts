import React from 'react';
import img from '../../assets/images/mael2.webp';
import './card.scss';
import ModalProject from "../modal/modalProject";
import {CardProps} from "../../types/portfolioTypes";

const Card = ({title, description, img, text}: CardProps) => {
    return (
        <div className="max-w-md rounded overflow-hidden shadow-sm bg-white card-block">
            <img className="w-full h-80 object-cover" src={img.src} alt="Sunset in the mountains"/>
            <div className="px-6 py-4 h-80 flex flex-col items-center">
                <h3 className="font-bold text-xl h-1/4">{title}</h3>
                <p className="text-gray-700 text-base h-2/4">
                    {description}
                </p>
                <ModalProject title={title} description={description} img={img} text={text}/>
            </div>
        </div>
    );
}

export default Card;
