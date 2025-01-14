import PrimaryButton from "./PrimaryButton";
import TextHead from "./TextHead";
import { Link } from "@inertiajs/react";

export default function Hero() {

    return (
        <>
            <div className={`w-full h-full flex flex-col-reverse lg:flex-row justify-center px-5 md:p-10 lg:p-20 py-10 bg-[--third-color]`}>
                <div className="lg:w-[60%] h-full mt-5 md:mt-0 flex flex-col justify-center text-center lg:text-start">
                    <TextHead title={"Modern Residence with Complete Facilities"} color={"text-black"} />
                    <p className="open-sans mt-2 text-2xl text-black opacity-70" data-aos="zoom-in" data-aos-delay="100">Experience a lifestyle that combines the best of both worlds—comfort with luxury.</p>
                    <div className="mt-5 flex justify-center lg:justify-start" data-aos="zoom-in" data-aos-delay="200">
                        <Link href="/contact">
                        <PrimaryButton title={"Contact Us"} />
                        </Link>
                    </div>
                </div>
                <div className="lg:w-[40%] h-full flex items-center justify-center lg:justify-end animation-primary">
                    <figure className="w-full md:w-96 h-72 md:h-[450px] relative">
                        <img className="w-60 h-72 hidden lg:block rounded-t-full border-8 border-[--primary-color] absolute top-10 -left-0 -translate-x-24 -rotate-12 bg-[--primary-color] hover:-translate-x-32 hover:rotate-0 transition duration-100 cursor-pointer" src="/images/RuangTamu.jpg" alt="Piority Image" />
                        <img className="w-full h-full rounded-t-full border-8 border-[--primary-color] relative bg-[--primary-color] lg:hover:translate-x-3 lg:hover:rotate-12 transition duration-100 cursor-pointer" src="/images/pexels-apasaric-3323694.jpg" alt="Piority Image" />
                    </figure>
                </div>
            </div>
        </>
    )
}