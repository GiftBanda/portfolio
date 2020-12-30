import React from "react";
import Card from "./card";
import ProjectDetails from "../models/ProjectDetails";


function Projects() {
    return(
        
        <div className="projects" >
            {ProjectDetails.map((project, index) => (
                <Card
                key={index}
                img={project.img}
                alt={project.alt}
                description={project.description}
                link={project.link}
                github={project.github}
                />
            ))}
        </div>
      
    );
}

export default Projects;