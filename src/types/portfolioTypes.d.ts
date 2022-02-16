import React from "react";

export type ToggleMenu = () => void;

export type TechnologyProps = {
    logo: {
        src: string,
        alt: string,
    },
    starNumber: number,
    title?: string,
    link?: string,
};

export type TimelineContent = {
    label: string,
    title: string,
    content: string,
}

export type ProjectCard = {
    element: JSX.Element,
    style?: React.CSSProperties,
}


export type CardProps = {
    title: string,
    description: string,
    img: {
        src: string,
        alt: string,
    };
    text: string,
};
