import React from "react";
import './technology.scss';
import {imageUrl} from "../../tools/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {TechnologyProps} from "../../types/portfolioTypes";


const stars = (starNumber: number) => {
    const maxStars = 5;
    const stars = [];
    for (let i = 0; i < maxStars; i++) {
        if (i < starNumber) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} size={'lg'} className="plain"/>);
        } else {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} size={'lg'}/>);
        }
    }
    return stars;
};

const Technology = (props: TechnologyProps) => {

    const {title, link, logo, starNumber} = props;

    return (
        <>
            <a className={"flex justify-center basis-1/4 h-32 mb-5"} href={link} target={'_blank'} rel={"noreferrer"}>
                <div
                    className="technology flex items-center justify-center px-20 rounded bg-amber-50/5 shadow-md shadow-blue-200" title={title}>
                    <img src={imageUrl(logo.src)} alt={logo.alt}/>
                    <div className="star-number flex ml-5">
                        {
                            stars(starNumber)
                        }
                    </div>
                </div>
            </a>
        </>

    )
}

export default Technology;
