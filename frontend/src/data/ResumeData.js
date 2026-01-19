import gcp_logo from 'images/icon_gcp.png'

const resumeData = {
    person: {
        name: "Tristan Habert",
        job_title: "Cloud Engineer",
        contact: {
            email: "habert.tristan@gmail.com",
        },
        description: "Mastering GCP services to build reliable and scalable infrastructure for your organization."
    },
    sections: {
        certif: [
            {
                title: "Google Cloud Digital Leader",
                date: "20/07/2025",
                icon: gcp_logo,
            },
            {
                title: "Google Associate Cloud Engineer",
                date: "Underway",
                icon: gcp_logo,
            },
            {
                title: "Google Professional Cloud Architect",
                date: "Underway",
                icon: gcp_logo,
            }
        ],
        languages: {
            first: "English",
            second: "French",
        },
        interest: {
            first: "Formula 1",
            second: "Video Games",
            third: "Sciences",
        }
    },
};

export default resumeData;