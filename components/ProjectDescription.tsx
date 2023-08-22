import { useState } from "react";

const experience = {
    1: {
        title: "Monkeytype",
        logoUrl: "/logos/monkeytype.png",
        labels: ["Frontend Developer"],
        description: "A typing test website",
        links: {
            site: "https://monkeytype.com/",
            code: "github.com/monkeytype/monkeytype",
        },
        technologies: ["Typescript", "Sass", "jQuery"],
        timeframe: "Summer 2023",
    },
    2: {
        title: "CounselHero",
        logoUrl: "/logos/counselhero.png",
        labels: ["Frontend Developer"],
        description: "An Ed tech startup",
        links: {
            site: "https://counselhero.com/",
        },
        technologies: ["React", "Typescript", "Figma"],
        timeframe: "Fall 2022",
    },
    3: {
        title: "CounselHero",
        labels: ["Software Engineer"],
        description: "An Ed tech startup",
        links: {
            site: "https://counselhero.com/",
        },
        technologies: ["Python"],
        timeframe: "Summer 2022",
    },
};

const projects = {
    1: {
        title: "URL Lab",
        description: "A URL shortener",
        link: "https://urllab.co/",
    },
};

const ProjectDescription = ({
    percentScrolled,
}: {
    percentScrolled: number;
}) => {
    const [section, setSection] = useState<number>(0);
    return <div></div>;
};

export default ProjectDescription;
