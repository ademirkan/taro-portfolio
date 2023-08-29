import { Lexend, Roboto } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const titleFont = Lexend({ subsets: ["latin"], weight: "600" });
const subtitleFont = Lexend({ subsets: ["latin"], weight: "400" });

const ExperienceCard = (props: any) => {
    return (
        <>
            <div className="my-2">
                {props.timeframe && (
                    <div className="text-secondary text-xs opacity-75 relative leading-none">
                        {props.timeframe}
                    </div>
                )}
                <h1 className="text-primary text-xl">{props.company}</h1>

                {props.label && (
                    <h2 className="text-secondary leading-none">
                        {props.label}
                    </h2>
                )}
            </div>

            {/* <ul
                className={`list-disc pl-4 text-sm my-2 ${bulletFont.className} text-secondary`}
            >
                {props.bullets.map((bullet: string, index: number) => {
                    return <li key={index}>{bullet}</li>;
                })}
            </ul> */}
            {props.children}

            <div className="flex flex-row gap-[6px] text-xs select-none flex-wrap my-2 py-2">
                {props.technologies.map((technology: string, i: number) => {
                    return (
                        <div
                            key={i}
                            className="badge badge-accent badge-sm py-3 px-2"
                        >
                            <div className="text-error">{technology}</div>
                        </div>
                    );
                })}
            </div>
            <div key="buttons" className="flex flex-row flex-wrap gap-2 my-2">
                {props.site && (
                    <a
                        className="text-xs btn btn-outline flex-grow btn-sm btn-primary normal-case"
                        href={props.site}
                    >
                        <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            className=" max-w-[15px] max-h-[15px]"
                        />
                        Visit Site
                    </a>
                )}
                <a
                    className={`text-xs btn flex-grow btn-sm btn-primary normal-case ${
                        !props.source && "btn-disabled"
                    }`}
                    href={props.source || "/"}
                >
                    <FontAwesomeIcon
                        icon={faGithub as IconProp}
                        className=" max-w-[15px] max-h-[15px]"
                    />
                    {props.source ? "Code" : "Private"}
                </a>
            </div>
        </>
    );
};

export default ExperienceCard;
