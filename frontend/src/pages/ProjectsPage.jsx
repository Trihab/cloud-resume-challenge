import React from "react";
import 'stylesheets/pages/projects.css';
import projectsData from "data/ProjectsData";
import ProjectItem from 'components/ProjectItem';

export default function ProjectsPage() {
    return(
        <>
        <div className="projects">
            {projectsData.map((project) => (
                <ProjectItem key={project.id} project={project}/>
            ))}
        </div>
        </>
    )
}