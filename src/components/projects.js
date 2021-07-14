import React from "react";
import Card from "./card";
import ProjectDetails from "../models/ProjectDetails";
import {Zoom} from 'react-reveal';


function Projects() {
    return(
        <div className='projects'> 
        <hr />
            <Zoom right cascade>
            <h2 >Projects</h2>
            </Zoom>
            <h6>
                I really enjoyed working on these projects to help sharpen my skills and keep me upto date with latest trends in the industry. My favourite among these projects is afrogig website which is a job listing platform dedicated to serve computer science talents and professionals.
            </h6>
            <div className="projects-grid" >
            
            {ProjectDetails.map((project, index) => (
                <Zoom right>
                <Card
                key={index}
                img={project.img}
                alt={project.alt}
                description={project.description}
                link={project.link}
                github={project.github}
                />
                </Zoom>
            ))}
            </div>
        </div>
    );
}

export default Projects;