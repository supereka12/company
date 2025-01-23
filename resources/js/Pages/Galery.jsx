import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import TextHead from "@/Components/TextHead";
import { Head } from "@inertiajs/react";


export default function GaleryPage({title}) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
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
                            <button className="px-7 py-3 bg-[--primary-color] text-white border border-[--primary-color] rounded-full">Semua</button>
                        </li>
                        <li>
                            <button className="px-7 py-3 border border-[--primary-color] rounded-full hover:text-white hover:bg-[--primary-color]">Eksterior</button>
                        </li>
                        <li>
                            <button className="px-7 py-3 border border-[--primary-color] rounded-full hover:text-white hover:bg-[--primary-color]">Interior</button>
                        </li>
                    </ul>
                    <div class="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
                        <div class="group cursor-pointer relative">
                            <img src="/images/foto1.jpg" alt="Image 1" class="w-auto h-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
                            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">View</button>
                            </div>
                        </div>
                        <div className="group cursor-pointer relative">
                            <img src="/images/pexels-pixabay-271618 (1).jpg" alt="Image 1" class="w-auto h-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
                            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">View</button>
                            </div>
                        </div>
                        <div className="group cursor-pointer relative">
                            <img src="/images/6f8596a5-ab60-47b2-8055-0047d9849931.jpg" alt="Image 1" class="w-auto h-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
                            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">View</button>
                            </div>
                        </div>
                        <div className="group cursor-pointer relative">
                            <img src="/images/pexels-expect-best-79873-323705.jpg" alt="Image 1" class="w-auto h-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">View</button>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}