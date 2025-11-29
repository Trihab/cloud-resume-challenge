import React from "react";
export default function ResumeSectionsItems(props) {
    const items = props.data;
    return(
        <>
        <h3>Certifications & Miscellaneous</h3>
        <div className="grid-container">
            <div>
                <strong>Certifications</strong>
                { Array.isArray(items.certif) && items.certif.length > 0 && (
                    <ul>
                        {items.certif.map((text) => (
                            <li key={text.title}>{text.title} ({text.date})</li>
                        ))}
                    </ul>
                )}
            </div>
            <div>
                <strong>Languages & Hobbies</strong>
                <ul>
                    <li>Langues: { items.languages.first }, { items.languages.second }</li>
                    <li>Intérêts: { items.interest.first }, { items.interest.second }, { items.interest.third }</li>
                </ul>
            </div>
        </div>
        </>
    );
}