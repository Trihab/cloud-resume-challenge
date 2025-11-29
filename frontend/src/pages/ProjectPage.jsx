import React from "react";
import 'stylesheets/pages/projects.css';
import projectsData from "data/ProjectsData";
import { useParams } from "react-router";
import { ChevronLeft } from 'lucide-react';
import { NavLink } from "react-router-dom";

export default function ProjectsPage() {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);
    return(
        <>
        <div className="project">
            <NavLink to="/projects"><ChevronLeft/>Back to Projects</NavLink>{" "}
            <h1>{project.name}</h1>
            <p>{project.description}</p>
        </div>
        </>
    )
}