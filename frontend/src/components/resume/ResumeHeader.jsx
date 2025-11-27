import React from "react";
export default function ResumeHeader(props) {
    const me_name = props.data.name;
    const me_job = props.data.job_title;
    const me_email = props.data.contact.email;
    return(
        <div className="header-text">
            <h1>{ me_name }</h1>
            <h2>{ me_job }</h2>
            <div className="contact">
                Paris | <a href="mailto:{ me_email }">{ me_email }</a> | <a href="https://www.linkedin.com/in/tristan-habert-059649213/" target="_blank">LinkedIn</a>
            </div>
        </div>
    );
}