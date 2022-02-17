import React, {useState} from "react";
import './timeline.scss'
import {timelineContent} from "../../datas/timeline";
import {TimelineContent} from "../../types/portfolioTypes";

const Timeline = () => {

    const [start, setStart] = useState<boolean>(true);
    const starting = () => {
        if (start) {
            setStart(false);
        }
    }

    const contents: TimelineContent[] = timelineContent

    return (
        <div className='progress mt-40'>
            <div className='progress_inner w-screen'>
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
                            <div key={index} className={`tab tab-${index} md:w-3/4 xl:w-1/2`}>
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
