import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import TextHead from "@/Components/TextHead";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { FaSwimmingPool } from "react-icons/fa";

export default function BerandaPage() {
    const [urlImage, setUrlImage] = useState(["/images/pexels-expect-best-79873-323705.jpg", "/images/pexels-quark-studio-1159039-3201921.jpg", "/images/bondepart.jpg"])

    return (
        <>
            <Navbar />
            <main>
                <section className="w-full h-screen relative">
                    <Hero url={urlImage} />
                </section>
                <section className="w-full min-h-screen h-auto p-20 flex justify-between gap-x-5 bg-gradient-to-br from-[--secondary-color] to-[--primary-color]">
                    <figure className="w-[50%] h-full relative">
                        <img src="/images/foto1.jpg" alt="Example" className="w-[478px] h-[603px] rounded-lg shadow-lg" />
                    </figure>
                    <div className="w-[50%] md:w-1/2 md:pl-8">
                        <TextHead title={"Mengapa Memilih Bondepart?"} color={"text-white"} />
                        <p className="open-sans mt-2 text-2xl text-white opacity-70">Rasakan gaya hidup yang memadukan yang terbaik dari kedua dunia—kenyamanan dengan kemewahan.</p>
                        <ul className="w-full flex flex-col gap-y-4 mt-3">
                            <li className="w-full flex gap-x-3">
                                <div className="w-7 h-7 flex justify-center items-center rounded-full bg-white">
                                    <FaCheck className="text-black opacity-80 font-bold" />
                                </div>
                                <div className="w-[80%]">
                                    <h2 className="text-2xl poppins-bold text-white opacity-80">Fasilitas Lengkap</h2>
                                    <p className="open-sans mt-2 text-2xl text-white opacity-70">
                                        Kolam renang,  taman bermain, dan keamanan 24 jam.
                                    </p>
                                </div>
                            </li>
                            <li className="w-full flex gap-x-3">
                                <div className="w-7 h-7 flex justify-center items-center rounded-full bg-white">
                                    <FaCheck className="text-black opacity-80 font-bold" />
                                </div>
                                <div className="w-[80%]">
                                    <h2 className="text-2xl poppins-bold text-white opacity-80">Fasilitas Lengkap</h2>
                                    <p className="open-sans mt-2 text-2xl text-white opacity-70">
                                        Kolam renang,  taman bermain, dan keamanan 24 jam.
                                    </p>
                                </div>
                            </li>
                            <li className="w-full flex gap-x-3">
                                <div className="w-7 h-7 flex justify-center items-center rounded-full bg-white">
                                    <FaCheck className="text-black opacity-80 font-bold" />
                                </div>
                                <div className="w-[80%]">
                                    <h2 className="text-2xl poppins-bold text-white opacity-80">Fasilitas Lengkap</h2>
                                    <p className="open-sans mt-2 text-2xl text-white opacity-70">
                                        Kolam renang,  taman bermain, dan keamanan 24 jam.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="w-full min-h-screen h-auto p-20 flex gap-x-5 bg-white">
                    <div className="w-[50%] h-screen">
                        <TextHead title={"Fasilitas Unggulan"} color={"text-black"} />
                        <p className="open-sans mt-2 text-2xl text-blalck opacity-70">
                            Setiap apartemen dilengkapi dengan semua yang Anda butuhkan untuk pengalaman menginap yang tak terlupakan.                        </p>
                        <ul className="w-full mt-2">
                            <li className="w-full mt-3 flex gap-x-3">
                                <FaSwimmingPool className="text-5xl opacity-80 text-[--primary-color]" />
                                <div className="w-[70%] mt-3">
                                    <h2 className="text-2xl poppins-bold opacity-80 text-[--primary-color]">Kolan Renang</h2>
                                    <p className="open-sans mt-2 text-2xl text-blalck opacity-70">Nikmati sensasi berenang dengan pemandangan menakjubkan di kolam renang kami.</p>
                                </div>
                            </li>
                            <li className="w-full mt-3 flex gap-x-3">
                                <FaSwimmingPool className="text-5xl opacity-80 text-[--primary-color]" />
                                <div className="w-[70%] mt-3">
                                    <h2 className="text-2xl poppins-bold opacity-80 text-[--primary-color]">Kolan Renang</h2>
                                    <p className="open-sans mt-2 text-2xl text-blalck opacity-70">Nikmati sensasi berenang dengan pemandangan menakjubkan di kolam renang kami.</p>
                                </div>
                            </li>
                            <li className="w-full mt-3 flex gap-x-3">
                                <FaSwimmingPool className="text-5xl opacity-80 text-[--primary-color]" />
                                <div className="w-[70%] mt-3">
                                    <h2 className="text-2xl poppins-bold opacity-80 text-[--primary-color]">Kolan Renang</h2>
                                    <p className="open-sans mt-2 text-2xl text-blalck opacity-70">Nikmati sensasi berenang dengan pemandangan menakjubkan di kolam renang kami.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[50%] h-screen">
                        <figure>
                            <img src="/images/RuangTamu.jpg" alt="image fasilitas" />
                        </figure>
                    </div>
                </section>
            </main>
        </>
    )
}
