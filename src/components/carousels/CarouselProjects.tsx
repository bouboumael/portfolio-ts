import React from "react";
import './carouselProjects.scss';
import {projects} from "../../datas/projects";
import Card from "../card/Card";
import {Project} from "../../types/portfolioTypes";

const CarouselProjects = () => {

    return (
        <div className="carousel-projects flex flex-col md:flex-row flex-wrap justify-around items-center">
            {projects.map((project: Project, index: number) => {
                return (
                    <Card title={project.title} description={project.description} year={project.year} subDescription={project.subDescription}
                          img={project.img} link={project.link} key={index}/>
                )
            })}
        </div>
    )
}

export default CarouselProjects;
