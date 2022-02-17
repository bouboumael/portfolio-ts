import React from "react";
import Technology from "../technology/Technology";
import {technologies} from "../../datas/technologies";

const ThirdView = () => {

    return (
        <div className={'thirdView p-20 flex flex-row flex-wrap items-center justify-around'}>
            {technologies.map((techno, index) => {
                return <Technology key={index} {...techno}/>
            })}
        </div>
    )
}

export default ThirdView;
