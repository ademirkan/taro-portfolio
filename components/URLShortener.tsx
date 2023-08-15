"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formFont = Poppins({ subsets: ["latin"], weight: "500" });
const validateURL = (url: string) => {
    return validator.isURL(url, {
        require_protocol: false,
    });
};

// Animation states
const containerVariants = {
    hidden: { opacity: 0, y: 10, height: "47px" },
    initialAwaitingLongURL: {
        opacity: 1,
        y: 0,
        height: "47px",
        transition: {
            delay: 1.75,
            duration: 0.5,
        },
    },
    awaitingCustomURL: {
        height: "137px",
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.15,
        },
    },
    awaitingLongURL: {
        opacity: 1,
        y: 0,
        height: "47px",
        transition: {
            duration: 0.25,
        },
    },

    submitted: {},
};
const longURLSubmitButtonVariants = {
    enabled: {
        x: 0,
        transition: {
            type: "spring",
            duration: 0.25,
        },
    },
    disabled: {
        x: "100%",
        transition: {
            duration: 0.05,
            type: "spring",
        },
    },
};

const toastError = (msg: string) => {
    toast.error(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
};

const toastSuccess = (msg: string) => {
    toast.success(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
};

const toastPromise = (promise: Promise<any>) => {
    toast.promise(
        promise,
        {
            pending: {
                render() {
                    return "loading...";
                },
                icon: false,
            },
            success: {
                render({ data }) {
                    navigator.clipboard.writeText(`urllab.co/${data.id}`);
                    return (
                        <>
                            <b>urllab.co/{data.id}</b> has been copied to your
                            clipboard
                        </>
                    );
                },
                // other options
                icon: "📋",
            },
            error: {
                render({ data }) {
                    // When the promise reject, data will contains the error
                    return `Error: ${data}`;
                },
                icon: "😞",
            },
        },
        {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }
    );
};

export default function URLShortener() {
    const [formState, setFormState] = useState("initialAwaitingLongURL");
    const [isPending, setIsPending] = useState(false);
    const longUrlRef = useRef<HTMLInputElement>(null);
    const customUrlExtensionRef = useRef<HTMLInputElement>(null);

    const handleLongURLSubmission = () => {
        if (validateURL(longUrlRef.current!.value)) {
            setFormState((prev) => {
                if (
                    prev === "initialAwaitingLongURL" ||
                    prev === "awaitingLongURL"
                ) {
                    return "awaitingCustomURL";
                }
                return "awaitingLongURL";
            });
        } else {
            // handle invalid url
            const url = longUrlRef.current!.value;
            const msg =
                url.length > 0
                    ? `${url.length < 30 ? url : "That"} is not a valid URL!`
                    : "URL is empty!";
            toastError(msg);
        }
    };

    const handleCustomURLExtensionSubmission = () => {
        // if valid, submit post request
        // if invalid, toast error
        if (
            validateURL(
                "https://url.lab/" + customUrlExtensionRef.current!.value
            )
        ) {
            // submit
            handleSubmit();
        } else {
            // handle invalid url
            const msg = `${
                customUrlExtensionRef.current!.value
            } is not a valid URL extension!`;
            toastError(msg);
        }
    };

    async function handleSubmit() {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: customUrlExtensionRef.current!.value,
                url: longUrlRef.current!.value,
            }),
        };
        setIsPending(true);
        toastPromise(
            new Promise((resolve, reject) => {
                fetch("https://www.urllab.co/create-url", requestOptions)
                    .then((response) => response.json())
                    .then((data) => {
                        setIsPending(false);
                        if (data.error) {
                            reject(data.error);
                        } else {
                            // empty inputs
                            longUrlRef.current!.value = "";
                            customUrlExtensionRef.current!.value = "";
                            setFormState("awaitingLongURL");

                            // focus on long url input after 10ms
                            setTimeout(() => {
                                longUrlRef.current!.focus();
                                resolve(data);
                            }, 0);
                        }
                    })
                    .catch((error) => {
                        setIsPending(false);
                        reject(error);
                    });
            })
        );
    }

    useEffect(() => {
        if (formState === "awaitingCustomURL") {
            setTimeout(() => {
                customUrlExtensionRef.current!.focus();
            }, 100);
        }
    }, [formState]);

    return (
        <motion.div
            id="url-form"
            variants={containerVariants}
            initial={"hidden"}
            animate={formState}
            className="overflow-hidden relative sm:w-[400px] w-[290px] bg-transparent border-primary border-[1px] rounded-xl flex flex-col align-top"
        >
            <div
                id="long-url-row"
                className="w-[100%] h-[45px] flex flex-row relative "
            >
                <div className="flex w-12 items-center justify-center">
                    <FontAwesomeIcon
                        className="text-primary !box-border"
                        icon={faLink}
                    />
                </div>
                <input
                    onFocus={() => {
                        if (formState == "awaitingCustomURL") {
                            setFormState("awaitingLongURL");
                        }
                    }}
                    className={`${formFont.className} h-[100%] py-4 px-1 flex-grow bg-transparent outline-none text-[0.8rem] text-primary placeholder-secondary`}
                    placeholder={"Paste your long URL here"}
                    onPaste={(e) => {
                        setTimeout(() => handleLongURLSubmission(), 0);
                    }}
                    onKeyDown={(e) => {
                        e.key == "Enter" && handleLongURLSubmission();
                        if (e.key === " ") {
                            e.preventDefault();
                        }
                    }}
                    ref={longUrlRef}
                    type="text"
                />

                <motion.button
                    disabled={
                        (formState != "initialAwaitingLongURL" &&
                            formState != "awaitingLongURL") ||
                        isPending
                    }
                    variants={longURLSubmitButtonVariants}
                    animate={
                        formState === "initialAwaitingLongURL" ||
                        formState === "awaitingLongURL"
                            ? "enabled"
                            : "disabled"
                    }
                    onClick={() => handleLongURLSubmission()}
                    className="btn btn-primary btn-sm h-[100%] rounded-xl border-4 border-base-100 hover:border-base-100"
                >
                    Shorten
                </motion.button>
            </div>
            <div
                id="custom-url-row"
                className="w-[100%] h-[45px] flex flex-row items-center relative"
            >
                <div className="flex flex-grow-0 flex-shrink-0 w-12 items-center justify-center">
                    <FontAwesomeIcon
                        className="text-primary !box-border"
                        icon={faPaperclip}
                    />
                </div>
                <span
                    className={`${formFont.className} flex-grow-0 bg-primary text-base-100 py-1 px-2 text-[0.8rem] rounded-lg`}
                >
                    urllab.co/
                </span>
                <input
                    disabled={formState != "awaitingCustomURL" || isPending}
                    className={`${formFont.className} h-[100%] py-4 px-1 flex-grow min-w-[20px] bg-transparent outline-none text-[0.8rem] text-primary placeholder-secondary `}
                    placeholder={"DyQRt"}
                    onPaste={(e) => {
                        setTimeout(
                            () => handleCustomURLExtensionSubmission(),
                            0
                        );
                    }}
                    onKeyDown={(e) => {
                        e.key == "Enter" &&
                            handleCustomURLExtensionSubmission();
                        if (e.key === " ") {
                            e.preventDefault();
                            return;
                        }
                        if (
                            (customUrlExtensionRef.current!.value === "" &&
                                e.key == "Backspace") ||
                            e.key == "Escape"
                        ) {
                            // focus on long url input after 10ms
                            setTimeout(() => {
                                longUrlRef.current!.focus();
                            }, 0);
                            return;
                        }
                    }}
                    ref={customUrlExtensionRef}
                    type="text"
                />
                <span
                    className={`${formFont.className} flex-grow-0 text-secondary text-xs p-2 select-none`}
                >
                    (optional)
                </span>
            </div>
            <button
                className="btn btn-primary w-[calc(100%-8px)] btn-sm self-center relative bottom-[-9px]"
                disabled={formState != "awaitingCustomURL" || isPending}
                onClick={handleCustomURLExtensionSubmission}
            >
                Submit
            </button>
        </motion.div>
    );
}
