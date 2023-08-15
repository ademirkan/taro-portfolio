"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function RenderOnceInView(props: {
    once: boolean;
    children: any;
    margins?: string;
    className?: string;
    placeholderClassName?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: props.margins || "0px 0px -50px 0px",
    });

    return (
        <div
            ref={ref}
            className={`renderOnceInViewContainer ${props.className} ${
                !isInView && props.placeholderClassName
            }`}
        >
            {isInView && props.children}
        </div>
    );
}
