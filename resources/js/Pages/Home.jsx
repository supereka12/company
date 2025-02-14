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

export default function HomePage() {
    const [index, setIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth > 768)

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 7000);
        return () => clearInterval(timer);
    }, [index]);

    const nextSlide = () => setIndex((prevIndex) => (prevIndex + 1) % images.length);
    const prevSlide = () => setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth > 768)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    })

    return (
        <>
            <Head title="Home" />
            <div className="w-full absolute md:relative top-0 left-0 z-20" >
            <Navbar />
            </div>
            <main>
                <Hero isWindow={windowWidth} />
                <WhyChoose isWindow={windowWidth} />
                <FacilitySuperior isWindow={windowWidth} />
                
                {/* CTA Section */}
                <section className="w-full bg-[--third-color] flex flex-col items-center text-center px-5 py-10 md:p-10 lg:p-20">
                    {/* <TextHead title="" color="text-black" /> */}
                    <p className="w-full md:w-[70%] open-sans mt-2 text-lg md:text-2xl text-black opacity-70">
                        Mari jelajahi dunia bersama Bondepart
                    </p>
                    <div className="mt-5">
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


const Hero = ({isWindow}) => {
    const data = [{ name: "Jarrdin Apartemen by", image: "/images/hero_jarrdin.JPG", address: "Jl. Cihampelas Dalam No.10, Cipaganti, Kecamatan Coblong, Kota Bandung, Jawa Barat 40131", location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126751.53216200261!2d107.46096234335937!3d-6.892351599999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7362211001d%3A0xc52813d6dd53e769!2sJarrdin%20Apartemen%20by%20Bon.depart!5e0!3m2!1sid!2sid!4v1736494087305!5m2!1sid!2sid" }, { name: "Gateway Pasteur by", image: "/images/hero_gateway.jpg", address: "Jln. Gunung Batu No 203, Gateway Pasteur Apartment, Diamond A BS29, Kota Bandung, Jawa Barat 40175", location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0012870880732!2d107.5657234!3d-6.8904478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e514475c499b%3A0x14f7ec6eedd81781!2sGateway%20Pasteur%20by%20Bon.depart!5e0!3m2!1sen!2sid!4v1737451622578!5m2!1sen!2sid" }, { name: "Grand Asia Afrika by", image: "/images/hero_grand_asia_afrika.jpg", address: "Jl. Karapitan No.01, Burangrang, Kec. Lengkong, Kota Bandung, Jawa Barat 40261", location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7213581738074!2d107.61559477499652!3d-6.923874443075854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e62b9c22d201%3A0xc0903468e1f49fc7!2sApartemen%20Grand%20Asia%20Afrika%2C%20Jl.%20Karapitan%20No.1%2C%20Paledang%2C%20Lengkong%2C%20Bandung%20City%2C%20West%20Java%2040261!5e0!3m2!1sen!2sid!4v1737451812170!5m2!1sen!2sid" },]
    const [index, setIndex] = useState(0)
    const [location, setLocation] = useState({ status: false, data: {} })
    const section = useRef(null)
    const { scrollYProgress } = useScroll({ target: section, offset: ['start end', 'end start'] })

    useEffect(() => {
        console.log({a: isWindow})
        const timer = setInterval(() => {
            nextSlide();
        }, 15000 );
        return () => clearInterval(timer);
    }, [index]);
    const nextSlide = () => setIndex((prevIndex) => (prevIndex + 1) % data.length);

    const variantsIsMobileImage = {
        'hidden': {opacity: 1, clipPath: 'circle(0 at 0 0)'},
        'visible' : {opacity: 1, clipPath: 'circle(141.4% at 0 0)'},
        'exit' : {opacity: 0, scale: 1.3, transition: {delay: 4}}
    }

    const variantsImage = {
        'hidden': {opacity: 0, clipPath: 'circle(0% at 50% 50%)'},
        'visible' : {opacity: 1, clipPath: 'circle(100% at 50% 50%)'},
        'exit' : {clipPath: 'circle(0% at 50% 50%)', rotate: 360}
    }

    const variantsContentIsMobile = {
        'hidden': {opacity: 0},
        'visible': {opacity: 0.7},
        'exit': {opacity: 0,},
    }

    const variantsContent = {
        'hidden': {x: -800, opacity: 0},
        'visible': {x: 0, opacity: 0.7},
        'exit': {x: -800, opacity: 0},
    }

    return (
        <section ref={section} className="w-full h-screen relative">
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
            <div className={`w-full h-full md:flex md:flex-row md:justify-between md:pl-10 lg:pl-20 lg:pr-0 bg-[--third-color] relative overflow-hidden`}>
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
                <div className="md:w-[50%] h-full px-5 md:px-0 flex flex-col items-center md:items-start justify-center relative z-10 text-center md:text-start" >
                    <AnimatePresence mode="wait" >
                        <motion.h1 key={index} initial="hidden" animate="visible" exit="exit" variants={isWindow ? variantsContent : variantsContentIsMobile} transition={{ duration: isWindow ? 1.7 : 0.2, ease: 'easeInOut', delay: isWindow ? 0 : 2.7 }} className={`text-5xl poppins-bold text-balck tracking-wider leading-[45px] md:leading-[70px] text-shadow text-white md:text-black opacity-80`} style={{textShadow: '.5px .5px 0 white'}} >{data[index].name} <span className="text-[--primary-color]">Bondepart</span></motion.h1>
                    </AnimatePresence>
                    <AnimatePresence mode="wait" >
                        <motion.p key={index} initial="hidden" animate="visible" exit="exit" variants={isWindow ? variantsContent : variantsContentIsMobile} transition={{ duration: isWindow ? 1.7 : 0.2, ease: 'easeInOut', delay: isWindow ? 0.5 : 3 }} className="open-sans mt-2 text-xl md:text-xl text-white font-medium md:text-black opacity-70">{data[index].address}</motion.p>
                    </AnimatePresence>
                    <AnimatePresence mode="wait" >
                        <motion.button onClick={() => setLocation({ status: true, data: data[index] })} whileHover={{ scale: 1.2 }} key={index} initial="hidden" animate="visible" exit="exit" variants={isWindow ? variantsContent : variantsContentIsMobile} transition={{ duration: isWindow ? 1.7 : 0.2, ease: 'easeInOut', delay: isWindow ? 0.8 : 3.3 }} className="w-40 py-2 mt-5 flex gap-x-2 justify-center items-center text-white poppins-bold bg-[--primary-color]">
                            <FaLocationDot />
                            <span>Cari Lokasi</span></motion.button>
                    </AnimatePresence>
                </div>
                <div className="w-full md:w-[40%] h-full md:h-full absolute top-0 left-0 md:relative md:overflow-hidden" >
                    <figure className="w-full h-full flex justify-center items-center">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={index}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={isWindow ? variantsImage : variantsIsMobileImage}
                                transition={{ duration: isWindow ? 2.2 : 3 }}
                                className="w-full h-full object-cover brightness-50 md:brightness-100 "
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


const FeatureItem = ({ title, description, scrollY, from, to, fromTeks, toTeks, yTeks }) => {
    const opacity = useTransform(scrollY, [from, to], [0, 1])
    const displayP = useTransform(scrollY, [fromTeks, toTeks], ['block', 'none'])
    const opacityP = useTransform(scrollY, [fromTeks, toTeks], [1, 0])
    const translateX = useTransform(scrollY, [from, to], [100, 0])
    const translateY = useTransform(scrollY, [to, to + 0.1], [0, yTeks])
    
    return (
        <motion.li style={{ opacity, x: translateX, }} className={`w-full flex gap-x-3`}>
            <div className="w-7 h-7 flex justify-center items-center rounded-full bg-white">
                <FaCheck className="text-black opacity-80 font-bold" />
            </div>
            <div className="w-[80%]">
                <h2 className="text-2xl poppins-bold text-white opacity-80">{title}</h2>
                <motion.p style={{ display: displayP, opacity: opacityP }} className="open-sans mt-2 text-lg md:text-2xl text-white opacity-70">{description}</motion.p>
            </div>
        </motion.li>
    )
}



const WhyChoose = ({isWindow}) => {
    const title = "Kenapa harus Bondepart Apartemen?"
    const words = title.split(" ");
    const section = useRef(null)
    const { scrollYProgress } = useScroll({ target: section, offset: ['start end', 'end end'] })

    // Define opacity for each word based on scrollYProgress
    const wordOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

    return (
        <section ref={section} className="w-full h-[250vh] px-5 md:px-10 lg:px-20 bg-gradient-to-br from-[--secondary-color] to-[--primary-color] relative">
            <div className="w-full h-screen pt-10 flex flex-col lg:flex-row gap-x-20 sticky top-0 overflow-hidden">
                <div className="lg:w-[40%] h-full relative hidden md:block">
                    <FeatureIconItem Icon={GrSwim} style={"text-9xl scale-150 text-white"} scrollY={scrollYProgress} from={0.2} to={0.28} x={'25%'} y={'35%'} />
                    <FeatureIconItem Icon={IoLocation} style={"text-9xl scale-150 text-white"} scrollY={scrollYProgress} from={0.43} to={0.51} x={'75%'} y={'-60%'} />
                    <FeatureIconItem Icon={IoBed} style={"text-9xl scale-150 text-white"} scrollY={scrollYProgress} from={0.56} to={0.64} x={'25%'} y={'35%'} />
                    <FeatureIconItem Icon={MdOutlineAttachMoney} style={"text-9xl scale-150 text-white"} scrollY={scrollYProgress} from={0.79} to={0.87} x={'75%'} y={'-60%'} />
                </div>
                <div className="w-full lg:w-[60%] mt-5 lg:mt-0 h-full">
                    <motion.div
                        className={`text-4xl md:text-5xl poppins-bold text-balck leading-[45px] md:leading-[70px] text-white text-shadow opacity-80`}
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
                    <ul className="h-full mt-10 space-y-8">
                        <FeatureItem title="Fasilitas yang lengkap" description="Kolam renang, Fasilitas olahraga, Area parkir luas dan keamanan 24 jam." scrollY={scrollYProgress} from={0.2} to={0.28} fromTeks={0.51} toTeks={0.64} yTeks={0} />
                        <FeatureItem title="Lokasi yang strategis" description="Dekat dengan tempat wisata, stasiun dan bandara." scrollY={scrollYProgress} from={0.43} to={0.51} index={1} fromTeks={0.64} toTeks={0.73} yTeks={-60} />
                        <FeatureItem title="Unit yang Estetik" description="Memiliki konsep unit yang elegan dan modern." scrollY={scrollYProgress} from={0.64} to={0.73} fromTeks={0.88} toTeks={0.90} yTeks={-120} />
                        <FeatureItem title="Harga yang terjangkau" description="Harga yang terjangkau untuk hunian yang strategis." scrollY={scrollYProgress} from={0.88} to={0.90} yTeks={isWindow ? -150 : -180} />
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
        <motion.figure style={{ x: translateX, opacity }} className="w-full h-[37rem] md:h-[25rem] relative overflow-hidden group">
            <img className="w-full h-full" src={image} alt="" />
            <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 bg-black/60 group-hover:translate-y-full transition duration-500">
                <h1 className="text-2xl text-white popins-bold opacity-90">{title}</h1>
            </div>
        </motion.figure>
    )
}


const FacilitySuperior = ({isWindow}) => {
    const section = useRef(null)
    const { scrollYProgress } = useScroll({ target: section, offset: ['start end', 'end end'] })
    const opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1])

    return (
        <section ref={section} className="w-full h-auto md:h-[250vh] relative bg-white">
            <div className="w-full h-auto md:h-screen py-10 sticky top-0" >
                <div className="text-center" >
                    <motion.h1 style={{ opacity }} className={`text-4xl md:text-5xl poppins-bold text-balck tracking-wider leading-[45px] md:leading-[70px] text-shadow opacity-80`}>Fasilitas Unggulan</motion.h1>
                    <motion.p style={{ opacity }} className="open-sans mt-2 text-lg md:text-2xl text-black opacity-70">
                        Fasilitas Apartemen yang dilengkapi dengan apapun yang anda butuhkan.
                    </motion.p>
                </div>
                <div className="w-full mt-10 md:px-20 flex justify-center flex-wrap md:flex-nowrap gap-x-32 md:relative overflow-hidden">
                    <FacilityItem image={images[0]} title={"Kolam Renang"} scrollY={scrollYProgress} from={0.2} to={0.4} />
                    <FacilityItem image={images[1]} title={"Ruang Gym"} scrollY={scrollYProgress} from={0.4} to={0.6} />
                    <FacilityItem image={images[2]} title={"Area Parkir"} scrollY={scrollYProgress} from={0.6} to={0.8} />
                </div>
            </div>
        </section>
    )
}