import PrimaryButton from "./PrimaryButton";
import TextHead from "./TextHead";
import { Link } from "@inertiajs/react";

export default function Hero() {

    return (
        <>
            <div className={`w-full h-full flex flex-col-reverse lg:flex-row justify-between px-5 md:p-10 lg:px-20 lg:py-14 py-10 bg-[--third-color]`}>
                <div className="lg:w-[50%] h-full mt-5 md:mt-0 flex flex-col text-center lg:text-start">
                    <TextHead title={"Hunian Apartemen di tengah Kota Bandung"} color={"text-black"} />
                    <p className="open-sans mt-2 text-lg md:text-xl text-black opacity-70" data-aos="zoom-in">
                        Terinspirasi dari kota Bandung sebagai kota wisata, Bondepart Apartemen menawarkan Hunian yang nyaman, kamar-kamar yang elegan, dan keramahtamahan yang baik yang diwujudkan dengan Pelayanan 24 jam. Terletak di Jl. Cihampelas, Jalan Karapitan dan Jl. Pasteur kota bandung dengan lokasi yang sangat strategis untuk berlibur di kota Bandung
                    </p>
                    <div className="mt-5 flex justify-center lg:justify-start" data-aos="zoom-in" data-aos-delay="200">
                        <Link href="/contact">
                            <PrimaryButton title={"Contact Us"} />
                        </Link>
                    </div>
                </div>
                <div className="lg:w-[40%] h-full flex justify-center lg:justify-end animation-primary">
                    <figure className="w-full md:w-96 h-72 md:h-[450px] relative">
                        <img className="w-60 h-72 hidden lg:block rounded-t-full border-8 border-[--primary-color] absolute top-10 -left-0 -translate-x-24 -rotate-12 bg-[--primary-color] hover:-translate-x-32 hover:rotate-0 transition duration-100 cursor-pointer" src="/images/IMG_3690.JPG" alt="Piority Image" />
                        <img className="w-full h-full rounded-t-full border-8 border-[--primary-color] relative bg-[--primary-color] lg:hover:translate-x-3 lg:hover:rotate-12 transition duration-100 cursor-pointer" src="/images/IMG_6532 2.JPG" alt="Piority Image" />
                    </figure>
                </div>
            </div>
        </>
    )
}