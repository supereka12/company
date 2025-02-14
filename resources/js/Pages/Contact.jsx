import Navbar from "@/Components/Navbar";
import TextHead from "@/Components/TextHead";
import { Head, Link } from "@inertiajs/react";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function ContactPage() {
    return (
        <>
            <Head title="Contact Us" />
            <Navbar />
            <main>
                <section className="h-auto px-5 py-10 md:p-10 lg:px-20 lg:py-20 bg-white">
                    <TextHead title={"Contact Us"} />
                    <p className="open-sans mt-2 text-lg md:text-2xl text-black" data-aos="zoom-in">
                        Jika ada pertanyaan atau reservasi silahkan hubungi kami di :
                    </p>
                    <div className="flex gap-x-2 mt-2 open-sans text-lg md:text-2xl text-black" data-aos="zoom-in">
                        <MdOutlineEmail className="text-black text-2xl opacity-80 hover:opacity-100" />
                        <p>
                            email : bondepart.co@gmail.com
                        </p>
                    </div>
                    <div className="flex gap-x-2 mt-2 open-sans text-lg md:text-2xl text-black" data-aos="zoom-in">
                        <FaWhatsapp className="text-black text-2xl opacity-80 hover:opacity-100" />
                        <p>
                            WhatsApp : +62 822-4653-0058 (admin 1) / +62 8132-1432-846 (admin 2)
                        </p>
                    </div>
                    <div className="flex gap-x-2 mt-2 open-sans text-lg md:text-2xl text-black" data-aos="zoom-in">
                        <CiInstagram className="text-black text-2xl opacity-80 hover:opacity-100" />
                        <p>Instagram : @bondepart.apartment</p>
                    </div>
                    <div className="flex gap-x-2 mt-2 open-sans text-lg md:text-2xl text-black" data-aos="zoom-in">
                        <FaTiktok className="text-black text-2xl opacity-80 hover:opacity-100" />
                        <p>Tiktok : @bondepart.apartment  </p>
                    </div>
                    <p className="open-sans mt-2 text-lg md:text-2xl text-black" data-aos="zoom-in">
                        Let's explore the world #BersamaBondepart
                    </p>
                </section>
            </main>
        </>
    )
}