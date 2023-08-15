"use client";
import { useEffect, useRef, useState } from "react";
import { useWindowHeight } from "@react-hook/window-size";
import useScrollPosition from "@react-hook/window-scroll";
import { motion } from "framer-motion";
const TRIANGLE_HEIGHT = 40;

interface IScrollArrowProps {
    maxHeight: number;
    pxBufferUntilAnimation: number;
    hasTip: boolean;
    sticky?: boolean;
}
export default function ScrollArrow(props: IScrollArrowProps) {
    const [arrowHeight, setArrowHeight] = useState(
        props.hasTip ? TRIANGLE_HEIGHT : 0
    ); // Initialize the arrowHeight as a state

    const [isFinished, setIsFinished] = useState(false);

    const scrollY = useScrollPosition(60 /*fps*/);
    const containerRef = useRef<HTMLDivElement>(null);

    const windowHeight = useWindowHeight();

    useEffect(() => {
        // This effect recalculates arrowHeight when either the scrollY or windowHeight changes
        if (isFinished) {
            return;
        }
        const containerYPosition =
            containerRef.current?.getBoundingClientRect().top;
        const newArrowHeight = Math.max(
            props.hasTip ? TRIANGLE_HEIGHT : 0,
            Math.min(
                props.maxHeight,
                windowHeight -
                    containerYPosition! -
                    props.pxBufferUntilAnimation
            )
        );
        setArrowHeight(newArrowHeight); // Update the state to trigger a re-render
        if (newArrowHeight === props.maxHeight && props.sticky) {
            setIsFinished(true);
        }
    }, [scrollY, windowHeight]); // Effect depends on scrollY and windowHeight

    return (
        <div style={{ height: props.maxHeight + "px" }} className={`relative `}>
            <motion.div
                initial={{ height: props.hasTip ? TRIANGLE_HEIGHT : 0 }}
                animate={{ height: `${arrowHeight}px` }}
                transition={{ duration: 0.1, ease: "linear" }}
                className={`flex flex-col items-center`}
                ref={containerRef}
            >
                <div className="w-[12px] bg-primary flex-grow"></div>
                {props.hasTip && <div className="triangle-down"></div>}
            </motion.div>
        </div>
    );
}
