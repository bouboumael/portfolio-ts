import {TimelineContent} from "../types/portfolioTypes";

export const timelineContent: TimelineContent[] = [
    {
        label: '1998 - 2000',
        title: 'Bepa sylviculture et travaux forestiers',
        content: 'Formation à la MFR de Gien.'
    },
    {
        label: '2000 - 2002',
        title: 'BTA Gestion et conduite de chantiers forestiers',
        content: 'Formation au Cfaad de Bellegarde.'
    },
    {
        label: `2002 - ${new Date().getFullYear()}`,
        title: 'Chef d\'équipe Moypark Beef Orléans (ex Mckey Foods Services)',
        content: "Chef d'équipe de production.\n" +
            "\n" +
            "J'ai sous ma responsabilité une équipe d'une dizaine de personnes.\n" +
            "\n" +
            "Travaillant essentiellement de nuit, je suis autonome et force de propositions. Je m'efforce d'obtenir les objectifs demandés en adaptant le travail en fonction des imprévus.\n" +
            "\n" +
            "J'ai participé à la création d'outils informatiques pour le suivis des résultats et de la production.\n" +
            "\n" +
            "J'ai également participé au débogage et à la mise en production d'une interface reliant SAP à cette dernière."
    },
    {
        label: '2018 - 2021',
        title: 'Reconversion Développeur Web & Web Mobile',
        content: "Afin de me lancer dans le développement, je commence à suivre des cours sur OpenClassrooms puis suit les formations de Grafikart. Suite logique dans ma démarche personnelle, je me lance dans une reconversion professionelle à la Wild Code School d'Orléans afin de concrétiser mes années d'auto-formation. Je finalise ma formation en réalisant un stage chez Puddinglab."
    },
    {
        label: new Date().getFullYear() === 2021 ? '2021' : `2021 - ${new Date().getFullYear()}`,
        title: 'Recherche expérience dans le développement web',
        content: "Actuellement en recherche d'expérience je refléchis aux possibilités qui me sont offertes (freelance, CDD, CDI).\n" +
            "\n" +
            "Avec la collaboration de mes amis, nous lançons le collectif d'auto-entrepreneurs Deviteasy.fr.\n" +
            "\n" +
            "N'hésitez plus à me contacter pour toute demande d'information."
    },
]
