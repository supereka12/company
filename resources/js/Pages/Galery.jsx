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
                    <div className="mt-5 columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3">
                        <div class="overflow-hidden mb-3" >
                            <img src="/images/pexels-expect-best-79873-323705.jpg" alt="Item 2" class="object-cover w-full h-auto" />
                        </div>
                        <div class="overflow-hidden mb-3" >
                            <img src="/images/RuangTamu.jpg" alt="Item 2" class="object-cover w-full h-auto" />
                        </div>
                        <div class="overflow-hidden mb-3" >
                            <img src="/images/RuangTamu.jpg" alt="Item 2" class="object-cover w-full h-auto" />
                        </div>
                        <div class="overflow-hidden mb-3" >
                            <img src="/images/foto1.jpg" alt="Item 2" class="object-cover w-full h-auto" />
                        </div>
                        <div class="overflow-hidden mb-3" >
                            <img src="/images/pexels-expect-best-79873-323705.jpg" alt="Item 2" class="object-cover w-full h-auto" />
                        </div>
                        <div class="overflow-hidden mb-3" >
                            <img src="/images/6f8596a5-ab60-47b2-8055-0047d9849931.jpg" alt="Item 2" class="object-cover w-full h-auto" />
                        </div>
                        <div class="overflow-hidden mb-3" >
                            <img src="/images/pexels-pixabay-271618 (1).jpg" alt="Item 2" class="object-cover w-full h-auto" />
                        </div>
                        <div class="overflow-hidden mb-3" >
                            <img src="/images/foto1.jpg" alt="Item 2" class="object-cover w-full h-auto" />
                        </div>
                        <div class="overflow-hidden mb-3" >
                            <img src="/images/6f8596a5-ab60-47b2-8055-0047d9849931.jpg" alt="Item 2" class="object-cover w-full h-auto" />
                        </div>
                        <div class="overflow-hidden mb-3" >
                            <img src="/images/pexels-pixabay-271618 (1).jpg" alt="Item 2" class="object-cover w-full h-auto" />
                        </div>
                        <div class="overflow-hidden mb-3" >
                            <img src="/images/pexels-expect-best-79873-323705.jpg" alt="Item 2" class="object-cover w-full h-auto" />
                        </div>
                        <div class="overflow-hidden mb-3" >
                            <img src="/images/RuangTamu.jpg" alt="Item 2" class="object-cover w-full h-auto" />
                        </div>
                        <div class="overflow-hidden mb-3" >
                            <img src="/images/foto1.jpg" alt="Item 2" class="object-cover w-full h-auto" />
                        </div>
                        <div class="overflow-hidden mb-3" >
                            <img src="/images/pexels-pixabay-271618 (1).jpg" alt="Item 2" class="object-cover w-full h-auto" />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}