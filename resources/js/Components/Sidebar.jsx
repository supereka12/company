import { useState } from "react";
import { Link } from "@inertiajs/react";
import { RiArticleLine } from "react-icons/ri";
import { IoMdImages } from "react-icons/io";


export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <aside
                className={`top-0 left-0 z-40 w-64 h-screen transition-transform bg-[--four-color] border-r-2 border-[--primary-color] sm:translate-x-0 hidden lg:block`}
                aria-label="Sidebar"
            >
                <div className="h-full pl-5 pr-3 overflow-y-auto">
                    <h1 className="text-3xl mt-5 text-[--primary-color] poppins-bold">Bondepart</h1>
                    <h2 className="poppins-bold mt-11 text-xl text-black/80">Menu</h2>
                    <ul className="space-y-2 mt-2">
                        <li>
                            <Link href="/admin/blog" className="flex gap-x-2 px-2 py-1 hover:bg-[--primary-color] hover:text-white/70 group" >
                                <RiArticleLine className="text-2xl text-black/80 group-hover:text-white/80" />
                                <p>Blogs</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/galery" className="flex gap-x-2 px-2 py-1 hover:bg-[--primary-color] hover:text-white/70 group" >
                                <IoMdImages className="text-2xl text-black/80 group-hover:text-white/80" />
                                <p>Galery</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}
