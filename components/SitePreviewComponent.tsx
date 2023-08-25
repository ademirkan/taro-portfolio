import useScrollState from "@/hooks/useScrollState";
import Image from "next/image";

const SitePreviewComponent = (props: { elementArr: HTMLElement[] }) => {
    const index = useScrollState(props.elementArr);
    const src =
        index === 0
            ? "/screenshots/highres-mt-chart.png"
            : "/screenshots/highres-urllab.png";

    return (
        <div>
            <Image
                className="relative rounded-xl top-[100px] drop-shadow-2xl"
                src={src}
                alt="monkeytype-screenshot"
                height={500}
                width={800}
                style={{
                    transform: "rotateX(20deg)rotateZ(-20deg)skewY(8deg)",
                }}
            ></Image>
        </div>
    );
};

export default SitePreviewComponent;
