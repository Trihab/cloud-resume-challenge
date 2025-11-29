import 'stylesheets/pages/resume.css'

import resumeData from "data/ResumeData";
import ResumeHeader from "components/resume/ResumeHeader";
import ResumeSectionsCertif from "components/resume/ResumeSectionsCertif";

export default function ResumePage() {
    return(
        <>
        <div className="resume-container">
            <ResumeHeader data={resumeData.person}></ResumeHeader>
            <section>
                <h3>Expériences Professionnelles</h3>

                <div className="entry">
                    <div className="entry-header">
                        <span>DevOps (Alternance) - EUROFIBER FRANCE</span>
                        <span>Depuis novembre 2024</span>
                    </div>
                    <ul>
                        <li>Proxmox: installation d'un cluster</li>
                        <li>Scheduler Python: garantir la MàJ de différents services (Gitlab CI)</li>
                        <li>Grafana: export de dashboard via Python</li>
                        <li>Kubernetes: Terraform/Helm</li>
                    </ul>
                </div>

                <div className="entry">
                    <div className="entry-header">
                        <span>Administrateur Systèmes & Réseaux (Alternance) - APPLIWAVE</span>
                        <span>2023-2024</span>
                    </div>
                    <ul>
                        <li>Intervention en DataCenter</li>
                        <li>Gestion de Projet</li>
                        <li>Scripting Python</li>
                        <li>Configuration Arista, Cisco</li>
                    </ul>
                </div>

                <div className="entry">
                    <div className="entry-header">
                        <span>Technicien Systèmes & Réseaux (Alternance) - APPLIWAVE</span>
                        <span>2021-2023</span>
                    </div>
                    <ul>
                        <li>Configuration de routeur client</li>
                        <li>Support Technique Téléphonique</li>
                        <li>Mise en place du TR-069 (automatisation routeur client)</li>
                    </ul>
                </div>
            </section>

            <section>
                <h3>Compétences</h3>
                <div className="grid-container">
                    <div>
                        <strong>Systèmes & DevOps</strong>
                        <ul>
                            <li>Virtualisation & conteneurisation (Docker, Kubernetes, Proxmox)</li>
                            <li>Cloud (GCP, AWS)</li>
                            <li>Monitoring: Zabbix, Grafana</li>
                            <li>Versionning: Gitlab, Github</li>
                            <li>CI/CD: Gitlab CI, Github Actions, Jenkins</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Développement & Scripting</strong>
                        <ul>
                            <li>Python & API (FastAPI)</li>
                            <li>Bash, Terraform, Ansible</li>
                            <li>Bases de données: MySQL, PostgreSQL</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Réseaux</strong>
                        <ul>
                            <li>Firewall (PFsense, OPNsense)</li>
                            <li>Router, Switch: Cisco, Arista</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Soft skills</strong>
                        <ul>
                            <li>Organisation & gestion de projet</li>
                            <li>Autonomie, adaptabilité, curiosité, sens du résultat</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <h3>Formations</h3>
                <div className="entry">
                    <div className="entry-header">
                        <span>Master Systèmes, Réseaux et Cloud - ESGI, Paris (75012)</span>
                        <span>2024-2026</span>
                    </div>
                </div>
                <div className="entry">
                    <div className="entry-header">
                        <span>Bachelor Systèmes, Réseaux et Cloud - ESGI, Paris (75012)</span>
                        <span>2021-2024</span>
                    </div>
                </div>
            </section>

            <section>
                <h3>Projet Personnel</h3>
                <div className="entry">
                    <div className="entry-header">
                        <span>Cloud Resume Challenge Bootcamp</span>
                        <span>22/11/2025</span>
                    </div>
                    <ul>
                        <li>Deploy a personal resume website to a cloud platform (GCP). Configure DNS, HTTPS, and CDN.</li>
                        <li>Build a lightweight serverless backend API for a visitor counter.</li>
                        <li>Store data in a managed NoSQL database (DynamoDB / Cosmos DB / Firestore).</li>
                        <li>Use Infrastructure as Code (Terraform) to automate provisioning.</li>
                    </ul>
                </div>
            </section>

            <section>
                <ResumeSectionsCertif data={resumeData.sections}></ResumeSectionsCertif>
            </section>
            
        </div>
        </>
    );
}