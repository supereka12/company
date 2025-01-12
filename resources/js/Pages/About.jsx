import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import TextHead from "@/Components/TextHead";
import { FaTrashAlt } from "react-icons/fa";
import AOS from "aos"; 
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

export default function AboutPage() {
        useEffect(() => {
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
            });
        }, []);
    return (
        <>
            <Navbar />
            <main>
                <section className="px-5 py-10 md:p-10 lg:p-20 text-center flex flex-col items-center">
                    <TextHead title={"About Us"} />
                    <p className="open-sans mt-2 text-2xl text-black opacity-70" data-aos="zoom-in" data-aos-delay="100">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, possimus. consectetur, adipisicing elit. Aliquam, possimus.consectetur, adipisicing elit. Aliquam, possimus.Laborum neque quisquam sit magni corrupti explicabo cumque! Ipsam sed, possimus odit dolores voluptatibus ipsum ea vitae illo illum numquam!
                    </p>
                    <p className="open-sans mt-2 text-2xl text-black opacity-70" data-aos="zoom-in" data-aos-delay="200">
                        adipisicing elit. Aliquam, possimus. Laborum neque quisquam sit magni corrupti explicabo cumque! Ipsam sed, possimus odit dolores voluptatibus ipsum ea vitae illo illum numquam!
                    </p>
                </section>
                <section className="w-full px-5 md:px-10 lg:px-20 py-10 md:py-20 lg:py-32 flex flex-wrap justify-between gap-8 bg-gradient-to-br from-[--secondary-color] to-[--primary-color]">
                    <div className="lg:w-[30%] flex gap-x-4" data-aos="zoom-in">
                        <div className="w-10 h-10 flex justify-center items-center bg-white rounded-lg">
                            <span className="text-xl font-semibold opacity-80">1</span>
                        </div>
                        <div className="w-[90%]">
                            <h2 className="text-2xl poppins-bold text-white opacity-80">Our Vision</h2>
                            <p className="open-sans mt-2 text-2xl text-white opacity-70">
                                To become a leading modern place that prioritizes comfort, security.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-[30%] flex gap-x-4" data-aos="zoom-in">
                        <div className="w-10 h-10 flex justify-center items-center bg-white rounded-lg">
                            <span className="text-xl font-semibold opacity-80">2</span>
                        </div>
                        <div className="w-[90%]" >
                            <h2 className="text-2xl poppins-bold text-white opacity-80">Our Mission</h2>
                            <p className="open-sans mt-2 text-2xl text-white opacity-70">
                                Providing a modern place with complete facilities, 24 hour security, strategic access.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-[30%] flex gap-x-4" data-aos="zoom-in">
                        <div className="w-10 h-10 flex justify-center items-center bg-white rounded-lg">
                            <span className="text-xl font-semibold opacity-80">3</span>
                        </div>
                        <div className="w-[90%]">
                            <h2 className="text-2xl poppins-bold text-white opacity-80">Our Core Values</h2>
                            <p className="open-sans mt-2 text-2xl text-white opacity-70">
                                Providing a modern place with complete facilities, 24 hour security, strategic access
                            </p>
                        </div>
                    </div>
                </section>
                <section className="w-full min-h-screen h-auto px-5 py-10 md:p-10 lg:p-20 flex flex-col lg:flex-row gap-x-5 bg-[--third-color]">
                    <figure className="lg:w-2/4 h-full relative" data-aos="zoom-in">
                        <img src="/images/foto1.jpg" alt="Example" className="w-full md:w-[478px] h-96 md:h-[400px] lg:h-[600px] rounded-lg shadow-lg" />
                    </figure>
                    <div className="lg:w-2/4 mt-5 lg:mt-0">
                        <TextHead title={"our services"} color={"text-black"} />
                        <p className="open-sans mt-2 text-2xl text-black opacity-70" data-aos="zoom-in">
                            We are committed to providing people with the best experience by creating a safe and comfortable environment.
                        </p>
                        <ul className="w-full mt-2">
                            <li className="w-full mt-3 flex gap-x-3" data-aos="zoom-in">
                                <FaTrashAlt className="text-3xl mt-3 opacity-80 text-[--primary-color]" />
                                <div className="w-[80%] mt-3">
                                    <h2 className="text-2xl poppins-bold opacity-80 text-[--primary-color]">Cleanliness and Comfort</h2>
                                    <p className="open-sans mt-2 text-2xl text-blalck opacity-70">
                                        We provide routine cleaning in public areas and apartment units, as well as 24-hour surveillance with CCTV to ensure residents' safety.</p>
                                </div>
                            </li>
                            <li className="w-full mt-3 flex gap-x-3" data-aos="zoom-in">
                                <FaTrashAlt className="text-3xl mt-3 opacity-80 text-[--primary-color]" />
                                <div className="w-[80%] mt-3">
                                    <h2 className="text-2xl poppins-bold opacity-80 text-[--primary-color]">Cleanliness and Comfort</h2>
                                    <p className="open-sans mt-2 text-2xl text-blalck opacity-70">
                                        We provide routine cleaning in public areas and apartment units, as well as 24-hour surveillance with CCTV to ensure residents' safety.</p>
                                </div>
                            </li>
                            <li className="w-full mt-3 flex gap-x-3" data-aos="zoom-in">
                                <FaTrashAlt className="text-3xl mt-3 opacity-80 text-[--primary-color]" />
                                <div className="w-[80%] mt-3">
                                    <h2 className="text-2xl poppins-bold opacity-80 text-[--primary-color]">Cleanliness and Comfort</h2>
                                    <p className="open-sans mt-2 text-2xl text-blalck opacity-70">
                                        We provide routine cleaning in public areas and apartment units, as well as 24-hour surveillance with CCTV to ensure residents' safety.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="w-full px-5 py-10 md:p-10 lg:p-20 flex justify-center bg-white">
                    <p className="w-[90%]  text-center open-sans mt-2 text-3xl md:text-4xl text-blalck opacity-70" data-aos="zoom-in">
                        We are committed to providing the best, ensuring comfort and quality of residence for every resident.
                    </p>
                </section>
                <section className="w-full h-auto px-5 py-10 md:p-10 lg:p-20 flex flex-col items-center gap-y-5 bg-[--third-color]">
                    <TextHead title={"Location"} color="text-black" />
                    <iframe data-aos="zoom-in" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126751.53216200261!2d107.46096234335937!3d-6.892351599999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7362211001d%3A0xc52813d6dd53e769!2sJarrdin%20Apartemen%20by%20Bon.depart!5e0!3m2!1sid!2sid!4v1736494087305!5m2!1sid!2sid" className="w-full h-[450px]" loading="lazy"></iframe>
                </section>
            </main>
            <Footer />
        </>
    )
}