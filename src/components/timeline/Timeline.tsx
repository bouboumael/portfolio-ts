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
            content: 'Formation à la MFR de Gien dans le domaine de la sylviculture et des travaux forestiers'
        },
        {
            label: '2000 - 2002',
            title: 'BTA Gestion et conduite de chantiers forestiers',
            content: 'Formation à la MFR de Gien dans le domaine de la sylviculture et des travaux forestiers'
        },
        {
            label: '2002 - Aujourd\'hui',
            title: 'Chef d\'équipe Moypark Beef Orléans (ex Mckey Foods Services)',
            content: 'Formation à la MFR de Gien dans le domaine de la sylviculture et des travaux forestiers'
        },
        {
            label: '2021',
            title: 'Reconversion Développeur Web & Web Mobile',
            content: 'Formation à la MFR de Gien dans le domaine de la sylviculture et des travaux forestiers'
        },
        {
            label: 'Aujourd\'hui',
            title: 'Recherche expérience dans le développement web',
            content: 'Formation à la MFR de Gien dans le domaine de la sylviculture et des travaux forestiers'
        },
    ]


    return (
        <div className='progress mt-40'>
            <div className='progress_inner'>
                {contents.map((content, index) =>{
                    return (
                        <div key={index} className='progress_inner__step'>
                            <label htmlFor={`step-${index + 1}`}>{content.label}</label>
                        </div>
                    )
                })}
                <input onChange={() => setStart(true)} id='step-1' name='step' type='radio' checked={start} />
                <input id='step-2' name='step' type='radio' onChange={starting}/>
                <input id='step-3' name='step' type='radio' onChange={starting}/>
                <input id='step-4' name='step' type='radio' onChange={starting}/>
                <input id='step-5' name='step' type='radio' onChange={starting}/>
                <div className='progress_inner__bar'/>
                <div className='progress_inner__bar--set'/>
                <div className='progress_inner__tabs'>
                    {contents.map((content, index) =>{
                        return (
                            <div key={index} className={`tab tab-${index}`}>
                                <h1>{content.title}</h1>
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
