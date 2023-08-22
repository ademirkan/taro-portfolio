import Image from "next/image";
import { Lexend, Voces } from "next/font/google";
import MouseMoveImageGallery from "@/components/MouseMoveImageGallery";
import ProjectsSection from "@/components/ProjectsSection";

const titleFont = Lexend({ subsets: ["latin"], weight: "600" });
const subtitleFont = Lexend({ subsets: ["latin"], weight: "400" });
const dictonaryFont = Voces({ subsets: ["latin"], weight: "400" });

export default function Home() {
    return (
        <>
            <section className="h-[100vh] w-[100%] bg-base-100 flex flex-col justify-center items-center text-primary">
                <h1
                    className={`${titleFont.className} text-primary md:text-6xl text-4xl z-[10000] select-none pointer-events-none`}
                >
                    Arif Demirkan
                </h1>
                <h2
                    className={`${subtitleFont.className} text-secondary md:text-2xl text-lg z-[10000] select-none pointer-events-none`}
                >
                    web developer
                </h2>
                {/* <MouseMoveImageGallery
                    className="absolute top-0 h-[100vh] w-[100%]"
                    imgSrcs={[...Array(6)].map((_, index) => {
                        return `/gallery/${index + 1}.jpeg`;
                    })}
                    stepLength={150}
                    imgScale={0.3}
                    maxVisibleImageCount={5}
                /> */}
            </section>

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
            </section>

            <ProjectsSection />

            <section className="h-[100vh] w-[100%] bg-base-100 flex flex-col justify-center items-center text-primary">
                yeet1
            </section>
        </>
    );
}
