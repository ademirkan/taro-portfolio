import Image from "next/image";
import { Lexend, Voces } from "next/font/google";
import MouseMoveImageGallery from "@/components/MouseMoveImageGallery";

const titleFont = Lexend({ subsets: ["latin"], weight: "700" });
const subtitleFont = Lexend({ subsets: ["latin"], weight: "400" });
const dictonaryFont = Voces({ subsets: ["latin"], weight: "400" });

export default function Home() {
    return (
        <>
            <section className="h-[100vh] w-[100vw] bg-base-100 flex flex-col justify-center items-center text-primary">
                <h1
                    className={`${titleFont.className} text-primary text-6xl z-[10000] select-none pointer-events-none`}
                >
                    Arif Demirkan
                </h1>
                <h2
                    className={`${subtitleFont.className} text-primary text-3xl z-[10000] select-none pointer-events-none`}
                >
                    web developer
                </h2>
                <MouseMoveImageGallery
                    className="absolute h-[100%] w-[100%]"
                    imgSrcs={[...Array(6)].map((_, index) => {
                        return `/gallery/${index + 1}.jpeg`;
                    })}
                    stepLength={150}
                    imgScale={0.3}
                    maxVisibleImageCount={5}
                />
            </section>
        </>
    );
}
