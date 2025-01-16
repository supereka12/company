import { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

export default function Navbar() {
    const { url } = usePage();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
        <nav className="w-full px-5 md:px-10 lg:px-20 py-3 bg-white flex items-center justify-between sticky top-0 z-10">
            <h1 className="text-3xl text-[--five-color] poppins-bold">Bondepart</h1>

            <button
                className="md:hidden text-3xl text-[--primary-color] focus:outline-none"
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
                            <NavLink link={"/"} title={"Home"} active={false} />
                            <NavLink link={"/about"} title={"About Us"} active={false} />
                            <NavLink link={"/blog"} title={"Blog"} active={false} />
                            <NavLink link={"/galery"} title={"Galery"} active={false} />
                        </ul>
                    </div>
                    <div className="text-white opacity-80 mt-8">
                        <p>bondepart@gmail.com</p>
                        <p>xxx-xxxx-xxxx</p>
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
                <NavLink link={"/"} title={"Home"} active={url === "/"} />
                <NavLink link={"/about"} title={"About Us"} active={url === "/about"} />
                <NavLink link={"/blog"} title={"Blogs"} active={url === "/blog"} />
                <NavLink link={"/galery"} title={"Galery"} active={url === "/galery"} />
            </ul>
            <div className="hidden lg:block">
                <Link href={"/contact"} >
                <PrimaryButton title="Contact Us" />
                </Link>
            </div>
        </nav>
    );
}


const NavLink = ({ link, title, active }) => {
    return (
        <li>
            <Link
                className={`hover:text-[--primary-color] transition duration-100 poppins-light hover:underline font-medium ${active ? 'md:underline md:text-[--primary-color]' : ''}`}
                href={link}
            >
                {title}
            </Link>
        </li>
    )
}
