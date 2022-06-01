import React, {useEffect} from "react";
import Technology from "../technology/Technology";
import {Technologies} from "../../datas/technologies";
import {TechnologyProps} from "../../types/portfolioTypes";

const ThirdView = () => {

    const [technologies, setTechnologies] = React.useState<TechnologyProps[]>([]);
    useEffect(() => {
        Technologies().then(res => {
            setTechnologies(res);
        })
    },[])

    return (
        <div className={'thirdView p-20 flex flex-row flex-wrap items-center justify-around'}>
            {technologies.map((techno: TechnologyProps, index: number) => {
                return <Technology key={index} {...techno}/>
            })}
        </div>
    )
}

export default ThirdView;
