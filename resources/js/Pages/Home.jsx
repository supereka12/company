import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import TextHead from "@/Components/TextHead";
import { FaCheck, FaSwimmingPool } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { MdOutlineSecurity } from "react-icons/md";
import PrimaryButton from "@/Components/PrimaryButton";
import Footer from "@/Components/Footer";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useRef } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

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
                    <figure className="lg:w-[50%] h-full">
                        <img src="/images/foto1.jpg" alt="Interior Apartemen Bondepart" data-aos="fade-up-right" className="w-full h-96 md:h-[400px] lg:h-[600px] rounded-lg border-8 border-white object-cover" />
                    </figure>
                    <div className="w-full lg:w-[50%] mt-5 lg:mt-0 h-full flex flex-col justify-between">
                        <TextHead title="Kenapa harus Bondepart Apartemen?" color="text-white" />
                        <ul className="mt-5 space-y-4">
                            <FeatureItem title="Fasilitas yang lengkap" description="Kolam renang, Fasilitas olahraga, Area parkir luas dan keamanan 24 jam." />
                            <FeatureItem title="Lokasi yang strategis" description="Dekat dengan tempat wisata, stasiun dan bandara." />
                            <FeatureItem title="Unit yang Estetik" description="Memiliki konsep unit yang elegan dan modern." />
                            <FeatureItem title="Harga yang terjangkau" description="Harga yang terjangkau untuk hunian yang strategis." />
                        </ul>
                    </div>
                </section>

                <section className="w-full min-h-screen h-auto px-5 py-10 md:p-10 lg:p-20 bg-[--third-color]">
                    <div className="text-center">
                        <TextHead title={"Jelajahi Foto Unit Bondepart Apartemen"} color={"text-black"} />
                        <p className="open-sans mt-2 text-lg md:text-2xl text-black opacity-70" data-aos="zoom-in">
                            Dengan unit yang memiliki konsep elegan dan modern, Bondepart Apartemen menyajikan hunian yang Estetik dan Nyaman dengan fasilitas didalam unit yang lengkap.
                            Mari kita jelajahi!
                        </p>
                    </div>
                    <div className="w-full mt-5 lg:mt-8">
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            <div class="overflow-hidden mb-4 h-80" data-aos="zoom-in">
                                <img src="/images/foto1.jpg" alt="Item 4" class="object-cover w-full h-full" />
                            </div>
                            <div class="overflow-hidden mb-4 h-80" data-aos="zoom-in">
                                <img src="/images/pexels-expect-best-79873-323705.jpg" alt="Item 2" class="object-cover w-full h-full" />
                            </div>
                            <div class="overflow-hidden mb-4 h-80" data-aos="zoom-in">
                                <img src="/images/pexels-expect-best-79873-323705.jpg" alt="Item 2" class="object-cover w-full h-full" />
                            </div>
                            <div class="overflow-hidden mb-4 h-80" data-aos="zoom-in">
                                <img src="/images/foto1.jpg" alt="Item 3" class="object-cover w-full h-full" />
                            </div>
                            <div class="overflow-hidden mb-4 h-80" data-aos="zoom-in">
                                <img src="/images/foto1.jpg" alt="Item 4" class="object-cover w-full h-full" />
                            </div>
                            <div class="overflow-hidden mb-4 h-80" data-aos="zoom-in">
                                <img src="/images/pexels-expect-best-79873-323705.jpg" alt="Item 2" class="object-cover w-full h-full" />
                            </div>
                            <div class="overflow-hidden mb-4 h-80" data-aos="zoom-in">
                                <img src="/images/pexels-quark-studio-1159039-3201921.jpg" alt="Item 5" class="object-cover w-full h-full" />
                            </div>
                            <div class="overflow-hidden mb-4 h-80" data-aos="zoom-in">
                                <img src="/images/RuangTamu.jpg" alt="Item 5" class="object-cover w-full h-full" />
                            </div>
                        </div>
                        <div className="flex justify-center mt-8" data-aos="zoom-in">
                            <Link href="/galery">
                                <PrimaryButton title={"See More"} />
                            </Link>
                        </div>
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
                    <figure className="lg:w-[40%] flex justify-end">
                        <img src="/images/foto1.jpg" alt="Interior Apartemen Bondepart" data-aos="fade-up-right" className="w-full h-96 md:h-[400px] lg:h-[600px] rounded-lg border-8 border-[--primary-color] object-cover" />
                    </figure>
                </section>

                {/* CTA Section */}
                <section className="w-full bg-[--third-color] flex flex-col items-center text-center px-5 py-10 md:p-10 lg:p-20">
                    {/* <TextHead title="" color="text-black" /> */}
                    <p className="w-full md:w-[70%] open-sans mt-2 text-lg md:text-2xl text-black opacity-70" data-aos="zoom-in">
                        Mari jelajahi dunia bersama Bondepart
                    </p>
                    <div className="mt-5" data-aos="zoom-in">
                        <Link href={"/contact"}>
                            <PrimaryButton title="Contact Us" />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
