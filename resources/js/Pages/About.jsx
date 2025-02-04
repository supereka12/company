import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import TextHead from "@/Components/TextHead";
import { FaTrashAlt } from "react-icons/fa";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Head } from "@inertiajs/react";
import { FaClock } from "react-icons/fa";

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
            <Head title="About Us" />
            <Navbar />
            <main>
                <section className="px-5 py-10 md:p-10 lg:p-20">
                    <TextHead title={"Tentang Kami"} />
                    <p className="open-sans mt-2 text-2xl text-black opacity-70" data-aos="zoom-in" data-aos-delay="100">
                        Bondepart Apartemen merupakan agen penyewaan hunian Apartemen dengan sistem Harian, Bulanan dan Tahunan dengan fasilitas unit dan fasilitas umum yang sangat lengkap, memudahkan mobilisasi perjalanan anda di tengah kota bandung.
                        Berlokasi di Apartemen Jarrdin Cihampelas, Gateway Pasteur dan Grand Asia Afrika yang memiliki lokasi yang sangat strategis dengan harga yang sangat terjangkau.
                        Bondepart Apartemen memulai perjalanannya di tahun 2021 dengan pertumbuhan yang pesat dan kepuasan pelayanan dari konsumen yang memotivasi Bondepart Apartemen terus bertumbuh dan meningkatkan kualitas pelayanannya secara signifikan.
                        Bondepart Apartemen hadir dengan konsep yang memudahkan konsumen dan wisatawan untuk memulai perjalannnya di tengah kota Bandung dengan pelayanan 24 jam dan keramahtamahan yang dimiliki Bondepart Apartemen.                    </p>
                </section>
                <section className="w-full px-5 md:px-10 lg:px-20 py-10 md:py-20 lg:py-32 flex flex-wrap justify-between gap-8 bg-gradient-to-br from-[--secondary-color] to-[--primary-color]">
                    <div className="lg:w-[30%] flex gap-x-4" data-aos="zoom-in">
                        <div className="w-10 h-10 flex justify-center items-center bg-white rounded-lg">
                            <span className="text-xl font-semibold opacity-80">1</span>
                        </div>
                        <div className="w-[90%]">
                            <h2 className="text-2xl poppins-bold text-white opacity-80">Visi</h2>
                            <p className="open-sans mt-2 text-2xl text-white opacity-70">
                                Menjadi hunian modern terdepan yang mengutamakan kenyamanan dan keramahtamahan untuk konsumen.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-[30%] flex gap-x-4" data-aos="zoom-in">
                        <div className="w-10 h-10 flex justify-center items-center bg-white rounded-lg">
                            <span className="text-xl font-semibold opacity-80">2</span>
                        </div>
                        <div className="w-[90%]" >
                            <h2 className="text-2xl poppins-bold text-white opacity-80">Misi</h2>
                            <p className="open-sans mt-2 text-2xl text-white opacity-70">
                                Menyediakan Hunian modern dan Estetik dengan fasilitas lengkap, keamanan 24 jam dan akses yang strategis.                            </p>
                        </div>
                    </div>
                    <div className="lg:w-[30%] flex gap-x-4" data-aos="zoom-in">
                        <div className="w-10 h-10 flex justify-center items-center bg-white rounded-lg">
                            <span className="text-xl font-semibold opacity-80">3</span>
                        </div>
                        <div className="w-[90%]">
                            <h2 className="text-2xl poppins-bold text-white opacity-80">Nilai inti kami</h2>
                            <p className="open-sans mt-2 text-2xl text-white opacity-70">
                                Memberikan pelayanan yang terbaik sehingga menjadi perjalanan yang tidak terlupakan
                            </p>
                        </div>
                    </div>
                </section>
                <section className="w-full min-h-screen h-auto px-5 py-10 md:p-10 lg:p-20 flex flex-col lg:flex-row gap-x-5 bg-[--third-color]">
                    <figure className="lg:w-2/4 h-full relative" data-aos="zoom-in">
                        <img src="/images/Site Office Jarrdin Cihampelas 2.png" alt="Example" className="w-full md:w-[478px] h-96 md:h-[400px] lg:h-[600px] rounded-lg shadow-lg" />
                    </figure>
                    <div className="lg:w-2/4 mt-5 lg:mt-0">
                        <TextHead title={"Pelayanan Kami"} color={"text-black"} />
                        <p className="open-sans mt-2 text-2xl text-black opacity-70" data-aos="zoom-in">
                            Kami berkomitmen untuk memberikan pengalaman terbaik dengan menciptakan hunian yang aman dan nyaman.
                        </p>
                        <ul className="w-full mt-2">
                            <li className="w-full mt-6 flex gap-x-3" data-aos="zoom-in">
                                <FaTrashAlt className="text-3xl mt-3 opacity-80" />
                                <div className="w-[80%] mt-3">
                                    <p className="open-sans text-2xl text-black opacity-70" data-aos="zoom-in">
                                        Kami melakukan pembersihan rutin dengan detail pada unit apartemen sehingga memberikan kenyamanan untuk konsumen kami.
                                    </p>
                                </div>
                            </li>
                            <li className="w-full mt-6 flex gap-x-3" data-aos="zoom-in">
                                <FaClock className="text-3xl mt-3 opacity-80" />
                                <div className="w-[80%] mt-3">
                                    <p className="open-sans text-2xl text-black opacity-70" data-aos="zoom-in">
                                        kami memberikan pelayanan nonstop 24 jam dengan keramahtamahan dari staf kami yang profesional.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="w-full px-5 py-10 md:p-10 lg:p-20 flex justify-center bg-white">
                    <p className="w-[90%]  text-center open-sans mt-2 text-3xl md:text-4xl text-blalck opacity-70" data-aos="zoom-in">
                        Kami berkomitmen untuk memberikan kenyamanan dengan hunian yang berkualitas
                    </p>
                </section>
                <section className="w-full h-auto px-5 py-10 md:p-10 lg:p-20 flex flex-col items-center gap-y-5 bg-[--third-color]">
                    <TextHead title={"Lokasi"} color="text-black" />
                    <iframe data-aos="zoom-in" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126751.53216200261!2d107.46096234335937!3d-6.892351599999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7362211001d%3A0xc52813d6dd53e769!2sJarrdin%20Apartemen%20by%20Bon.depart!5e0!3m2!1sid!2sid!4v1736494087305!5m2!1sid!2sid" className="w-full h-[450px]" loading="lazy"></iframe>
                    <iframe data-aos="zoom-in" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0012870880732!2d107.5657234!3d-6.8904478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e514475c499b%3A0x14f7ec6eedd81781!2sGateway%20Pasteur%20by%20Bon.depart!5e0!3m2!1sen!2sid!4v1737451622578!5m2!1sen!2sid" className="w-full h-[450px]" loading="lazy"></iframe>
                    <iframe data-aos="zoom-in" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7213581738074!2d107.61559477499652!3d-6.923874443075854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e62b9c22d201%3A0xc0903468e1f49fc7!2sApartemen%20Grand%20Asia%20Afrika%2C%20Jl.%20Karapitan%20No.1%2C%20Paledang%2C%20Lengkong%2C%20Bandung%20City%2C%20West%20Java%2040261!5e0!3m2!1sen!2sid!4v1737451812170!5m2!1sen!2sid" className="w-full h-[450px]" loading="lazy"></iframe>
                </section>
            </main>
            <Footer />
        </>
    )
}