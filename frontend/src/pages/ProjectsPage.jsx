import React from "react";
import 'stylesheets/pages/projects.css';
import projectsData from 'data/projectData.json';
import ProjectItem from 'components/ProjectItem';
import ViewCounter from 'components/ViewCounter'

export default function ProjectsPage() {
    return(
        <>
        <div className="views-counter-container">
            <ViewCounter />
        </div>
        <div className="projects-grid">
            {projectsData.map((project) => (
                <ProjectItem key={project.id} project={project}/>
            ))}
        </div>
        </>
    )
}