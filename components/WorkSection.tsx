"use client";
import React, { useEffect, useRef, useState } from "react";
import { Lexend, Voces } from "next/font/google";
import Image from "next/image";

const titleFont = Lexend({ subsets: ["latin"], weight: "600" });
const subtitleFont = Lexend({ subsets: ["latin"], weight: "400" });
const boldFont = Voces({ subsets: ["latin"], weight: "400" });
const bulletFont = Lexend({ subsets: ["latin"], weight: "200" });

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
                            <div className="w-[50%] pb-16 pt-32">
                                <ExperienceCard
                                    timeframe="Jun. 2023 - Present"
                                    company="Monkeytype"
                                    label="Frontend Developer Intern"
                                    technologies={[
                                        "Typescript",
                                        "Sass",
                                        "jQuery",
                                        "HTML",
                                        "CSS",
                                    ]}
                                    site="https://monkeytype.com/"
                                    source="https://github.com/monkeytypegame/monkeytype/pull/4448"
                                >
                                    <ul
                                        className={`list-disc pl-4 text-sm my-2 ${bulletFont.className} text-secondary`}
                                    >
                                        <li>
                                            Expanded UI library for #1 typing
                                            site with ~2 million users
                                        </li>
                                        <li>
                                            Independently launched fluid
                                            highlighting feature, now serving
                                            ~120,000 users daily
                                        </li>
                                        <li>
                                            Proposed several UI improvements to
                                            leadership, developed and
                                            implemented in pull requests
                                        </li>
                                        <li>
                                            Improved animation frame rate by
                                            ~52% in core component
                                        </li>
                                        <li>
                                            Optimized legacy component, reducing
                                            jQuery calls by ~99% and DOM
                                            manipulations by ~96%
                                        </li>
                                    </ul>
                                </ExperienceCard>
                            </div>
                            <div className="vignetteContainer w-[100%]">
                                <div className="vignette drop-shadow-[-7px_7px_20px_rgba(30,30,34,30)]">
                                    <Image
                                        className="rounded-xl m-8 "
                                        src="/screenshots/highres-mt-chart.png"
                                        alt="monkeytype-screenshot"
                                        height={200}
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
                            <div className="w-[50%] pb-16 pt-16">
                                <ExperienceCard
                                    timeframe="Fall 2022"
                                    company="CounselHero"
                                    label="Frontend Developer Intern"
                                    technologies={[
                                        "React",
                                        "Typescript",
                                        "Figma",
                                    ]}
                                    site="https://www.counselhero.com/"
                                >
                                    <ul
                                        className={`list-disc pl-4 text-sm my-2 ${bulletFont.className} text-secondary`}
                                    >
                                        <li>
                                            Expanded UI library for ed-tech
                                            startup using React and Typescript
                                        </li>
                                        <li>
                                            Proposed and led optimization task,
                                            improving page load-time by ~21%
                                        </li>
                                        <li>
                                            Designed and implemented several
                                            core UI components to support
                                            product launch
                                        </li>
                                        <li>
                                            Implemented responsive UI for mobile
                                            support
                                        </li>
                                    </ul>
                                </ExperienceCard>
                            </div>
                            <div className="vignetteContainer w-[100%]">
                                <div className="vignette drop-shadow-[-7px_7px_20px_rgba(40,60,120,100)]">
                                    <Image
                                        className="rounded-xl "
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
                            <div className="w-[50%] pb-16 pt-16">
                                <ExperienceCard
                                    timeframe="Summer 2022"
                                    company="CounselHero"
                                    label="Software Engineer Intern"
                                    technologies={[
                                        "Python",
                                        "Postman",
                                        "REST API",
                                    ]}
                                    site="https://www.counselhero.com/"
                                >
                                    <ul
                                        className={`list-disc pl-4 text-sm my-2 ${bulletFont.className} text-secondary`}
                                    >
                                        <li>
                                            Collaborated with frontend and
                                            backend teams to build internal
                                            tools using Python
                                        </li>
                                        <li>
                                            Developed scraper to parse rankings
                                            of ~1500 universities
                                        </li>
                                        <li>
                                            Created internal tool to automate
                                            updating school ranks in database,
                                            saving 100+ hours of data entry
                                        </li>
                                    </ul>
                                </ExperienceCard>
                            </div>
                            <div className="vignetteContainer w-[100%]">
                                <div className="vignette drop-shadow-[-7px_7px_20px_rgba(2,60,120,100)]">
                                    <Image
                                        className="rounded-xl m-8 "
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
                            <div className="w-[50%] pb-16 pt-16">
                                <ExperienceCard
                                    timeframe="Summer 2023"
                                    company="URL Lab"
                                    label="Side Project"
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
                                >
                                    <span
                                        className={`text-sm my-2 ${bulletFont.className} text-secondary`}
                                    >
                                        An opensource URL shortener built for
                                        the modern web. Shorten your links with
                                        ease and track analytics such as
                                        clickrate, regional demographics, device
                                        types, etc.
                                    </span>
                                </ExperienceCard>
                            </div>
                            <div className="vignetteContainer w-[100%]">
                                <div className="vignette drop-shadow-[-7px_7px_20px_rgba(80,80,100,100)]">
                                    <Image
                                        className="rounded-xl m-8 "
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
                            <div className="w-[50%] pb-16 pt-16">
                                <ExperienceCard
                                    timeframe="Summer 2022"
                                    company="Deepflow"
                                    label="Side Project"
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
                                >
                                    <span
                                        className={`text-sm my-2 ${bulletFont.className} text-secondary`}
                                    >
                                        Productivity web app that allows users
                                        to sync study sessions with their
                                        friends. Configure your study/break
                                        sessions, share a link to your friends,
                                        and study together.
                                    </span>
                                </ExperienceCard>
                            </div>
                            <div className="vignetteContainer w-[100%]">
                                <div className="vignette drop-shadow-[-7px_7px_20px_rgba(74,70,66,100)]">
                                    <Image
                                        className="rounded-xl m-8 "
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
                            <div className="w-[50%] pb-16 pt-16">
                                <ExperienceCard
                                    timeframe="Spring 2022"
                                    company="Birds of a Feather"
                                    label="University Group Project"
                                    technologies={[
                                        "Java",
                                        "Android Studio",
                                        "Bluetooth",
                                    ]}
                                    source="https://github.com/CSE-110-Winter-2022/birds-of-a-feather-cse-110-team-4"
                                >
                                    <span
                                        className={`text-sm my-2 ${bulletFont.className} text-secondary`}
                                    >
                                        A web app that allows users to find
                                        familiar faces from previous classes. On
                                        the first day of class, students turn on
                                        the search mode. The app then searches
                                        for other devices, sorts students by
                                        past mutual classes.
                                    </span>
                                </ExperienceCard>
                            </div>
                            <div className="vignetteContainer w-[100%]">
                                <div className="vignette drop-shadow-[-7px_7px_20px_rgba(40,60,120,100)]">
                                    <Image
                                        className="rounded-xl m-8 "
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
