import React from "react";
import 'stylesheets/pages/projects.css';
import projectsData from 'data/projectData.json';
import ProjectItem from 'components/ProjectItem';

export default function ProjectsPage() {
    return(
        <>
        <div className="projects-grid">
            {projectsData.map((project) => (
                <ProjectItem key={project.id} project={project}/>
            ))}
        </div>
        </>
    )
}