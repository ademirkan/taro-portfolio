"use client";
import { motion } from "framer-motion";

export default function FadeIn(props: {
    axis?: "x" | "y";
    startDelay?: number;
    initialOffset?: number | string;
    duration?: number;
    children: any;
}) {
    let container: any = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {},
        },
    };

    // Handle axis and initialOffset
    if (props.axis && props.axis === "x") {
        container.hidden["x"] =
            props.initialOffset !== undefined ? props.initialOffset : "100%";
    } else {
        container.hidden["y"] =
            props.initialOffset !== undefined ? props.initialOffset : "100%";
    }

    // handle startDelay
    if (props.startDelay) {
        container.show.transition["delay"] = props.startDelay;
    }

    // handle duration
    container.show.transition["opacity"] = props.duration || 0.25;
    container.show.transition[`${props.axis || "y"}`] = props.duration || 0.25;
    console.log(container);

    return (
        <motion.div variants={container} initial="hidden" animate="show">
            {props.children}
        </motion.div>
    );
}
