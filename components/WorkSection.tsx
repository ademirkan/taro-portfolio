"use client";
import React, { useEffect, useRef, useState } from "react";
import useScrollPercent from "@/hooks/useScrollPercent";
import { Lexend, Voces } from "next/font/google";
import ProjectCard from "./ProjectCard";

const titleFont = Lexend({ subsets: ["latin"], weight: "600" });
const subtitleFont = Lexend({ subsets: ["latin"], weight: "400" });
const dictionaryFont = Voces({ subsets: ["latin"], weight: "400" });

import SitePreviewComponent from "./SitePreviewComponent";
import ExperienceCard from "./ExperienceCard";

const WorkSection: React.FC = () => {
    const parentRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLDivElement>(null);
    const percentScrolled = useScrollPercent(childRef, parentRef);
    const experienceListRef = useRef<any>(null);
    const projectListRef = useRef<any>(null);
    const [cardArr, setCardArr] = useState([]);

    useEffect(
        () =>
            // @ts-ignore
            setCardArr([
                ...Array.from(experienceListRef.current?.children || []),
                ...Array.from(projectListRef.current?.children || []),
            ]),
        [experienceListRef.current, projectListRef.current]
    );

    useEffect(() => {
        if (percentScrolled > 0 && percentScrolled < 100 && parentRef.current) {
            childRef.current!.style.width = `${parentRef.current.clientWidth}px`;
        } else {
            childRef.current!.style.width = "100%";
        }
    }, [percentScrolled]);

    return (
        <section
            id="projects-section"
            className="w-[90%] text-primary relative flex flex-row items-center"
        >
            <div className="relative min-h-[100vh] w-[40%] flex flex-col gap-24">
                <div>
                    <span className="py-2 text-xl text-primary underline">
                        Experiences
                    </span>
                    <ol
                        className={`${subtitleFont.className} flex flex-col gap-8`}
                        ref={experienceListRef}
                    >
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

                        <li
                            id="counselhero-experience-fe"
                            className=" w-[100%]"
                        >
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

                        <li
                            id="counselhero-experience-python"
                            className=" w-[100%]"
                        >
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
                </div>
                <div>
                    <span className="py-2 text-xl text-primary underline">
                        Projects
                    </span>
                    <ol
                        className={`${subtitleFont.className} flex flex-col gap-8`}
                        ref={projectListRef}
                    >
                        <li id="urllab-project" className=" w-[100%]">
                            <ProjectCard
                                timeframe="Summer 2023"
                                name="URL Lab"
                                description="An opensource URL shortener built for the modern web. Shorten your links with ease and track analytics such as clickrate, regional demographics, device types, etc."
                                technologies={[
                                    "Next.js",
                                    "Typescript",
                                    "Tailwind",
                                    "DaisyUI",
                                    "Framer Motion",
                                    "Express",
                                    "Planetscale",
                                    "MySQL",
                                ]}
                                site="https://app.urllab.co/"
                                source="https://github.com/ademirkan/URL-Lab-FrontEnd"
                            />
                        </li>

                        <li id="deepflow-project" className=" w-[100%]">
                            <ProjectCard
                                timeframe="Summer 2022"
                                name="Deepflow"
                                description="Productivity web app that allows users to sync study sessions with their friends. Configure your study/break sessions, share a link to your friends, and study together. "
                                technologies={[
                                    "React",
                                    "Typescript",
                                    "Tailwind",
                                    "Figma",
                                    "CSS Modules",
                                    "Express",
                                ]}
                                site="https://deepflow.live/"
                                source="https://github.com/ademirkan/Deepflow-Nextjs"
                            />
                        </li>

                        <li id="boaf-project" className=" w-[100%]">
                            <ProjectCard
                                timeframe="Spring 2022"
                                name="Birds of a Feather"
                                description="A web app that allows users to find familiar faces from previous classes. On the first day of class, students turn on the search mode. The app then searches for other devices, sorts students by past mutual classes."
                                technologies={[
                                    "Java",
                                    "Android Studio",
                                    "Bluetooth",
                                ]}
                                source="https://github.com/CSE-110-Winter-2022/birds-of-a-feather-cse-110-team-4"
                            />
                        </li>
                    </ol>
                </div>
            </div>
            <div
                className={`relative h-[100%] w-[60%] overflow-hidden`}
                ref={parentRef}
            >
                <div
                    className={`h-[100vh] flex flex-row justify-end ${
                        percentScrolled > 0
                            ? percentScrolled < 100
                                ? "fixed top-0"
                                : "absolute bottom-[0%]"
                            : " "
                    }`}
                    ref={childRef}
                >
                    <div className="h-[400px] relative right-[-100px]">
                        <SitePreviewComponent elementArr={cardArr} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
