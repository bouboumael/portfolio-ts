import React from "react";
import './technology.scss';
import {imageUrl} from "../../tools/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

type TechnologyProps = {
  name: string;
  logo: {
    src: string;
    alt: string;
  };
  starNumber: number;
};

const stars = (starNumber: number) => {
  const stars = [];
  for (let i = 0; i < starNumber; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} key={i} size={'lg'}/>);
  }
    console.log(stars);
  return stars;
};

const Technology = (props: TechnologyProps) => {

    const { name, logo, starNumber } = props;

    return (
        <div className="technology flex">
            <img src={imageUrl(logo.src)} alt={logo.alt}/>
            <p>: {name.toUpperCase()}</p>
            <div className="star-number flex">
                {
                    stars(starNumber)
                }
            </div>
        </div>
    )
}

export default Technology;
