import PrimaryButton from "./PrimaryButton";
import TextHead from "./TextHead";
import { Link } from "@inertiajs/react";

export default function Hero() {

    return (
        <>
            <div className={`w-full h-full flex flex-col-reverse lg:flex-row justify-between px-5 md:p-10 lg:px-20 lg:py-14 py-10 bg-[--third-color]`}>
                <div className="lg:w-[50%] h-full mt-5 md:mt-0 flex flex-col text-center lg:text-start">
                    <TextHead title={"Hunian Apartemen di tengah Kota Bandung"} color={"text-black"} />
                    <p className="open-sans mt-2 text-lg md:text-xl text-black opacity-70" data-aos="zoom-in">
                        Terinspirasi dari kota Bandung sebagai kota wisata, Bondepart Apartemen menawarkan Hunian yang nyaman, kamar-kamar yang elegan, dan keramahtamahan yang baik yang diwujudkan dengan Pelayanan 24 jam. Terletak di Jl. Cihampelas, Jalan Karapitan dan Jl. Pasteur kota bandung dengan lokasi yang sangat strategis untuk berlibur di kota Bandung
                    </p>
                    <div className="mt-5 flex justify-center lg:justify-start" data-aos="zoom-in" data-aos-delay="200">
                        <Link href="/contact">
                            <PrimaryButton title={"Kontak"} />
                        </Link>
                    </div>
                </div>
                <div className="lg:w-[40%] h-full flex justify-center lg:justify-end animation-primary">
                    <figure className="w-full md:w-96 h-72 md:h-[450px] relative">
                        <img className="w-60 h-72 hidden lg:block rounded-t-full border-8 border-[--primary-color] absolute top-10 -left-0 -translate-x-24 -rotate-12 bg-[--primary-color] hover:-translate-x-32 hover:rotate-0 transition duration-100 cursor-pointer" src="/images/IMG_3690.JPG" alt="Piority Image" />
                        <img className="w-full h-full rounded-t-full border-8 border-[--primary-color] relative bg-[--primary-color] lg:hover:translate-x-3 lg:hover:rotate-12 transition duration-100 cursor-pointer" src="/images/IMG_6532 2.JPG" alt="Piority Image" />
                    </figure>
                </div>
            </div>
        </>
    )
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
