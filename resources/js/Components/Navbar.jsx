import { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

export default function Navbar() {
    const { url } = usePage();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [dropdownGalery, setDropdownGalery] = useState(false)
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsSidebarOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="w-full px-5 md:px-10 lg:px-20 py-3 md:bg-white flex items-center justify-between md:shadow-md">
            <h1 className="text-3xl text-[--primary-color] poppins-bold" style={{ textShadow: '.5px .5px 0 white' }} >Bondepart</h1>

            <button
                className="md:hidden text-3xl text-[--primary-color] focus:outline-none cursor-pointer"
                onClick={toggleSidebar}
            >
                &#9776;
            </button>

            {/* Sidebar */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden transition-all duration-300 ${isSidebarOpen ? "block" : "hidden"}`}
                onClick={toggleSidebar}
            ></div>

            <div
                className={`fixed top-0 left-0 w-64 bg-gray-900 h-full shadow-lg z-30 transform transition-all duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="p-6 h-full flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl text-white opacity-80 poppins-bold">Bondepart</h1>
                        <ul className="mt-8 flex flex-col gap-y-3 text-white">
                            <NavLink link={"/"} title={"Beranda"} active={false} />
                            <NavLink link={"/about"} title={"Tentang Kami"} active={false} />
                            <NavLink link={"/articles"} title={"Artikel"} active={false} />
                            <div>
                                <button className="hover:text-[--primary-color] transition duration-100 poppins-light font-medium">Galeri</button>
                                <ul className="mt-3 flex flex-col gap-y-3 text-white">
                                    <li className="pl-2">
                                        <NavLink link={"/galery/Jarrdin-Apartemen-by-Bondepart"} title={"Jarrdin Apartemen by Bondepart"} active={false} />
                                    </li>
                                    <li className="pl-2">
                                        <NavLink link={"/galery/Gateway-Pasteur-by-Bondepart"} title={"Gateway Pasteur by Bondepart"} active={false} />
                                    </li>
                                    <li className="pl-2">
                                        <NavLink link={"/galery/Grand-Asia-Afrika-by-Bondepart"} title={"Grand Asia Afrika by Bondepart"} active={false} />
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                    <div className="text-white opacity-80 mt-8">
                        <p>bondepart.co@gmail.com</p>
                        <div className="flex gap-x-3 mt-3">
                            <CiFacebook className="text-white text-2xl opacity-80" />
                            <FaTiktok className="text-white text-2xl opacity-80" />
                            <CiInstagram className="text-white text-2xl opacity-80" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar Desktop */}
            <ul className="hidden md:flex gap-x-8">
                <NavLink link={"/"} title={"Beranda"} active={url === "/"} />
                <NavLink link={"/about"} title={"Tentang Kami"} active={url === "/about"} />
                <NavLink link={"/articles"} title={"Artikel"} active={url === "/articles"} />
                <div className="relative" >
                    <button onMouseOver={() => setDropdownGalery(true)} onMouseOut={() => setDropdownGalery(false)} className={`flex items-center hover:text-[--primary-color] transition duration-100 poppins-light font-medium ${url.includes('galery') ? 'md:text-[--primary-color]' : ''}`} >
                        Galeri
                    </button>
                    <nav onMouseMove={() => setDropdownGalery(true)} onMouseOut={() => setDropdownGalery(false)} className={`w-auto bg-white shadow ${dropdownGalery ? 'block' : 'hidden'} absolute top-full left-0 z-10`}>
                        <ul className="flex flex-col poppins-light whitespace-nowrap">
                            <li>
                                <Link href="/galery/Jarrdin-Apartemen-by-Bondepart" className="px-4 py-2 block hover:bg-[--four-color] font-medium opacity-70" >Jarrdin Apartemen by Bondepart</Link>
                            </li>
                            <li>
                                <Link href="/galery/Gateway-Pasteur-by-Bondepart" className="px-4 py-2 block hover:bg-[--four-color] font-medium opacity-70" >Gateway Pasteur by Bondepart</Link>
                            </li>
                            <li>
                                <Link href="/galery/Grand-Asia-Afrika-by-Bondepart" className="px-4 py-2 block hover:bg-[--four-color] font-medium opacity-70" >Grand Asia Afrika by Bondepart</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </ul>
            <div className="hidden lg:block">
                <Link href={"/contact"} >
                    <PrimaryButton title="Kontak" />
                </Link>
            </div>
        </nav>
    );
}


const NavLink = ({ link, title, active }) => {
    return (
        <li>
            <Link
                className={`hover:text-[--primary-color] transition duration-100 poppins-light font-medium ${active ? 'md:text-[--primary-color]' : ''}`}
                href={link}
            >
                {title}
            </Link>
        </li>
    )
}
