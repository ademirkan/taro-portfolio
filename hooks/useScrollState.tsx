import { useState, useEffect } from "react";
import useScrollPosition from "@react-hook/window-scroll";

const useScrollState = (elements: HTMLElement[]): number => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const scrollY = useScrollPosition(20 /*fps*/);

    useEffect(() => {
        const viewportMiddle = scrollY + window.innerHeight / 2;

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (element) {
                const elementTop =
                    element.getBoundingClientRect().top + scrollY;
                const elementBottom = elementTop + element.offsetHeight;

                // Check if the middle of the viewport is within the current element
                if (
                    viewportMiddle >= elementTop &&
                    viewportMiddle <= elementBottom
                ) {
                    setActiveIndex(i);
                    break;
                }
            }
        }
    }, [scrollY, elements]);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            // Update active index based on new dimensions
            setActiveIndex((prevIndex) => {
                // Reevaluate the middle element after resizing
                const viewportMiddle = scrollY + window.innerHeight / 2;
                const element = elements[prevIndex];
                if (element) {
                    const elementTop =
                        element.getBoundingClientRect().top + scrollY;
                    const elementBottom = elementTop + element.offsetHeight;

                    if (
                        viewportMiddle >= elementTop &&
                        viewportMiddle <= elementBottom
                    ) {
                        return prevIndex;
                    }
                }

                // If the previously active element isn't in view anymore, recalculate
                for (let i = 0; i < elements.length; i++) {
                    const el = elements[i];
                    if (el) {
                        const elTop = el.getBoundingClientRect().top + scrollY;
                        const elBottom = elTop + el.offsetHeight;
                        if (
                            viewportMiddle >= elTop &&
                            viewportMiddle <= elBottom
                        ) {
                            return i;
                        }
                    }
                }

                return prevIndex;
            });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [elements, scrollY]);

    return activeIndex;
};

export default useScrollState;
