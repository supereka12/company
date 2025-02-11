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
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { GrSwim } from "react-icons/gr";
import { IoLocation } from "react-icons/io5";
import { IoBed } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";

const images = ['https://res.cloudinary.com/dqnqorsvp/image/upload/v1738546501/bondepart/z95hzvhsag3czpmsxdge.jpg', 'https://res.cloudinary.com/dqnqorsvp/image/upload/v1738546911/bondepart/yooc4mvipknzuwtjd5dy.jpg', 'https://res.cloudinary.com/dqnqorsvp/image/upload/v1738550956/bondepart/f3key99zzenewvfiqljj.jpg']

const sliderVariants = {
    enter: { opacity: 0.1 }, // Gambar mulai dengan opacity 0 (tidak terlihat)
    center: { opacity: 1 }, // Gambar berada di posisi penuh dengan opacity 1 (terlihat sepenuhnya)
    exit: { opacity: 0.1 }, // Gambar menghilang dengan opacity 0
}

const FeatureIconItem = ({ Icon, style, scrollY, from, to, x, y }) => {
    const translateX = useTransform(scrollY, [from, to], ['50%', x])
    const translateY = useTransform(scrollY, [from, to], ['100%', y])
    const opacity = useTransform(scrollY, [from, to], [0, 1])
    return (
        <motion.div style={{ x: translateX, y: translateY, opacity }}>
            <Icon className={style} />
        </motion.div>
    )
}


const FeatureItem = ({ title, description, scrollY, from, to }) => {
    const opacity = useTransform(scrollY, [from, to], [0, 1])
    const translateX = useTransform(scrollY, [from, to], [100, 0])

    return (
        <motion.li style={{ opacity, x: translateX }} className={`w-full flex gap-x-3`}>
            <div className="w-7 h-7 flex justify-center items-center rounded-full bg-white">
                <FaCheck className="text-black opacity-80 font-bold" />
            </div>
            <div className="w-[80%]">
                <h2 className="text-2xl poppins-bold text-white opacity-80">{title}</h2>
                <p className="open-sans mt-2 text-lg md:text-2xl text-white opacity-70">{description}</p>
            </div>
        </motion.li>
    )
}

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
                <Hero />
                {/* <HeadLine /> */}
                {/* Mengapa Memilih Bondepart Section */}
                <WhyChoose />

                {/* <section className="h-96 bg-blue-400" >
                    <div className="translate-y-full transform translate-x-full w-40 h-40 bg-red-500">

                    </div>
                </section> */}


                {/* Fasilitas Unggulan Section */}
                <FacilitySuperior />
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


