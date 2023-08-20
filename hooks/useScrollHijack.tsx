import { useEffect, useState, RefObject, use } from "react";
import getAbsolutePosition from "@/ts/getAbsolutePosition";
import useScrollPosition from "@react-hook/window-scroll";

export default function useScrollHijack<T extends HTMLElement>(
    childRef: RefObject<T>,
    parentRef: RefObject<T>
): number {
    const [percentScrolled, setPercentScrolled] = useState<number>(0);
    const scrollY = useScrollPosition(60 /*fps*/);

    useEffect(() => {
        if (childRef.current && parentRef.current) {
            const parentTop = getAbsolutePosition(parentRef.current).top;
            const parentHeight = parentRef.current.offsetHeight;
            const childHeight = childRef.current.offsetHeight;
            const viewHeight = window.innerHeight;

            const start = parentTop;
            const end = parentTop + parentHeight - childHeight;

            const updatePercentScrolled = () => {
                if (scrollY <= start) {
                    setPercentScrolled(0);
                } else if (scrollY >= end) {
                    setPercentScrolled(100);
                } else {
                    const percentage =
                        ((scrollY - start) / (end - start)) * 100;
                    setPercentScrolled(percentage);
                }
            };

            updatePercentScrolled(); // Initial computation

            const handleResize = () => {
                updatePercentScrolled();
            };

            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, [childRef, parentRef, scrollY]);

    return percentScrolled;
}
