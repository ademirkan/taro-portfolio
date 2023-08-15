import { motion } from "framer-motion";

export default function DropdownNavbar(props: any) {
    const dropdownVariants = {
        open: {
            y: 0,
            transition: {
                duration: 0.2,
            },
        },
        closed: {
            y: "-100%",
            transition: {
                duration: 0.25,
            },
        },
    };

    return (
        <motion.div
            id="mobile-dropdown-navbar"
            className="flex flex-col fixed h-[100vh] w-[100%] bg-base-100 items-center justify-center z-20"
            initial="closed"
            animate={props.isOpen ? "open" : "closed"}
            variants={dropdownVariants}
            style={{
                width: "100vw",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: 0,
            }}
        >
            {props.children}
        </motion.div>
    );
}
