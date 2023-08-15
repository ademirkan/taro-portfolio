import Marquee from "react-fast-marquee";
import { Poppins, Roboto_Mono, Lexend, Roboto } from "next/font/google";

const marqueeFont = Lexend({ subsets: ["latin"], weight: "700" });
const titleFont = Poppins({ subsets: ["latin"], weight: "700" });
export default function UnderConstructionMarquee() {
    return (
        <Marquee
            style={{ width: "100%" }}
            className={`${marqueeFont.className} text-base-100 md:text-6xl text-3xl z-10 box-border bg-primary`}
            autoFill
            speed={75}
        >
            <div className="md:py-4 py-4 select-none">WORK IN PROGRESS</div>
            <div className="relative h-[100%] flex items-center justify-center select-none">
                <div className={`${titleFont.className} px-4`}>●</div>
            </div>
        </Marquee>
    );
}
