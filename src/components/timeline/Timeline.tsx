import React, {useState} from "react";
import './timeline.scss'

const Timeline = () => {

    const [start, setStart] = useState<boolean>(true);
    const starting = () => {
        if (start) {
            setStart(false);
        }
    }

    type Content = {
        label: string,
        title: string,
        content: string
    }

    const contents: Content[] = [
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
            label: '2002 - Aujourd\'hui',
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
            label: 'Aujourd\'hui',
            title: 'Recherche expérience dans le développement web',
            content: "Actuellement en recherche d'expérience je refléchis aux possibilités qui me sont offertes (freelance, CDD, CDI)"
        },
    ]

    return (
        <div className='progress mt-40'>
            <div className='progress_inner'>
                {contents.map((content, index) => {
                    return (
                        <div key={index} className='progress_inner__step'>
                            <label htmlFor={`step-${index + 1}`}>{content.label}</label>
                        </div>
                    )
                })}
                <input onChange={() => setStart(true)} id='step-1' name='step' type='radio' checked={start}/>
                {contents.map((content, index) => {
                    if (index > 0){
                        return (
                            <input key={index} id={`step-${index + 1}`} name='step' type='radio' onChange={starting}/>
                        )
                    }
                })}
                <div className='progress_inner__bar'/>
                <div className='progress_inner__bar--set'/>
                <div className='progress_inner__tabs'>
                    {contents.map((content, index) => {
                        return (
                            <div key={index} className={`tab tab-${index}`}>
                                <h3>{content.title}</h3>
                                <p>{content.content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Timeline;
