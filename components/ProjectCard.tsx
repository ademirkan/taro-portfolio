import { Lexend, Roboto } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const titleFont = Lexend({ subsets: ["latin"], weight: "600" });
const subtitleFont = Lexend({ subsets: ["latin"], weight: "400" });
const bulletFont = Roboto({ subsets: ["latin"], weight: "300" });

const ProjectCard = (props: {
    timeframe?: string;
    name: string;
    label: string;
    description: string;
    technologies: string[];
    site?: string;
    source: string;
}) => {
    return (
        <>
            {props.timeframe && (
                <div className="text-secondary text-md opacity-75 relative top-1">
                    {props.timeframe}
                </div>
            )}
            <h1 className="text-primary text-3xl">{props.name}</h1>
            <h2 className="text-secondary">{props.label}</h2>

            <div
                className={`text-lg pb-4 pt-2 ${bulletFont.className} text-secondary`}
            >
                {props.description}
            </div>

            <div className="flex flex-row gap-[6px] text-md select-none flex-wrap">
                {props.technologies.map((technology: string, i: number) => {
                    return (
                        <div
                            key={i}
                            className="badge badge-accent badge-lg py-3 px-2"
                        >
                            {technology}
                        </div>
                    );
                })}
            </div>
            <div key="buttons" className="flex flex-row flex-wrap gap-2 py-4">
                <button className="btn btn-outline btn-sm btn-primary normal-case">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    <a className="text-md" href={props.site}>
                        Visit Site
                    </a>
                </button>
                <button
                    className={`btn btn-sm btn-primary normal-case`}
                    disabled={!props.source}
                >
                    <FontAwesomeIcon icon={faGithub as IconProp} />
                    <a className="text-md" href={props.source || "/"}>
                        {props.source ? "Code" : "Private"}
                    </a>
                </button>
            </div>
        </>
    );
};

export default ProjectCard;
