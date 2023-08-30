// // Inspired by Hyperplexed's video
// // https://www.youtube.com/watch?v=Jt3A2lNN2aE
// // Code based from https://blog.olivierlarose.com/tutorials/mouse-image-gallery
// "use client";
// import { useRef, useState } from "react";

// const MouseMoveImageGallery = ({
//     className = "absolute h-[100%] w-[100%]",
//     maxVisibleImageCount = 7,
//     imgScale = 100,
//     imgSrcs,
//     stepLength = 50,
// }: {
//     className?: string;
//     maxVisibleImageCount?: number;
//     imgSrcs: string[];
//     imgScale?: number;
//     stepLength?: number;
// }) => {
//     let refs: any = [];
//     let currentIndex = 0;
//     let steps = 0;
//     let nbOfImages = 0;

//     const manageMouseMove = (e: any) => {
//         const { clientX, clientY, movementX, movementY } = e;
//         steps += Math.abs(movementX) + Math.abs(movementY);

//         if (steps >= currentIndex * stepLength) {
//             if (nbOfImages == maxVisibleImageCount) {
//                 removeImage();
//             }
//             moveImage(clientX, clientY);
//         }
//         if (currentIndex == refs.length) {
//             currentIndex = 0;
//             steps = stepLength;
//         }
//     };

//     const removeImage = () => {
//         const images = getCurrentImages();
//         images[0].style.display = "none";
//         nbOfImages--;
//     };

//     const moveImage = (x: number, y: number) => {
//         const currentImage = refs[currentIndex].current;
//         currentImage.style.left = x + "px";
//         currentImage.style.top = y + "px";
//         currentImage.style.display = "block";
//         currentIndex++;
//         nbOfImages++;

//         setZIndex();
//     };

//     const setZIndex = () => {
//         const images = getCurrentImages();
//         for (let i = 0; i < images.length; i++) {
//             images[i].style.zIndex = i;
//         }
//     };

//     //Returns an array of the current img elements shown
//     const getCurrentImages = () => {
//         let images = [];
//         let indexOfFirst = currentIndex - nbOfImages;
//         for (let i = indexOfFirst; i < currentIndex; i++) {
//             let targetIndex = i;
//             if (targetIndex < 0) targetIndex += refs.length;
//             images.push(refs[targetIndex].current);
//         }
//         return images;
//     };

//     console.log(imgScale);

//     return (
//         <div className={className} onMouseMove={manageMouseMove}>
//             {imgSrcs.map((src, index) => {
//                 const ref = useRef(null);
//                 refs.push(ref);

//                 return (
//                     <img
//                         className={`absolute transform -translate-x-1/2 -translate-y-1/2 max-h-[300px] max-w-[300px] `}
//                         key={index}
//                         ref={ref}
//                         src={src}
//                     ></img>
//                 );
//             })}
//         </div>
//     );
// };

// export default MouseMoveImageGallery;