const Hero = () => {
    const data = [{ name: "Jarrdin Apartemen by", image: "/images/hero_jarrdin.JPG", address: "Jl. Cihampelas Dalam No.10, Cipaganti, Kecamatan Coblong, Kota Bandung, Jawa Barat 40131", location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126751.53216200261!2d107.46096234335937!3d-6.892351599999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7362211001d%3A0xc52813d6dd53e769!2sJarrdin%20Apartemen%20by%20Bon.depart!5e0!3m2!1sid!2sid!4v1736494087305!5m2!1sid!2sid" }, { name: "Gateway Pasteur by", image: "/images/hero_gateway.jpg", address: "Jln. Gunung Batu No 203, Gateway Pasteur Apartment, Diamond A BS29, Kota Bandung, Jawa Barat 40175", location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0012870880732!2d107.5657234!3d-6.8904478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e514475c499b%3A0x14f7ec6eedd81781!2sGateway%20Pasteur%20by%20Bon.depart!5e0!3m2!1sen!2sid!4v1737451622578!5m2!1sen!2sid" }, { name: "Grand Asia Afrika by", image: "/images/hero_grand_asia_afrika.jpg", address: "Jl. Karapitan No.01, Burangrang, Kec. Lengkong, Kota Bandung, Jawa Barat 40261", location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7213581738074!2d107.61559477499652!3d-6.923874443075854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e62b9c22d201%3A0xc0903468e1f49fc7!2sApartemen%20Grand%20Asia%20Afrika%2C%20Jl.%20Karapitan%20No.1%2C%20Paledang%2C%20Lengkong%2C%20Bandung%20City%2C%20West%20Java%2040261!5e0!3m2!1sen!2sid!4v1737451812170!5m2!1sen!2sid" },]
    const [index, setIndex] = useState(0)
    const [location, setLocation] = useState({ status: false, data: {} })
    const section = useRef(null)
    const { scrollYProgress } = useScroll({ target: section, offset: ['start end', 'end start'] })

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 15000);
        return () => clearInterval(timer);
    }, [index]);
    const nextSlide = () => setIndex((prevIndex) => (prevIndex + 1) % data.length);

    return (
        <section ref={section} className="w-full min-h-screen h-auto md:h-screen relative">
            <AnimatePresence mode="wait" >
                {location.status && (
                    <motion.div initial={{ clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)' }} animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} exit={{ clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)' }} transition={{ duration: 0.5 }} className={`w-full h-screen fixed top-0 left-0 z-20 bg-black/50 flex justify-center items-center`}>
                        <motion.div initial={{ clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)' }} animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} exit={{ clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)' }} transition={{ duration: 0.5, delay: 0.5 }} className="w-2/4 h-96 flex gap-x-2 bg-white shadow rounded-lg relative overflow-hidden">
                            <iframe src={location.data.location} className="w-full h-full" loading="lazy"></iframe>
                            <div onClick={() => setLocation(prev => ({ ...prev, status: false }))} className="p-2 bg-white absolute top-0 right-0 cursor-pointer group">
                                <IoMdClose className="text-xl group-hover:opacity-60 opacity-90" />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className={`w-full h-full flex flex-col-reverse lg:flex-row justify-between px-5 md:pl-10 lg:pl-20 lg:pr-0 bg-[--third-color] relative overflow-hidden`}>
                {/* <div className="lg:w-[50%] h-full mt-5 md:mt-0 flex flex-col text-center lg:text-start">
                    <TextHead title={"Hunian Apartemen di tengah Kota Bandung"} color={"text-black"} />
                    <p className="open-sans mt-2 text-lg md:text-xl text-black opacity-70" data-aos="zoom-in">
                        Terinspirasi dari kota Bandung sebagai kota wisata, Bondepart Apartemen menawarkan Hunian yang nyaman, kamar-kamar yang elegan, dan keramahtamahan yang baik yang diwujudkan dengan Pelayanan 24 jam. Terletak di Jl. Cihampelas, Jalan Karapitan dan Jl. Pasteur kota bandung dengan lokasi yang sangat strategis untuk berlibur di kota Bandung
                    </p>
                    <motion.p key={index} initial={{opacity: 0}} animate={{ opacity: 1 }} >{title[index]}</motion.p>
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
                </div> */}
                <div className="md:w-[50%] flex flex-col justify-center" >
                    <AnimatePresence mode="wait" >
                        <motion.h1 key={index} initial={{ x: -800, opacity: 0 }} animate={{ x: 0, opacity: 0.7 }} exit={{ x: -800, opacity: 0 }} transition={{ duration: 1.7, ease: 'easeInOut' }} className={`text-3xl md:text-5xl poppins-bold text-balck tracking-wider leading-[45px] md:leading-[70px] text-shadow opacity-80`}>{data[index].name} <span className="text-[--primary-color]">Bondepart</span></motion.h1>
                    </AnimatePresence>
                    <AnimatePresence mode="wait" >
                        <motion.p key={index} initial={{ x: -800, opacity: 0 }} animate={{ x: 0, opacity: 0.7 }} exit={{ x: -800, opacity: 0 }} transition={{ duration: 1.7, ease: 'easeInOut', delay: 0.5 }} className="open-sans mt-2 text-xl md:text-xl text-black opacity-70">{data[index].address}</motion.p>
                    </AnimatePresence>
                    <AnimatePresence mode="wait" >
                        <motion.button onClick={() => setLocation({ status: true, data: data[index] })} whileHover={{ scale: 1.2 }} key={index} initial={{ x: -800, opacity: 0 }} animate={{ x: 0, opacity: 0.7 }} exit={{ x: -800, opacity: 0 }} transition={{ duration: 1.7, ease: 'easeInOut', delay: 0.8 }} className="w-40 py-2 mt-5 flex gap-x-2 justify-center items-center text-white poppins-bold bg-[--primary-color]">
                            <FaLocationDot />
                            <span>Cari Lokasi</span></motion.button>
                    </AnimatePresence>
                </div>
                <div className="w-2/5 md:w-[40%] h-auto md:h-full top-0 left-0 md:relative overflow-hidden" >
                    <figure className="w-full h-full flex justify-center items-center">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={index}
                                initial={{ opacity: 0, clipPath: 'circle(0% at 50% 50%)' }}
                                animate={{ opacity: 1, clipPath: 'circle(100% at 50% 50%)' }}
                                exit={{ clipPath: 'circle(0% at 50% 50%)', rotate: 360 }}
                                transition={{ duration: 2.2 }}
                                className="w-full h-full object-cover"
                                src={data[index].image}
                                alt="Image hero"
                            />
                        </AnimatePresence>
                    </figure>
                </div>
            </div>
        </section>
    )
}

