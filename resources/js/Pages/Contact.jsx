import Navbar from "@/Components/Navbar";
import TextHead from "@/Components/TextHead";
import { Head, Link } from "@inertiajs/react";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

export default function ContactPage() {
    return (
        <>
        <Head title="Contact Us" />
            <Navbar />
            <main>
                <section className="h-auto px-5 py-10 md:p-10 lg:px-72 lg:py-20 bg-white text-center">
                    <TextHead title={"Contact Us"} />
                    <p className="open-sans mt-2 text-lg md:text-2xl text-black opacity-70" data-aos="zoom-in">
                        Any question? Contact us at bondepart@gmail.com or via WhatsApp at +62 xxx-xxxx-xxxx
                    </p>
                    <p className="open-sans mt-2 text-lg md:text-2xl text-black opacity-70" data-aos="zoom-in">
                        Want to rent a unit? Or looking for a comfortable place to live with complete facilities? Contact us now via WhatsApp at +62 xxx-xxxx-xxxx if you want to book a room!
                    </p>
                    <div className="mt-8">
                        <h2 className="poppins-light font-bold text-2xl text-black opacity-80">Follow</h2>
                        <div className="flex justify-center text-center gap-x-7 mt-3">
                            <Link href="/">
                                <CiFacebook className="text-black text-2xl opacity-80 hover:opacity-100" />
                            </Link>
                            <Link href="/">
                                <FaTiktok className="text-black text-2xl opacity-80 hover:opacity-100" />
                            </Link>
                            <Link href="/">
                                <CiInstagram className="text-black text-2xl opacity-80 hover:opacity-100" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}