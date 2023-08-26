"use client";
import React, { useEffect, useRef, useState } from "react";
import useScrollPercent from "@/hooks/useScrollPercent";
import { Lexend, Voces } from "next/font/google";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

const titleFont = Lexend({ subsets: ["latin"], weight: "600" });
const subtitleFont = Lexend({ subsets: ["latin"], weight: "400" });
const dictionaryFont = Voces({ subsets: ["latin"], weight: "400" });

import ExperienceCard from "./ExperienceCard";

const WorkSection: React.FC = () => {
    return (
        <section
            id="projects-section"
            className="w-[100%] pl-32 text-primary relative flex flex-row items-center overflow-hidden"
        >
            <div className="relative min-h-[100vh] w-[100%] flex flex-col">
                <div>
                    <ol className={`${subtitleFont.className} flex flex-col`}>
                        <li
                            id="monkeytype-experience"
                            className=" w-[100%] flex flex-row"
                        >
                            <div className="w-[50%] pb-4 pt-32">
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
                            </div>
                            <div className="vignetteContainer w-[100%]">
                                <div className="vignette">
                                    <Image
                                        className="rounded-xl"
                                        src="/screenshots/highres-mt-chart.png"
                                        alt="monkeytype-screenshot"
                                        height={200} // Adjust as needed; avoid -1
                                        width={700}
                                        layout="cover"
                                        style={{
                                            transform:
                                                "rotateX(20deg)rotateZ(-20deg)skewY(8deg)",
                                        }}
                                    />
                                </div>
                            </div>
                        </li>

                        <li
                            id="counselhero-experience-fe"
                            className=" w-[100%] flex flex-row"
                        >
                            <div className="w-[50%] pb-4 pt-4">
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
                                    technologies={[
                                        "React",
                                        "Typescript",
                                        "Figma",
                                    ]}
                                />
                            </div>
                            <div className="vignetteContainer w-[100%]">
                                <div className="vignette">
                                    <Image
                                        className="rounded-xl"
                                        src="/screenshots/highres-ch-university.png"
                                        alt="monkeytype-screenshot"
                                        height={200} // Adjust as needed; avoid -1
                                        width={700}
                                        layout="cover"
                                        style={{
                                            transform:
                                                "rotateX(20deg)rotateZ(-20deg)skewY(8deg)",
                                        }}
                                    />
                                </div>
                            </div>
                        </li>

                        <li
                            id="counselhero-experience-python"
                            className=" w-[100%] flex flex-row"
                        >
                            <div className="w-[50%] pb-4 pt-4">
                                <ExperienceCard
                                    timeframe="Summer 2022"
                                    company="CounselHero"
                                    role="Software Engineer Intern"
                                    bullets={[
                                        "Collaborated with frontend and backend teams to build internal tools using Python",
                                        "Developed scraper to parse rankings of ~1500 universities",
                                        "Created internal tool to automate updating school ranks in database, saving 100+ hours of data entry",
                                    ]}
                                    technologies={[
                                        "Python",
                                        "Postman",
                                        "REST API",
                                    ]}
                                />
                            </div>
                            <div className="vignetteContainer w-[100%]">
                                <div className="vignette ">
                                    <Image
                                        className="rounded-xl"
                                        src="/screenshots/highres-ch-landing-mac.png"
                                        alt="monkeytype-screenshot"
                                        height={200} // Adjust as needed; avoid -1
                                        width={700}
                                        layout="cover"
                                        style={{
                                            transform:
                                                "rotateX(20deg)rotateZ(-20deg)skewY(8deg)",
                                        }}
                                    />
                                </div>
                            </div>
                        </li>

                        {/** PROJETS  */}
                        <li
                            id="monkeytype-experience"
                            className=" w-[100%] flex flex-row"
                        >
                            <div className="w-[50%] pb-4 pt-4">
                                <ProjectCard
                                    timeframe="Summer 2023"
                                    name="URL Lab"
                                    label="Side Project"
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
                            </div>
                            <div className="vignetteContainer w-[100%]">
                                <div className="vignette">
                                    <Image
                                        className="rounded-xl"
                                        src="/screenshots/highres-urllab.png"
                                        alt="monkeytype-screenshot"
                                        height={200} // Adjust as needed; avoid -1
                                        width={700}
                                        layout="cover"
                                        style={{
                                            transform:
                                                "rotateX(20deg)rotateZ(-20deg)skewY(8deg)",
                                        }}
                                    />
                                </div>
                            </div>
                        </li>

                        <li
                            id="counselhero-experience-fe"
                            className=" w-[100%] flex flex-row"
                        >
                            <div className="w-[50%] pb-4 pt-4">
                                <ProjectCard
                                    timeframe="Summer 2022"
                                    name="Deepflow"
                                    label="Side Project"
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
                            </div>
                            <div className="vignetteContainer w-[100%]">
                                <div className="vignette">
                                    <Image
                                        className="rounded-xl"
                                        src="/screenshots/highres-df.png"
                                        alt="monkeytype-screenshot"
                                        height={200} // Adjust as needed; avoid -1
                                        width={700}
                                        layout="cover"
                                        style={{
                                            transform:
                                                "rotateX(20deg)rotateZ(-20deg)skewY(8deg)",
                                        }}
                                    />
                                </div>
                            </div>
                        </li>

                        <li
                            id="counselhero-experience-python"
                            className=" w-[100%] flex flex-row "
                        >
                            <div className="w-[50%] pb-4 pt-4">
                                <ProjectCard
                                    timeframe="Spring 2022"
                                    name="Birds of a Feather"
                                    label="University Group Project"
                                    description="A web app that allows users to find familiar faces from previous classes. On the first day of class, students turn on the search mode. The app then searches for other devices, sorts students by past mutual classes."
                                    technologies={[
                                        "Java",
                                        "Android Studio",
                                        "Bluetooth",
                                    ]}
                                    source="https://github.com/CSE-110-Winter-2022/birds-of-a-feather-cse-110-team-4"
                                />
                            </div>
                            <div className="vignetteContainer w-[100%]">
                                <div className="vignette ">
                                    <Image
                                        className="rounded-xl"
                                        src="/screenshots/highres-ch-landing-mac.png"
                                        alt="monkeytype-screenshot"
                                        height={200} // Adjust as needed; avoid -1
                                        width={700}
                                        layout="cover"
                                        style={{
                                            transform:
                                                "rotateX(20deg)rotateZ(-20deg)skewY(8deg)",
                                        }}
                                    />
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
