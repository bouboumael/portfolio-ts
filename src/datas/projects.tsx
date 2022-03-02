import {Project} from "../types/portfolioTypes";

export const projects: Project[] = [
    {
        title: 'JobPermut',
        description: "MVP sur le concept de l'échange d'un meme travail à distances différentes",
        year: new Date().getFullYear(),
        subDescription: "Dernier Projet de formation",
        img: {
            src: 'JobPermutPc.webp',
            alt: 'JobPermut'
        },
        link: "http://jobpermut.fr/",
    },
    {
        title: 'DevItEasy',
        description: "Site d'un projet de création d'agence web",
        year: new Date().getFullYear(),
        subDescription: "Projet de fin d'étude et de futur professionnel",
        img: {
            src: 'JobPermutPc.webp',
            alt: 'JobPermut'
        }
    },
]
