import React, {useEffect, useState} from "react";
import './carouselProjects.scss';
import {Projects} from "../../datas/projects";
import Card from "../card/Card";
import {Project} from "../../types/portfolioTypes";

const CarouselProjects = () => {

    const [projects, setProjects] = useState<Project[]>([]);
    useEffect(() => {
        Projects().then(projects => setProjects(projects));
    },[])

    return (
        <div className="carousel-projects flex flex-col md:flex-row flex-wrap justify-around items-center">
            {projects.map((project: Project, index: number) => {
                return (
                    <Card {...project} key={index}/>
                )
            })}
        </div>
    )
}

export default CarouselProjects;
