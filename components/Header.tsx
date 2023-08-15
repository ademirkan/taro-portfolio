"use client";

import useIsScrollAtTop from "@/hooks/useIsScrollAtTop";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";
import DropdownNavbar from "./DropdownNavbar";
import { Turn as Hamburger } from "hamburger-react";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    const isScrollAtTop = useIsScrollAtTop();
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [isHamburgerToggled, setIsHamburgerToggled] = useState(false);

    const handleToggle = (toggled: boolean) => {
        document.body.style.overflow = toggled ? "hidden" : "auto";
        setIsHamburgerToggled(toggled);
    };

    const handleSignUpClick = () => {
        handleToggle(false);
        setIsHamburgerToggled(false);
        router.push("/not-ready");
    };

    const handleLoginClick = () => {
        handleToggle(false);
        setIsHamburgerToggled(false);
        router.push("/not-ready");
    };

    const handleShortenClick = () => {
        handleToggle(false);
        setIsHamburgerToggled(false);
        router.push("/#hero");
    };

    const handleAboutClick = () => {
        handleToggle(false);
        setIsHamburgerToggled(false);
        router.push("/#about");
    };

    const handleTrackClick = () => {
        handleToggle(false);
        setIsHamburgerToggled(false);
        router.push("/#about");
    };

    useEffect(() => {
        if (isMobile) {
            return;
        }
        handleToggle(false);
    }, [isMobile]);

    return (
        <>
            <header
                className={`fixed flex flex-row w-[100%] h-20 items-center gap-12 z-50 box-content ${
                    !isScrollAtTop &&
                    "border-b-[1px] border-secondary border-opacity-25"
                }`}
            >
                <nav className="flex flex-row items-center flex-grow justify-between px-[5%]">
                    <Logo />
                    <div
                        className={`${
                            !isScrollAtTop
                                ? "animate-invisible"
                                : "animate-visible"
                        }`}
                    >
                        <ul
                            className={`md:flex hidden flex-row relative top-[-1px] gap-4`}
                        >
                            <li>
                                <a
                                    onClick={handleShortenClick}
                                    className="txtbtn btn-sm cursor-pointer select-none"
                                >
                                    Shorten
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={handleTrackClick}
                                    className="txtbtn btn-sm cursor-pointer select-none"
                                >
                                    Track
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={handleAboutClick}
                                    className="txtbtn btn-sm cursor-pointer select-none"
                                >
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="nav-right">
                        <ul
                            id="nav-login-btns"
                            className="flex-row gap-2 md:flex hidden"
                        >
                            <li>
                                <button
                                    className="btn btn-outline btn-sm"
                                    onClick={handleLoginClick}
                                >
                                    Log in
                                </button>
                            </li>
                            <li>
                                <button
                                    className="btn btn-primary btn-sm"
                                    onClick={handleSignUpClick}
                                >
                                    Sign up
                                </button>
                            </li>
                        </ul>
                        {isMobile && (
                            <div
                                id="nav-hamburger"
                                className="txtbtn md:hidden"
                            >
                                <Hamburger
                                    toggled={isHamburgerToggled}
                                    toggle={setIsHamburgerToggled}
                                    onToggle={handleToggle}
                                    color="hsl(var(--p))"
                                    distance="lg"
                                    size={28}
                                    rounded
                                    direction="right"
                                ></Hamburger>
                            </div>
                        )}
                    </div>
                </nav>
            </header>
            <DropdownNavbar isOpen={isMobile && isHamburgerToggled}>
                <ul
                    className={`flex flex-col items-center relative gap-4 w-[80%]`}
                >
                    <li>
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={handleSignUpClick}
                        >
                            Sign up
                        </button>
                    </li>
                    <li>
                        <button
                            className="btn btn-outline btn-sm"
                            onClick={handleLoginClick}
                        >
                            Log in
                        </button>
                    </li>
                    <li>
                        <a
                            href="#nav-left"
                            className="txtbtn btn-sm"
                            onClick={handleShortenClick}
                        >
                            Shorten
                        </a>
                    </li>
                    <li>
                        <a
                            href="#nav-left"
                            className="txtbtn btn-sm"
                            onClick={handleAboutClick}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#nav-left"
                            className="txtbtn btn-sm"
                            onClick={handleTrackClick}
                        >
                            Track
                        </a>
                    </li>
                </ul>
            </DropdownNavbar>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
}

