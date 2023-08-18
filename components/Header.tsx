"use client";

// import useIsScrollAtTop from "@/hooks/useIsScrollAtTop";
// import useMediaQuery from "@/hooks/useMediaQuery";
// import { useEffect, useState } from "react";
// import DropdownNavbar from "./DropdownNavbar";
// import { Turn as Hamburger } from "hamburger-react";
// import { ToastContainer } from "react-toastify";
// import { useRouter } from "next/navigation";

// export default function Header() {
//     const router = useRouter();
//     const isScrollAtTop = useIsScrollAtTop();
//     const isMobile = useMediaQuery("(max-width: 768px)");
//     const [isHamburgerToggled, setIsHamburgerToggled] = useState(false);

//     const handleToggle = (toggled: boolean) => {
//         document.body.style.overflow = toggled ? "hidden" : "auto";
//         setIsHamburgerToggled(toggled);
//     };

//     const handleSignUpClick = () => {
//         handleToggle(false);
//         setIsHamburgerToggled(false);
//         router.push("/not-ready");
//     };

//     const handleLoginClick = () => {
//         handleToggle(false);
//         setIsHamburgerToggled(false);
//         router.push("/not-ready");
//     };

//     const handleShortenClick = () => {
//         handleToggle(false);
//         setIsHamburgerToggled(false);
//         router.push("/#hero");
//     };

//     const handleAboutClick = () => {
//         handleToggle(false);
//         setIsHamburgerToggled(false);
//         router.push("/#about");
//     };

//     const handleTrackClick = () => {
//         handleToggle(false);
//         setIsHamburgerToggled(false);
//         router.push("/#about");
//     };

//     useEffect(() => {
//         if (isMobile) {
//             return;
//         }
//         handleToggle(false);
//     }, [isMobile]);

//     return (
//         <>
//             <header
//                 className={`fixed flex flex-row w-[100%] h-20 items-center gap-12 z-50 box-content ${
//                     !isScrollAtTop &&
//                     "border-b-[1px] border-secondary border-opacity-25"
//                 }`}
//             >
//                 <nav className="flex flex-row items-center flex-grow justify-between px-[5%]">
//                     <Logo />
//                     <div
//                         className={`${
//                             !isScrollAtTop
//                                 ? "animate-invisible"
//                                 : "animate-visible"
//                         }`}
//                     >
//                         <ul
//                             className={`md:flex hidden flex-row relative top-[-1px] gap-4`}
//                         >
//                             <li>
//                                 <a
//                                     onClick={handleShortenClick}
//                                     className="txtbtn btn-sm cursor-pointer select-none"
//                                 >
//                                     Projects
//                                 </a>
//                             </li>
//                             <li>
//                                 <a
//                                     onClick={handleTrackClick}
//                                     className="txtbtn btn-sm cursor-pointer select-none"
//                                 >
//                                     Track
//                                 </a>
//                             </li>
//                             <li>
//                                 <a
//                                     onClick={handleAboutClick}
//                                     className="txtbtn btn-sm cursor-pointer select-none"
//                                 >
//                                     About
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                     <div id="nav-right">
//                         <ul
//                             id="nav-login-btns"
//                             className="flex-row gap-2 md:flex hidden"
//                         >
//                             <li>
//                                 <button
//                                     className="btn btn-outline btn-sm"
//                                     onClick={handleLoginClick}
//                                 >
//                                     Log in
//                                 </button>
//                             </li>
//                             <li>
//                                 <button
//                                     className="btn btn-primary btn-sm"
//                                     onClick={handleSignUpClick}
//                                 >
//                                     Sign up
//                                 </button>
//                             </li>
//                         </ul>
//                         {isMobile && (
//                             <div
//                                 id="nav-hamburger"
//                                 className="txtbtn md:hidden"
//                             >
//                                 <Hamburger
//                                     toggled={isHamburgerToggled}
//                                     toggle={setIsHamburgerToggled}
//                                     onToggle={handleToggle}
//                                     color="hsl(var(--p))"
//                                     distance="lg"
//                                     size={28}
//                                     rounded
//                                     direction="right"
//                                 ></Hamburger>
//                             </div>
//                         )}
//                     </div>
//                 </nav>
//             </header>
//             <DropdownNavbar isOpen={isMobile && isHamburgerToggled}>
//                 <ul
//                     className={`flex flex-col items-center relative gap-4 w-[80%]`}
//                 >
//                     <li>
//                         <button
//                             className="btn btn-primary btn-sm"
//                             onClick={handleSignUpClick}
//                         >
//                             Sign up
//                         </button>
//                     </li>
//                     <li>
//                         <button
//                             className="btn btn-outline btn-sm"
//                             onClick={handleLoginClick}
//                         >
//                             Log in
//                         </button>
//                     </li>
//                     <li>
//                         <a
//                             href="#nav-left"
//                             className="txtbtn btn-sm"
//                             onClick={handleShortenClick}
//                         >
//                             Shorten
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="#nav-left"
//                             className="txtbtn btn-sm"
//                             onClick={handleAboutClick}
//                         >
//                             About
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="#nav-left"
//                             className="txtbtn btn-sm"
//                             onClick={handleTrackClick}
//                         >
//                             Track
//                         </a>
//                     </li>
//                 </ul>
//             </DropdownNavbar>
//             <ToastContainer
//                 position="top-right"
//                 autoClose={3000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="dark"
//             />
//         </>
//     );
// }

export default function Header() {
    return <div>header</div>;
}

const Logo = () => {
    return (
        <a className="flex flex-row items-center btn btn-ghost" href="/">
            Arif Demirkan
        </a>
    );
};
