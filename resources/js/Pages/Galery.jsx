import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { useEffect, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import TextHead from "@/Components/TextHead";
import { Head } from "@inertiajs/react";


export default function GaleryPage({ title }) {
    const [photos, setPhotos] = useState(["/images/B 1118/Bathroom.png", "/images/B 1118/Bedroom 3.png", "/images/B 1118/Facility 3.png"])
    const [active, setActive] = useState("all")

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        })
    }, [])

    const handleAllPhotos = () => {
        setPhotos(["/images/RuangTamu.jpg", "/images/pexels-quark-studio-1159039-3201921.jpg", "/images/pexels-expect-best-79873-323705.jpg", "/images/pexels-apasaric-3323694.jpg", "/images/foto1.jpg", "/images/bondepart.jpg", "/images/6f8596a5-ab60-47b2-8055-0047d9849931.jpg"])
        setActive("all")
    }
    const handleInterior = () => {
        setPhotos(["/images/B 1118/Bathroom.png", "/images/B 1118/Bedroom 2.png", "/images/B 1118/Bedroom 3.png", "/images/B 1118/Facility 3.png", "/images/B 1118/Facility 10.png", "/images/B 1118/Facility 11.png", "/images/B 1118/Facility 12.png", "/images/B 1118/Kitchen Set 2.png", "/images/B 1118/Kitchen Set.png"])
        setActive("interior")
    }

    const handleExterior = () => {
        setPhotos(["/images/pexels-expect-best-79873-323705.jpg", "/images/pexels-apasaric-3323694.jpg", "/images/bondepart.jpg"])
        setActive("exterior")
    }
    return (
        <>
            <Head title="Galery" />
            <Navbar />
            <main>
                <section className="min-h-screen h-auto px-5 py-10 md:p-10 lg:p-20 flex flex-col items-center bg-[--third-color] text-center">
                    <div className="w-full md:w-[80%]" >
                        <TextHead title={`${title}`} />
                    </div>
                    <ul className="mt-5 flex gap-x-3" data-aos="zoom-in">
                        <li>
                            <button onClick={handleAllPhotos} className={`px-7 py-3 ${active == "all" ? "bg-[--primary-color] text-white" : "hover:text-white hover:bg-[--primary-color]"} border border-[--primary-color] rounded-full`}>Semua</button>
                        </li>
                        <li>
                            <button onClick={handleExterior} className={`px-7 py-3 border border-[--primary-color] rounded-full ${active == "exterior" ? "bg-[--primary-color] text-white" : "hover:text-white hover:bg-[--primary-color]"}`}>Eksterior</button>
                        </li>
                        <li>
                            <button onClick={handleInterior} className={`px-7 py-3 border border-[--primary-color] rounded-full hover:text-white hover:bg-[--primary-color] ${active == "interior" ? "bg-[--primary-color] text-white" : "hover:text-white hover:bg-[--primary-color]"}`}>Interior</button>
                        </li>
                    </ul>
                    <div class="mt-5 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-x-3">
                        {photos.map((data, index) => {
                            return (
                                <div className="mb-3" key={index}>
                                    <img className="w-full object-cover" src={data} alt={`image ${index}`} />
                                </div>
                            )
                        })}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}