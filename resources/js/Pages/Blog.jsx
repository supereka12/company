import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import TextHead from "@/Components/TextHead";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { IoMdSearch } from "react-icons/io";
import { Head, Link } from "@inertiajs/react";

export default function ArtikelPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    return (
        <>
        <Head title="Blog" />
            <Navbar />
            <main>
                <section className="bg-[--primary-color] h-[70vh] px-5 py-10 md:p-10 lg:p-20 flex flex-col items-center justify-center text-center text-white">
                    <TextHead title={"Blogs Bondepart"} color={"text-white"} />
                    <p className="w-full md:w-[420px] open-sans mt-2 text-2xl text-white opacity-70" data-aos="zoom-in">
                        Here you can find the latest company news and business articles.
                    </p>
                    <div className="w-full md:w-2/4 lg:w-[40%] mt-5 relative flex items-center" data-aos="zoom-in">
                        <IoMdSearch className="text-2xl text-black opacity-60 absolute left-4 top-1/2 transform -translate-y-1/2" />
                        <input
                            className="w-full py-2 pl-12 pr-2 bg-white text-black text-opacity-60 rounded-full outline-none text-xl placeholder:text-xl placeholder:text-opacity-60"
                            type="text"
                            placeholder="Search..."
                        />
                    </div>
                </section>
                <section className="w-full px-5 py-10 md:p-10 lg:p-20 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-5">
                        <div className="w-full">
                            <figure className="w-full h-52 md:h-40">
                                <img className="w-full h-full" src="/images/pexels-quark-studio-1159039-3201921.jpg" alt="" />
                            </figure>
                            <Link href="/" className="font-bold text-xl poppins-light line-clamp-2 opacity-80 text-black hover:underline">Interior sederhana Populer tahun 2025 di indonesia</Link>
                            <p className="open-sans line-clamp-4 opacity-70 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, provident! Facere blanditiis quidem itaque consequatur cum soluta nisi vero nostrum hic maiores. Dolor, enim odio quisquam dolorem quam obcaecati consectetur!</p>
                        </div>
                        <div className="w-full">
                            <figure className="w-full h-52 md:h-40">
                                <img className="w-full h-full" src="/images/pexels-quark-studio-1159039-3201921.jpg" alt="" />
                            </figure>
                            <Link href="/" className="font-bold text-xl poppins-light line-clamp-2 opacity-80 text-black hover:underline">Interior sederhana Populer tahun 2025 di indonesia</Link>
                            <p className="open-sans line-clamp-4 opacity-70 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, provident! Facere blanditiis quidem itaque consequatur cum soluta nisi vero nostrum hic maiores. Dolor, enim odio quisquam dolorem quam obcaecati consectetur!</p>
                        </div>
                        <div className="w-full">
                            <figure className="w-full h-52 md:h-40">
                                <img className="w-full h-full" src="/images/pexels-quark-studio-1159039-3201921.jpg" alt="" />
                            </figure>
                            <Link href="/" className="font-bold text-xl poppins-light line-clamp-2 opacity-80 text-black hover:underline">Interior sederhana Populer tahun 2025 di indonesia</Link>
                            <p className="open-sans line-clamp-4 opacity-70 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, provident! Facere blanditiis quidem itaque consequatur cum soluta nisi vero nostrum hic maiores. Dolor, enim odio quisquam dolorem quam obcaecati consectetur!</p>
                        </div>
                        <div className="w-full">
                            <figure className="w-full h-52 md:h-40">
                                <img className="w-full h-full" src="/images/pexels-quark-studio-1159039-3201921.jpg" alt="" />
                            </figure>
                            <Link href="/" className="font-bold text-xl poppins-light line-clamp-2 opacity-80 text-black hover:underline">Interior sederhana Populer tahun 2025 di indonesia</Link>
                            <p className="open-sans line-clamp-4 opacity-70 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, provident! Facere blanditiis quidem itaque consequatur cum soluta nisi vero nostrum hic maiores. Dolor, enim odio quisquam dolorem quam obcaecati consectetur!</p>
                        </div>
                        <div className="w-full">
                            <figure className="w-full h-52 md:h-40">
                                <img className="w-full h-full" src="/images/pexels-quark-studio-1159039-3201921.jpg" alt="" />
                            </figure>
                            <Link href="/" className="font-bold text-xl poppins-light line-clamp-2 opacity-80 text-black hover:underline">Interior sederhana Populer tahun 2025 di indonesia</Link>
                            <p className="open-sans line-clamp-4 opacity-70 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, provident! Facere blanditiis quidem itaque consequatur cum soluta nisi vero nostrum hic maiores. Dolor, enim odio quisquam dolorem quam obcaecati consectetur!</p>
                        </div>
                        
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}