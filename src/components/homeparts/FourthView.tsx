import React from 'react';
import {CardSwiper} from "react-card-rotate-swiper";
import {projectsCards} from "../../datas/projects";
import {ProjectCard} from "../../types/portfolioTypes";

const FourthView = () => {

    const cards = projectsCards

    let indexInit: number = 100;
    cards.map((card: ProjectCard, index: number) => {
        if (index > 0) {
            const newIndex: number = indexInit - (indexInit / cards.length);
            card.style = {zIndex: newIndex};
            indexInit = indexInit - newIndex;
        } else {
            card.style = {zIndex: indexInit};
        }
    })

    return (
        <div className={'p-20 fourthView'}>
            <h2>Mes projets récents:</h2>
            <div className="pt-10 mt-10 flex justify-center relative min-h-screen overflow-hidden">
                <div className={'w-1/2 flex justify-center'}>
                    {cards.map((card: ProjectCard, index: number) => {
                        return (
                            <div className={"absolute"} key={index} style={card.style}>
                                <CardSwiper className={"card"} contents={card.element}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FourthView;

