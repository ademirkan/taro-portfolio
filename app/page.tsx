import Image from "next/image";
import { Lexend, Voces } from "next/font/google";
import MouseMoveImageGallery from "@/components/MouseMoveImageGallery";
import ProjectScrollComponent from "@/components/ProjectScrollComponent";

const titleFont = Lexend({ subsets: ["latin"], weight: "600" });
const subtitleFont = Lexend({ subsets: ["latin"], weight: "400" });
const dictonaryFont = Voces({ subsets: ["latin"], weight: "400" });

export default function Home() {
    return (
        <>
            <section className="h-[100vh] w-[100vw] bg-base-100 flex flex-col justify-center items-center text-primary">
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
                    className="absolute top-0 h-[100vh] w-[100vw]"
                    imgSrcs={[...Array(6)].map((_, index) => {
                        return `/gallery/${index + 1}.jpeg`;
                    })}
                    stepLength={150}
                    imgScale={0.3}
                    maxVisibleImageCount={5}
                /> */}
            </section>

            <section className="h-[100vh] w-[100vw] bg-base-100 flex flex-col justify-center items-center text-primary">
                <div className="flex flex-col max-w-[500px]">
                    <b className={`${titleFont.className} text-2xl`}>arif</b>
                    <i>/(ah-reef)/ · noun</i>
                    <ol className="py-1">
                        <li>
                            <b className="inline-block">i. </b> web dev
                            specialist
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

            <ProjectScrollComponent />
            <section className="h-[100vh] w-[100vw] bg-base-100 flex flex-col justify-center items-center text-primary">
                yeet1
            </section>
        </>
    );
}
