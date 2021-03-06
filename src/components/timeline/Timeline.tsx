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
        <div className='progress mt-40 w-screen md:w-11/12'>
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
                    return index > 0 ? (
                        <input key={index} onChange={() => starting()} id={`step-${index + 1}`} name='step' type='radio'/>
                    ) : null

                })}
                <div className='progress_inner__bar'/>
                <div className='progress_inner__bar--set'/>
                <div className='progress_inner__tabs'>
                    {contents.map((content, index) => {
                        return (
                            <div key={index} className={`tab tab-${index} w-4/5 xl:w-1/2`}>
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
