import React from "react";
import { NavLink } from "react-router-dom"

export default function ProjectItem(props) {
    const project = props.project;
    return(
        <>
        <div className="project-card">
            <h2>{project.name}</h2>
            <img src={project.thumbnail} alt="" />
            <p>{project.description}</p>
            <NavLink to={`/projects/${project.id}`}>Discover the project</NavLink>{" "}
        </div>
        </>
    );
}