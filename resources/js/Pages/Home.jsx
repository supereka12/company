import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import TextHead from "@/Components/TextHead";
import { FaCheck, FaSwimmingPool } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { MdOutlineSecurity } from "react-icons/md";
import PrimaryButton from "@/Components/PrimaryButton";
import Footer from "@/Components/Footer";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const images = ['https://res.cloudinary.com/dqnqorsvp/image/upload/v1738546501/bondepart/z95hzvhsag3czpmsxdge.jpg', 'https://res.cloudinary.com/dqnqorsvp/image/upload/v1738546911/bondepart/yooc4mvipknzuwtjd5dy.jpg', 'https://res.cloudinary.com/dqnqorsvp/image/upload/v1738550956/bondepart/f3key99zzenewvfiqljj.jpg']

const sliderVariants = {
    enter: { opacity: 0.1 }, // Gambar mulai dengan opacity 0 (tidak terlihat)
    center: { opacity: 1 }, // Gambar berada di posisi penuh dengan opacity 1 (terlihat sepenuhnya)
    exit: { opacity: 0.1 }, // Gambar menghilang dengan opacity 0
}

const FeatureItem = ({ title, description }) => (
    <li className="w-full flex gap-x-3" data-aos="zoom-in">
        <div className="w-7 h-7 flex justify-center items-center rounded-full bg-white">
            <FaCheck className="text-black opacity-80 font-bold" />
        </div>
        <div className="w-[80%]">
            <h2 className="text-2xl poppins-bold text-white opacity-80">{title}</h2>
            <p className="open-sans mt-2 text-lg md:text-2xl text-white opacity-70">{description}</p>
        </div>
    </li>
);

const FacilityItem = ({ icon, title, description }) => (
    <li className="w-full mt-3 flex gap-x-3" data-aos="zoom-in">
        {icon}
        <div className="w-[80%] mt-3">
            <h2 className="text-2xl poppins-bold opacity-80 text-[--primary-color]">{title}</h2>
            <p className="open-sans mt-2 text-lg md:text-2xl text-black opacity-70">{description}</p>
        </div>
    </li>
);

export default function HomePage() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 7000);
        return () => clearInterval(timer);
    }, [index]);

    const nextSlide = () => setIndex((prevIndex) => (prevIndex + 1) % images.length);
    const prevSlide = () => setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);


    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <>
            <Head title="Home" />
            <Navbar />
            <main>
                <section className="w-full min-h-screen h-auto md:h-screen relative">
                    <Hero />
                </section>

                {/* Mengapa Memilih Bondepart Section */}
                <section className="w-full min-h-screen h-auto px-5 py-10 md:p-10 lg:p-20 flex flex-col lg:flex-row gap-x-20 bg-gradient-to-br from-[--secondary-color] to-[--primary-color]">
                    <figure className="lg:w-[50%] h-auto">
                        <img src='/images/IMG_7140.jpg' alt="Interior Apartemen Bondepart" data-aos="fade-up-right" className="w-full h-96 md:h-[400px] lg:h-[600px] rounded-lg border-8 border-white object-cover" />
                    </figure>
                    <div className="w-full lg:w-[50%] mt-5 lg:mt-0 h-full flex flex-col justify-between">
                    {/* <motion.div animate={{ opacity: 1 }} transition={{ duration: 1 }} >
                        hallo
                    </motion.div> */}
                        <TextHead title="Kenapa harus Bondepart Apartemen?" color="text-white" />
                        <ul className="mt-5 space-y-8">
                            <FeatureItem title="Fasilitas yang lengkap" description="Kolam renang, Fasilitas olahraga, Area parkir luas dan keamanan 24 jam." />
                            <FeatureItem title="Lokasi yang strategis" description="Dekat dengan tempat wisata, stasiun dan bandara." />
                            <FeatureItem title="Unit yang Estetik" description="Memiliki konsep unit yang elegan dan modern." />
                            <FeatureItem title="Harga yang terjangkau" description="Harga yang terjangkau untuk hunian yang strategis." />
                        </ul>
                    </div>
                </section>

                {/* Fasilitas Unggulan Section */}
                <section className="w-full min-h-screen px-5 py-10 md:p-10 lg:p-20 flex flex-col-reverse lg:flex-row gap-x-8 bg-white">
                    <div className="w-full lg:w-[60%] mt-5 lg:mt-0">
                        <TextHead title="Fasilitas superior" color="text-black" />
                        <p className="open-sans mt-2 text-lg md:text-2xl text-black opacity-70" data-aos="zoom-in">
                            Fasilitas Apartemen yang dilengkapi dengan apapun yang anda butuhkan.
                        </p>
                        <ul className="mt-4 space-y-4">
                            <FacilityItem
                                icon={<FaSwimmingPool className="text-5xl text-[--primary-color]" />}
                                title="Kolam Renang"
                                description="Berenang dengan nyaman dan kolam yang luas."
                            />
                            <FacilityItem
                                icon={<CgGym className="text-5xl text-[--primary-color]" />}
                                title="Fasilitas Olahraga"
                                description="Tetap menjaga kesehatan ditengah kesibukan."
                            />
                            <FacilityItem
                                icon={<MdOutlineSecurity className="text-5xl text-[--primary-color]" />}
                                title="Keamanan 24 jam"
                                description="Sistem keamanan 24 jam dengan area parkir yang luas."
                            />
                        </ul>
                    </div>
                    <div className="lg:w-[40%] relative flex items-center justify-center overflow-hidden">
                        <div className="w-auto relative" >
                            <motion.img
                                key={index}
                                src={images[index]}
                                variants={sliderVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ opacity: { duration: 0.4 } }}
                                className=" h-full w-auto max-h-[600px] rounded-2xl shadow-lg object-cover"
                            />
                            <div className="w-full flex justify-center gap-x-5 absolute bottom-2">
                                    {images.map((data, no) => {
                                        return (
                                            <button key={no} onClick={() => setIndex(no)} className={`w-3 h-3 ${index == no ? 'bg-white' : 'bg-white/50'} rounded-full`} ></button>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full bg-[--third-color] flex flex-col items-center text-center px-5 py-10 md:p-10 lg:p-20">
                    {/* <TextHead title="" color="text-black" /> */}
                    <p className="w-full md:w-[70%] open-sans mt-2 text-lg md:text-2xl text-black opacity-70" data-aos="zoom-in">
                        Mari jelajahi dunia bersama Bondepart
                    </p>
                    <div className="mt-5" data-aos="zoom-in">
                        <Link href={"/contact"}>
                            <PrimaryButton title="Kontak" />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
