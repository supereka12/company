import { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import TextHead from "./TextHead";
import { Link } from "@inertiajs/react";
import { motion, AnimatePresence, useScroll, useTransform, color } from "framer-motion";



export default function Hero() {
  
}


// const AnimatedSlider = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 3000);
//     return () => clearInterval(timer);
//   }, [index]);

//   const nextSlide = () => setIndex((prevIndex) => (prevIndex + 1) % images.length);
//   const prevSlide = () => setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

//   return (
//     <div className="relative w-full max-w-2xl mx-auto p-4 overflow-hidden">
//       <div className="relative flex items-center justify-center">
//         <AnimatePresence initial={false} exitBeforeEnter>
//           <motion.img
//             key={index}
//             src={images[index]}
//             variants={sliderVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             className="absolute w-full rounded-2xl shadow-lg"
//           />
//         </AnimatePresence>
//       </div>
//       <div className="flex justify-between mt-4">
//         <button onClick={prevSlide}>Previous</button>
//         <button onClick={nextSlide}>Next</button>
//       </div>
//       <div className="flex justify-center mt-4 space-x-2">
//         {images.map((_, idx) => (
//           <div
//             key={idx}
//             className={`w-3 h-3 rounded-full ${index === idx ? "bg-blue-500" : "bg-gray-300"}`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AnimatedSlider;
