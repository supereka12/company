import { Link } from "@inertiajs/react";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="shadow bg-white border-t">
            <div className="w-full py-10">
                <div className="sm:flex sm:items-center sm:justify-between lg:px-20">
                    <h1 className="text-3xl text-black opacity-80 poppins-bold">Bondepart</h1>
                    <nav aria-label="breadcrumb" class="w-3/4">
                        <ol class="flex flex-wrap justify-center rounded-md py-2">
                            <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                                <Link href="/">Home</Link>
                                <span class="pointer-events-none mx-2 text-slate-800">
                                    |
                                </span>
                            </li>
                            <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                                <Link href="/">About Us</Link>
                                <span class="pointer-events-none mx-2 text-slate-800">
                                    |
                                </span>
                            </li>
                            <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                                <Link href="/">Blogs</Link>
                                <span class="pointer-events-none mx-2 text-slate-800">
                                    |
                                </span>
                            </li>
                            <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                                <Link href="/">Galery</Link>
                                <span class="pointer-events-none mx-2 text-slate-800">
                                    |
                                </span>
                            </li>
                            <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                                <Link href="/">Contact</Link>
                                <span class="pointer-events-none mx-2 text-slate-800">
                                    |
                                </span>
                            </li>
                            <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                                <Link href="/">Terms & Conditions</Link>
                                <span class="pointer-events-none mx-2 text-slate-800">
                                    |
                                </span>
                            </li>
                            <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                                <Link href="/">FAQ</Link>
                            </li>
                        </ol>
                    </nav>
                    <div className="flex justify-center text-center gap-x-7">
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
                <span className="block mt-5 text-sm sm:text-center text-gray-400">© 2025 Bondepart. All Rights Reserved.</span>
            </div>
        </footer>
    )
}