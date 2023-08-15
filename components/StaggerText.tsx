"use client";
import { motion } from "framer-motion";
interface IStaggerTextProps {
    children: string;
    startDelay: number;
    staggerDelay: number;
    staggerHeight: number;
    className?: string;
    childrenClassName?: string;
}

export default function StaggerText(props: IStaggerTextProps) {
    const container = {
        hidden: { opacity: 1 },
        show: {
            opacity: 1,
        },
    };

    return (
        <motion.div
            className={props.className || ""}
            variants={container}
            initial="hidden"
            animate="show"
        >
            {props.children.split(" ").map((word, index) => {
                return (
                    <motion.span
                        key={index}
                        className={props.childrenClassName || ""}
                        variants={{
                            hidden: { y: props.staggerHeight, opacity: 0 },
                            show: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    y: {
                                        delay:
                                            props.staggerDelay * (index + 2) +
                                            props.startDelay,
                                        duration: props.staggerDelay,
                                        type: "easeOut",
                                    },
                                    opacity: {
                                        delay:
                                            props.staggerDelay * index +
                                            props.startDelay,
                                        duration: 0,
                                    },
                                },
                            },
                        }}
                    >
                        {word}
                    </motion.span>
                );
            })}
        </motion.div>
    );
}
