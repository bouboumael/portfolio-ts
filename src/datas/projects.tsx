import {Project} from "../types/portfolioTypes";

export const projects: Project[] = [
    {
        title: 'Recherche de taf',
        description: "Y a pas un pekin qui me donne une chance",
        year: new Date().getFullYear(),
        subDescription: "Le premier projet de moi",
    },
    {
        title: 'Quitter mon job',
        description: "Ras le bol des fichiers excel...",
        year: new Date().getFullYear(),
        subDescription: "le deuxième projet de moi",
    },
    {
        title: 'le projet test qui fout la merde',
        description: "si tu me vois, c'est que ça marche",
        year: new Date().getFullYear(),
        subDescription: "le projet test",
    }
]
