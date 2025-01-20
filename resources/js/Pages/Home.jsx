import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import TextHead from "@/Components/TextHead";
import { FaCheck, FaSwimmingPool } from "react-icons/fa";
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
            <header className="w-full sticky lg:fixed top-0 left-0 z-20">
                <Navbar />
            </header>
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
                        <TextHead title="Why Choose Bondepart?" color="text-white" />
                        <p className="open-sans mt-2 text-lg md:text-2xl text-white opacity-70" data-aos="zoom-in">
                            Experience a lifestyle that combines comfort with luxury.</p>
                        <ul className="mt-5 space-y-4">
                            <FeatureItem title="Complete Facilities" description="Swimming pool, playground and 24 hour security." />
                            <FeatureItem title="Strategic Location" description="Close to shopping centers and public transportation." />
                            <FeatureItem title="Modern Design" description="Each unit is designed in a modern and elegant style." />
                        </ul>
                    </div>
                </section>

                <section className="w-full min-h-screen h-auto px-5 py-10 md:p-10 lg:p-20 bg-[--third-color]">
                    <div className="text-center">
                        <TextHead title={"Explore Our Apartment Photos"} color={"text-black"} />
                        <p className="open-sans mt-2 text-lg md:text-2xl text-black opacity-70" data-aos="zoom-in">
                            Browse the photo gallery showing our wide selection of apartment units. Find the unit that fits your family's lifestyle.                        </p>
                    </div>
                    <div className="w-full mt-5 lg:mt-8">
                        <div class="columns-2 lg:columns-3 xl:columns-4 md:gap-4">
                            <div class="overflow-hidden mb-4" data-aos="zoom-in">
                                <img src="/images/pexels-expect-best-79873-323705.jpg" alt="Item 2" class="object-cover w-full h-auto" />
                            </div>
                            <div class="overflow-hidden mb-4" data-aos="zoom-in">
                                <img src="/images/pexels-expect-best-79873-323705.jpg" alt="Item 2" class="object-cover w-full h-auto" />
                            </div>
                            <div class="overflow-hidden mb-4" data-aos="zoom-in">
                                <img src="/images/foto1.jpg" alt="Item 3" class="object-cover w-full h-auto" />
                            </div>
                            <div class="overflow-hidden mb-4" data-aos="zoom-in">
                                <img src="/images/foto1.jpg" alt="Item 4" class="object-cover w-full h-auto" />
                            </div>
                            <div class="overflow-hidden mb-4" data-aos="zoom-in">
                                <img src="/images/pexels-expect-best-79873-323705.jpg" alt="Item 2" class="object-cover w-full h-auto" />
                            </div>
                            <div class="overflow-hidden mb-4" data-aos="zoom-in">
                                <img src="/images/pexels-quark-studio-1159039-3201921.jpg" alt="Item 5" class="object-cover w-full h-auto" />
                            </div>
                            <div class="overflow-hidden mb-4" data-aos="zoom-in">
                                <img src="/images/RuangTamu.jpg" alt="Item 5" class="object-cover w-full h-auto" />
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
                        <TextHead title="Superior Facilities" color="text-black" />
                        <p className="open-sans mt-2 text-lg md:text-2xl text-black opacity-70" data-aos="zoom-in">
                            Each apartment is equipped with everything you need for an unforgettable stay.                        </p>
                        <ul className="mt-4 space-y-4">
                            <FacilityItem
                                icon={<FaSwimmingPool className="text-5xl text-[--primary-color]" />}
                                title="Swimming pool"
                                description="Enjoy swimming with stunning views."
                            />
                            <FacilityItem
                                icon={<FaSwimmingPool className="text-5xl text-[--primary-color]" />}
                                title="Playground"
                                description="Safe and fun children's play area."
                            />
                            <FacilityItem
                                icon={<FaSwimmingPool className="text-5xl text-[--primary-color]" />}
                                title="Playground"
                                description="Safe and fun children's play area."
                            />
                        </ul>
                    </div>
                    <figure className="lg:w-[40%] flex justify-end">
                        <img src="/images/foto1.jpg" alt="Interior Apartemen Bondepart" data-aos="fade-up-right" className="w-full h-96 md:h-[400px] lg:h-[600px] rounded-lg border-8 border-[--primary-color] object-cover" />
                    </figure>
                </section>

                {/* CTA Section */}
                <section className="w-full bg-[--third-color] flex flex-col items-center text-center px-5 py-10 md:p-10 lg:p-20">
                    <TextHead title="Your Dream Apartment Awaits!" color="text-black" />
                    <p className="w-full md:w-[70%] open-sans mt-2 text-lg md:text-2xl text-black opacity-70" data-aos="zoom-in">
                        Don't wait any longer—discover the luxury and comfort of Bondepart Apartments now.
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
