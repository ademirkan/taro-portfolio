import { Lexend, Roboto } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const titleFont = Lexend({ subsets: ["latin"], weight: "600" });
const subtitleFont = Lexend({ subsets: ["latin"], weight: "400" });
const bulletFont = Roboto({ subsets: ["latin"], weight: "300" });

const ExperienceCard = (props: any) => {
    return (
        <>
            <div className="text-secondary text-xs opacity-75 relative top-1">
                {props.timeframe}
            </div>
            <h1 className="text-primary text-xl">{props.company}</h1>
            <h2 className="text-secondary p-0">{props.role}</h2>

            <ul
                className={`list-disc pl-4 text-sm pb-2 pt-1 ${bulletFont.className} text-secondary`}
            >
                {props.bullets.map((bullet: string, index: number) => {
                    return <li key={index}>{bullet}</li>;
                })}
            </ul>

            <div className="flex flex-row gap-[6px] text-xs select-none flex-wrap">
                {props.technologies.map((technology: string, i: number) => {
                    return (
                        <div
                            key={i}
                            className="badge badge-accent badge-sm py-3 px-2"
                        >
                            {technology}
                        </div>
                    );
                })}
            </div>
            <div key="buttons" className="flex flex-row flex-wrap gap-2 py-4">
                <button className="btn btn-outline btn-sm btn-primary normal-case">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    <a className="text-xs" href={props.site}>
                        Visit Site
                    </a>
                </button>
                <button
                    className={`btn btn-sm btn-primary normal-case`}
                    disabled={!props.source}
                >
                    <FontAwesomeIcon icon={faGithub as IconProp} />
                    <a className="text-xs" href={props.source || "/"}>
                        {props.source ? "Code" : "Private"}
                    </a>
                </button>
            </div>
        </>
    );
};

export default ExperienceCard;
