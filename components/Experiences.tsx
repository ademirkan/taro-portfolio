import Image from "next/image";
import { Lexend, Voces } from "next/font/google";
import ExperienceCard from "./ExperinceCard";

const titleFont = Lexend({ subsets: ["latin"], weight: "600" });
const subtitleFont = Lexend({ subsets: ["latin"], weight: "400" });
const dictionaryFont = Voces({ subsets: ["latin"], weight: "400" });

const EXPERIENCES = {
    1: {
        title: "Monkeytype",
        logoUrl: "/logos/monkeytypelogo.svg",
        logoAlt: "monkeytype-logo",
        labels: ["Frontend Developer"],
        description: "A typing test website",
        links: {
            site: "https://monkeytype.com/",
            code: "github.com/monkeytype/monkeytype",
        },
        technologies: ["Typescript", "Sass", "jQuery", "HTML", "CSS"],
        timeframe: "Summer 2023",
    },
    2: {
        title: "CounselHero",
        logoUrl: "/logos/counselherologo.png",
        logoAlt: "counselhero-logo",
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
        logoUrl: "/logos/counselherologo.png",
        logoAlt: "counselhero-logo",
        labels: ["Software Engineer"],
        description: "An Ed tech startup",
        links: {
            site: "https://counselhero.com/",
        },
        technologies: ["Python"],
        timeframe: "Summer 2022",
    },
};

const Experiences = () => {
    return (
        <ol className={`${subtitleFont.className} flex flex-col gap-24`}>
            <li id="monkeytype-experience" className=" w-[100%]">
                <ExperienceCard
                    timeframe="Jun. 2023 - Present"
                    company="Monkeytype"
                    role="Frontend Developer Intern"
                    bullets={[
                        "Expanded UI library for #1 typing site with ~2 million users",
                        "Independently launched fluid highlighting feature, now serving ~120,000 users daily",
                        "Proposed several UI improvements to leadership, developed and implemented in pull requests",
                        "Improved animation frame rate by ~52% in core component",
                        "Optimized legacy component, reducing jQuery calls by ~99% and DOM manipulations by ~96%",
                    ]}
                    technologies={[
                        "Typescript",
                        "Sass",
                        "jQuery",
                        "HTML",
                        "CSS",
                    ]}
                    site="https://monkeytype.com/"
                />
            </li>

            <li id="counselhero-experience-fe" className=" w-[100%]">
                <ExperienceCard
                    timeframe="Fall 2022"
                    company="CounselHero"
                    role="Frontend Developer Intern"
                    bullets={[
                        "Expanded UI library for ed-tech startup using React and Typescript",
                        "Proposed and led optimization task, improving page load-time by ~21%",
                        "Designed and implemented several core UI components to support product launch",
                        "Implemented responsive UI for mobile support",
                    ]}
                    technologies={["React", "Typescript", "Figma"]}
                />
            </li>

            <li id="counselhero-experience-python" className=" w-[100%]">
                <ExperienceCard
                    timeframe="Summer 2022"
                    company="CounselHero"
                    role="Software Engineer Intern"
                    bullets={[
                        "Collaborated with frontend and backend teams to build internal tools using Python",
                        "Developed scraper to parse rankings of ~1500 universities",
                        "Created internal tool to automate updating school ranks in database, saving 100+ hours of data entry",
                    ]}
                    technologies={["Python", "Postman", "REST API"]}
                />
            </li>
        </ol>
    );
};

export default Experiences;
