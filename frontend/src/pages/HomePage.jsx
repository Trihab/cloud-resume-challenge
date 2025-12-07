import React from "react";
import 'stylesheets/pages/home.css';
import ResumeData from 'data/ResumeData'
import { NavLink } from "react-router-dom"
import photo_pro from "images/photo_pro2.JPEG"

export default function ProjectsPage() {
    const data_me = ResumeData.person;
    const data_cert = ResumeData.sections;
    return(
        <>
        <div className="home-container">
            
            {/* --- SECTION HERO : Présentation --- */}
            <section className="hero-section">
                <div className="hero-content">
                    <span className="greeting">Hello, I am</span>
                    <h1 className="name">{data_me.name}</h1>
                    <h2 className="role">{data_me.job_title}</h2>
                    <p className="bio">{data_me.description}</p>
                    
                    <div className="cta-buttons">
                        <NavLink to="/projects" className="btn btn-primary">Discover my projects</NavLink>{" "}
                        <a class="btn btn-secondary" href="#contact-footer">Get in touch</a>
                    </div>
                </div>
                
                {/* Placeholder pour ta photo ou une illustration */}
                <div className="hero-visual">
                    <div className="avatar-circle">
                        <img src={photo_pro} alt="Tristan Habert"/>
                    </div>
                </div>
            </section>
            <hr />
            {/* --- SECTION INFO : Certifications & Skills --- */}
            <section className="stats-section">
                <h3 className="section-title" id="certif-home-h3">My Certifications</h3>
                
                <div className="certs-grid">
                    {data_cert.certif.map((cert, index) => (
                        <div className="cert-card" key={index}>
                            <div className="cert-icon"><img src={cert.icon} alt="Logo certification" /></div>
                            <div className="cert-info">
                                <h4>{cert.title}</h4>
                                <span className={`cert-date ${cert.date === 'Underway' ? 'ongoing' : ''}`}>
                                    {cert.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
        </>
    )
}