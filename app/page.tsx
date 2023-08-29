import Image from "next/image";
import { Lexend, Voces } from "next/font/google";
import MouseMoveImageGallery from "@/components/MouseMoveImageGallery";
import WorkSection from "@/components/WorkSection";

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
            </section>

            <WorkSection />

            <section className="h-[100vh] w-[100%] bg-base-100 flex flex-col justify-center items-center text-primary">
                <Image
                    src={"/pfp.png"}
                    alt={"profile pic"}
                    width={300}
                    height={300}
                ></Image>
            </section>
        </>
    );
}
