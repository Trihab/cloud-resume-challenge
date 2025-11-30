import React from "react";
import { NavLink } from "react-router-dom"

export default function Header() {
    return(
        <nav>
            <NavLink to="/">News</NavLink>{" "}
            <NavLink to="/resume">Resume</NavLink>{" "}
            <NavLink to="/projects">Projects</NavLink>{" "}
        </nav>
    );
}