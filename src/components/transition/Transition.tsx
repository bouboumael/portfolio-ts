import React from "react";
import './transition.scss';
import {imageBackground} from "../../tools/image";

type Props = {
    image: string,
    title: string,
    subtitle?: string,
    text?: string,
}

const Transition = ({image, title, text, subtitle}: Props) => {

    return (
        <div className="transition flex flex-col justify-center" style={{backgroundImage: imageBackground(image)}}>
            <h2 className={'text-center text-7xl'}>{title}</h2>
            {subtitle ? <h3 className={'text-center text-3xl'}>{subtitle}</h3> : null}
            {text ? <p className={'text-center text-xl'}>{text}</p> : null}
        </div>
    );
}

export default Transition;
