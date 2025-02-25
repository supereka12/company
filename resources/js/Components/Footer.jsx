import { Link } from "@inertiajs/react";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="shadow px-5 lg:px-20 bg-white border-t">
            <div className="w-full py-10">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="text-3xl text-[--primary-color] opacity-80 poppins-bold">Bondepart</Link>
                     <nav aria-label="breadcrumb" className="w-full">
                        <ol className="flex flex-wrap md:justify-center rounded-md py-4 md:py-2">
                            <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                                <Link href="/">Beranda</Link>
                                <span className="pointer-events-none mx-2 text-slate-800">
                                    |
                                </span>
                            </li>
                            <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                                <Link href="/about">Tentang Kami</Link>
                                <span className="pointer-events-none mx-2 text-slate-800">
                                    |
                                </span>
                            </li>
                            <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                                <Link href="/articles">Artikel</Link>
                                <span className="pointer-events-none mx-2 text-slate-800">
                                    |
                                </span>
                            </li>
                            <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                                <Link href="/galery/Jarrdin-Apartemen-by-Bondepart">Galeri</Link>
                                <span className="pointer-events-none mx-2 text-slate-800">
                                    |
                                </span>
                            </li>
                            <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                                <Link href="/contact">Kontak</Link>
                            </li>
                            {/* <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                                <Link href="/">Terms & Conditions</Link>
                                <span className="pointer-events-none mx-2 text-slate-800">
                                    |
                                </span>
                            </li>
                            <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                                <Link href="/">FAQ</Link>
                            </li> */}
                        </ol>
                    </nav>
                    <div className="flex md:justify-center text-center gap-x-7">
                        <a href="https://www.tiktok.com/@bondepart.apartment?is_from_webapp=1&sender_device=pc">
                            <FaTiktok className="text-black text-2xl opacity-80 hover:opacity-100" />
                        </a>
                        <a href="https://www.instagram.com/bondepart.apartment?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                            <CiInstagram className="text-black text-2xl opacity-80 hover:opacity-100" />
                        </a>
                    </div>
                </div>
                <span className="block mt-5 text-sm sm:text-center text-gray-400">© 2025 Bondepart. All Rights Reserved.</span>
            </div>
        </footer>
    )
}