const Logo = () => {
    return (
        <a className="flex flex-row w-36 items-center btn btn-ghost" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 777.52 166.48">
                <path
                    className="fill-white"
                    d="m56,0h5c.94,3.2,1.74,3.49,1.1,8-1.52,1.3-1.93,1.8-6.1,2-1.3-2.42-1.8-2.83-2-7,1.62-1.35,1.12-.64,2-3Zm21,64c12.5-1.81,10.62-13.78,10-28-5.7-3.06-5.71-10.61-4-18,8.52-5.19,28.65-3.15,41.1-3,1.92.8,1.17.35,2.9,1,.33.1.67,2,1,3,1.75,2.64,1.13,9.69.1,14-5.77,4.28-4.42,16-4.1,26.1,34.38,9.59,47.45,57.06,24.1,87-15.86,23.93-48.92,19.9-89,19-9.12,0-44.11,3.7-50.1-1-5.08-.69-5.79-3.9-9-8v-13c1.78-4.25,8.02-9.63,11-15,7.78-10.78,14.23-22.41,22-35,1.77-1.76,5.94-4.99,7-9v-25.1c-5.26-3.29-5.33-8.08-5.9-17.9,1.7-.12,1.26.63,1.9-2,.1.57,2,.23,2.1-.1,5.79-3.11,32.71-1.11,40.9-1.9.85,2.36,1.81,3.77,3,4v13.9c-1.5,4.1-4.39,2.35-5,9Zm-11-47c3.37,1.52,3.7,2.72,5.1,5,.57.33.23.67-1,1-.36,3.82-1.13,3.91-7,4-.4-2.42-.9-2.83-1.1-7.9,1.46.05,2.87-.91,4-2.1Zm-18,4h5c1.3,2.42,1.8,2.83,1.1,7-1.56,1.53-1.38,2.29-5.1,2.1-2.67-3.11-3.51-4.42-1-9.1Zm72,3c-8.94-.13-21.84-1.43-29,1v2c7.55,4.84,6.31,29.19,4,39.1-9.53,4.02-18.45,5.27-18,18,7.94,9.14,14.63,21.45,21,30,1.43,3.03,1.87,6.62,4,7,16.04,10.56,50.18,6.36,50-15-2.09-2.29-1.45-7.39-3.9-11.1-2.17-7.35-8.95-16.56-16-21-4.73-4.06-14.92-3.36-17-12.9-.27-.9-1.35-24.45-.1-28.1,1.34-3.91,4.16-3.48,5-9Zm98.1,6c.48,25.33-5.07,78.73,12,84.1,8.38,6.83,20.68,2.69,25-2.1,13.48-11.55,9.38-57.41,8-82h19.9c.67,51.06,9.64,95.67-33,105.1-8.85,3.04-19.72-.1-25-3-34.41-12.15-26.59-55.24-26.9-102,7.57.57,14.23.23,20-.1Zm93.9,0c41.8-.78,79.56-5.56,78.1,36.1.83,5.95.55,9.95-1.1,13-3.67,9.67-11.96,12.22-15.9,17.9,6.92,6.54,16.36,27.5,18,36.1h-22c-.02-3.08-13.07-32.68-16-34.1h-21.1v34.1h-20V30Zm107,0h19v85.1h45v18h-64V30Zm106,.1h7c2.59,8.72.1,22.29,1,31v65h49.1v8h-57.1V30.1Zm157.1,104h-8c-.13-1.86-7.1-24.37-9-26h-48c0,3.49-7.24,26.28-9,26h-9c0,.23,0-.43,0-2,6.38-6.51,7.45-17.87,10.9-28,5.81-14.65,12.18-31.53,17.1-47.1,5.15-11.38,3.2-26.37,19.9-26.9,3.06,15.91,10.45,31.42,15.1,44.9,5.38,10.87,6.43,21.13,10,31.1,4.41,9.44,9.35,18.69,10,28Zm22.9-104c15.8.67,39.68-2.25,51.1,2.9,8.28,3.09,10.86,9.65,15,15,2.34,14.82.64,25.68-11,31,1.23.33,1.57.67,1.9.1,4.14,4.99,10.11,7.6,13,12.9.1,3.33,2,6.67,2.1,9.1,5.08,40.12-36.72,34.51-72.1,33V30.1Zm8.1,8.9c-2.22,9.31-.18,25.77-.1,36.1,7.99,3.59,22.18,1.98,31.1,1.9,6.66-3.51,13.13-2.68,16-8.9,3.36-2.57,4.16-6.94,3-13.1.06-19.79-28.11-16.59-50-16Zm-73,2.1c-5.77,20.57-12.43,40.24-20,59.9h42v-1.9c-8.92-12.18-10.75-45.95-22-58ZM44,46.1c1.03,5.54,3.71,4.94,5,7.9v18c0,22.52-9.96,31.41-19.9,45-1.94,4.27-5.86,6.92-8,13h2.9c3.35-2.06,11.9-1,17-1.9h54c.33.57.67.23.1-.1-4.75-4.04-7.3-12.01-12-18-8.45-14.76-15.11-16.14-16-42v-13c2.07-3.35,4.93-3.39,5.9-8.9h-29Zm288,2v32.9c9.12.22,25.25,1.99,30.1-2,4.81-1.2,7.14-3.54,7-8.9,3.24-2.23,3.22-8.97,0-13-.02-2.81-1.36-4.31-4.1-7-5.64-3.46-23.73-1.25-33-2Zm-275,4.9c1.67.33,3.33.67,5,1,.65,1.26,1.09,2.07,1.1,3,.27,1.75.71.97-1,2-.22,2.87.73,1.84-3,2.1-6.52,3.31-4.7-4.32-2.1-8.1Zm656.1,30.1c-2.66,11.54-.18,30.26-.1,42,9.32,4.03,25.77,1.98,37,1,5.26-2.44,12.56-2.07,16-7.1,3.49-5.1,3.9-15.21,1-21.9-8.73-16.52-27.46-13.77-53.9-14ZM49,101.1h5c.85,2.36,1.81,3.77,3,4.9-.63,1.75-.19.97-1,2-1.12,2.87-.17,1.84-3,2.1-1.07,1.65-.95,1.5-3,1.9-2.67-4.01-3.51-5.32-1-10.9Zm25,13h4c1.71,3.62,2.54,3.4,3,7-2.72,2.61-2.5,3.44-7,3-3.15-3.88-3.02-4.32,0-10Zm-36,1h6c1.3,3.32,1.8,3.73,2,7-2.42,2.2-2.83,2.7-7.9,2,.05-.56-.91-1.97-2.1-3.1.63-1.75.19-.97,1-2,.33-1,.67-2.9,1-3.9Z"
                />
            </svg>
        </a>
    );
};
