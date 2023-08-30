import Image from "next/image";
import { Lexend, Voces } from "next/font/google";
import WorkSection from "@/components/WorkSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

import { IconProp } from "@fortawesome/fontawesome-svg-core";

const titleFont = Lexend({ subsets: ["latin"], weight: "600" });
const subtitleFont = Lexend({ subsets: ["latin"], weight: "400" });
const dictonaryFont = Voces({ subsets: ["latin"], weight: "400" });

export default function Home() {
    return (
        <>
            <section className="h-[100vh] w-[100%] bg-base-100 flex flex-col justify-center items-center text-primary">
                <div className="flex flex-col max-w-[500px]">
                    <b className={`${titleFont.className} text-2xl`}>
                        Arif Demirkan
                    </b>
                    <i className="text-sm relative left-1 pb-2 top-[-2px] text-secondary">
                        /(ah-reef)/ · noun
                    </i>
                    <ol
                        className={`relative py-1 text-sm left-1 text-secondary top-[-2px] ${dictonaryFont.className}`}
                    >
                        <li>
                            <b className="inline-block"> i. </b> fullstack web
                            developer
                        </li>
                        <li>
                            <b className="inline-block"> ii. </b> minimalist
                        </li>
                        <li>
                            <b className="inline-block"> iii. </b> known taro
                            boba addict
                        </li>
                    </ol>
                </div>
                <a
                    href="#projects-section"
                    className="btn btn-primary btn-sm m-4 w-[175px] drop-shadow-[0px_0px_20px_rgba(50,50,50,30)] hover:drop-shadow-[0px_0px_40px_rgba(80,80,80,30)] normal-case"
                >
                    see my work
                </a>
            </section>

            <WorkSection />

            <section className="mt-[300px] h-[100vh] w-[100%] bg-base-100 flex flex-col justify-center items-center text-primary">
                {/* <Image
                    className="rounded-lg"
                    src={"/pfp.png"}
                    alt={"profile pic"}
                    width={300}
                    height={300}
                ></Image> */}
                <h1 className="text-2xl p-4">Lets get in touch! </h1>

                <div className="m-8 flex flex-row gap-x-4 gap-y-4 justify-center max-w-[400px] flex-wrap ">
                    <a
                        href="https://www.linkedin.com/in/arif-d/"
                        className="flex flex-row items-center gap-x-1 btn btn-primary btn-sm normal-case"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin as IconProp}
                            className="h-[20px] w-[20px]"
                        />
                        LinkedIn
                    </a>
                    <a
                        href="mailto:ademirkan@ucsd.edu"
                        className="flex flex-row items-center gap-x-1 btn btn-primary btn-sm normal-case"
                    >
                        <FontAwesomeIcon
                            icon={faEnvelope as IconProp}
                            className="h-[20px] w-[20px]"
                        />
                        Email
                    </a>
                    <a
                        href="https://github.com/ademirkan"
                        className="flex flex-row items-center gap-x-1 btn btn-primary btn-sm normal-case"
                    >
                        <FontAwesomeIcon
                            icon={faGithub as IconProp}
                            className="h-[20px] w-[20px]"
                        />
                        Github
                    </a>

                    <a
                        href="https://www.linkedin.com/in/arif-d/"
                        className="flex flex-row items-center gap-x-1 btn btn-primary btn-sm normal-case"
                    >
                        <FontAwesomeIcon
                            icon={faDiscord as IconProp}
                            className="h-[20px] w-[20px]"
                        />
                        Discord
                    </a>

                    <a
                        href="/Arif_Demirkan_Aug23_.pdf"
                        download
                        className="flex flex-row items-center gap-x-1 btn btn-primary btn-sm normal-case"
                    >
                        <FontAwesomeIcon
                            icon={faFile as IconProp}
                            className="h-[20px] w-[20px]"
                        />
                        Resume
                    </a>
                </div>
            </section>
        </>
    );
}