const WhyChoose = () => {
    const title = "Kenapa harus Bondepart Apartemen?"
    const words = title.split(" ");
    const section = useRef(null)
    const { scrollYProgress } = useScroll({ target: section, offset: ['start end', 'end end'] })

    // Define opacity for each word based on scrollYProgress
    const wordOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

    return (
        <section ref={section} className="w-full h-[250vh] px-5 py-10 md:p-10 lg:p-20 bg-gradient-to-br from-[--secondary-color] to-[--primary-color] relative">
            <div className="w-full h-screen pt-10 flex flex-col lg:flex-row gap-x-20 sticky top-0 overflow-hidden">
                <div className="lg:w-[40%] h-full relative">
                    <FeatureIconItem Icon={GrSwim} style={"text-9xl scale-150 text-white"} scrollY={scrollYProgress} from={0.2} to={0.28} x={'25%'} y={'35%'} />
                    <FeatureIconItem Icon={IoLocation} style={"text-9xl scale-150 text-white"} scrollY={scrollYProgress} from={0.43} to={0.51} x={'75%'} y={'-60%'} />
                    <FeatureIconItem Icon={IoBed} style={"text-9xl scale-150 text-white"} scrollY={scrollYProgress} from={0.56} to={0.64} x={'25%'} y={'35%'} index={2} />
                    <FeatureIconItem Icon={MdOutlineAttachMoney} style={"text-9xl scale-150 text-white"} scrollY={scrollYProgress} from={0.79} to={0.87} x={'75%'} y={'-60%'} />
                </div>
                <div className="w-full lg:w-[60%] mt-5 lg:mt-0 h-full">
                    <motion.div
                        className={`text-3xl md:text-5xl poppins-bold text-balck leading-[45px] md:leading-[70px] text-white text-shadow opacity-80`}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {words.map((word, index) => {
                            const wordDelay = index * 0.2; // Delay each word by 0.2 seconds
                            return (
                                <motion.span
                                    key={index}
                                    className="inline-block mr-2"
                                    custom={index}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: { delay: wordDelay }
                                        }
                                    }}
                                    style={{
                                        opacity: wordOpacity // Apply opacity based on scroll progress
                                    }}
                                >
                                    {word}
                                </motion.span>
                            );
                        })}
                    </motion.div>
                    <ul className="h-full mt-5 space-y-8">
                        <FeatureItem title="Fasilitas yang lengkap" description="Kolam renang, Fasilitas olahraga, Area parkir luas dan keamanan 24 jam." scrollY={scrollYProgress} from={0.2} to={0.28} />
                        <FeatureItem title="Lokasi yang strategis" description="Dekat dengan tempat wisata, stasiun dan bandara." scrollY={scrollYProgress} from={0.43} to={0.51} />
                        <FeatureItem title="Unit yang Estetik" description="Memiliki konsep unit yang elegan dan modern." scrollY={scrollYProgress} from={0.56} to={0.64} />
                        <FeatureItem title="Harga yang terjangkau" description="Harga yang terjangkau untuk hunian yang strategis." scrollY={scrollYProgress} from={0.79} to={0.87} />
                    </ul>
                </div>
            </div>
        </section>
    )
}

const FacilityItem = ({image, title, scrollY, from, to}) => {
    const translateX = useTransform(scrollY, [from, to], ["300%", "0%"])
    const opacity = useTransform(scrollY, [from, to], [0, 1])
    return (
        <motion.figure style={{ x: translateX, opacity }} className="w-full h-[29rem] relative overflow-hidden group">
            <img className="w-full h-full" src={image} alt="" />
            <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 bg-black/60 group-hover:translate-y-full transition duration-500">
                <h1 className="text-2xl text-white popins-bold opacity-90">{title}</h1>
            </div>
        </motion.figure>
    )
}


const FacilitySuperior = () => {
    const section = useRef(null)
    const { scrollYProgress } = useScroll({ target: section, offset: ['start end', 'end end'] })
    const opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1])

    return (
        <section ref={section} className="w-full h-[250vh] lg:py-20 relative bg-white">
            <div className="w-full h-screen pt-10 sticky top-0" >
                <div className="text-center" >
                    <motion.h1 style={{ opacity }} className={`text-3xl md:text-5xl poppins-bold text-balck tracking-wider leading-[45px] md:leading-[70px] text-shadow opacity-80`}>Fasilitas Unggulan</motion.h1>
                    <motion.p style={{ opacity }} className="open-sans mt-2 text-lg md:text-2xl text-black opacity-70">
                        Fasilitas Apartemen yang dilengkapi dengan apapun yang anda butuhkan.
                    </motion.p>
                </div>
                <div className="w-full mt-10 px-20 flex justify-center gap-x-32 relative overflow-hidden">
                    <FacilityItem image={images[0]} title={"Kolam Renang"} scrollY={scrollYProgress} from={0.2} to={0.4} />
                    <FacilityItem image={images[1]} title={"Ruang Gym"} scrollY={scrollYProgress} from={0.4} to={0.6} />
                    <FacilityItem image={images[2]} title={"Area Parkir"} scrollY={scrollYProgress} from={0.6} to={0.8} />
                </div>
            </div>
        </section>
    )
}