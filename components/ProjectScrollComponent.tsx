"use client";
import React, { useRef } from "react";
import useScrollHijack from "@/hooks/useScrollHijack";
import ProjectDescription from "./ProjectDescription";

const ProjectScrollComponent: React.FC = () => {
    const parentRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLDivElement>(null);
    const percentScrolled = useScrollHijack(childRef, parentRef);

    return (
        <section
            id="project-scroll-component"
            className="h-[1000vh] w-[100vw] text-primary relative opacity-50 bg-yellow-400"
            ref={parentRef}
        >
            <div
                className={`flex md:flex-row flex-col w-[100vw] h-[100vh] gap-[10px] ${
                    percentScrolled > 0
                        ? percentScrolled < 100
                            ? "fixed top-0"
                            : "absolute bottom-[0%]"
                        : ""
                }`}
                ref={childRef}
            >
                <div className="flex-grow-[1] bg-pink-400 basis-0">
                    <ProjectDescription percentScrolled={percentScrolled} />
                </div>
                <div className="flex-grow-[2] bg-blue-400 basis-0">yeet2</div>
            </div>
        </section>
    );
};

export default ProjectScrollComponent;
