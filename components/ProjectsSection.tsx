"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import useScrollHijack from "@/hooks/useScrollHijack";
import Experiences from "./Experiences";

const ProjectsSection: React.FC = () => {
    const parentRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLDivElement>(null);
    const percentScrolled = useScrollHijack(childRef, parentRef);

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
            <div className="relative min-h-[100vh] w-[40%] flex flex-col">
                <Experiences />
            </div>
            <div className={`relative h-[100%] w-[60%]`} ref={parentRef}>
                <div
                    className={`h-[100vh] flex flex-row justify-end ${
                        percentScrolled > 0
                            ? percentScrolled < 100
                                ? "fixed top-0"
                                : "absolute bottom-[0%]"
                            : ""
                    }`}
                    ref={childRef}
                >
                    <div className="w-[60%] bg-pink-300">
                        <Image
                            className="absolute rounded-2xl z-10 top-[160px] drop-shadow-xl right-[425px] border-2 border-base-100"
                            src="/screenshots/mt-phone.png"
                            alt="monkeytype-mobile-screenshot"
                            height={100}
                            width={125}
                            style={{
                                transform:
                                    "perspective(1000px) rotateX(15deg) rotateY(15deg) rotateZ(-10deg) border-2 border-base-100 drop-shadow-xl",
                            }}
                        ></Image>
                        <Image
                            className="absolute rounded-2xl "
                            src="/screenshots/mt-mac.png"
                            alt="monkeytype-screenshot"
                            height={500}
                            width={500}
                            style={{
                                transform:
                                    "perspective(1000px) rotateX(15deg) rotateY(15deg) rotateZ(-10deg)",
                            }}
                        ></Image>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
