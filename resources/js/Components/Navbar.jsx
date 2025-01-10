import { Link } from "@inertiajs/react";

export default function Navbar() {
    return (
        <nav className="w-full px-16 py-2 bg-white border-b border-[--primary-color] flex items-center justify-between sticky top-0 z-10">
            <div>
                <h1 className="text-3xl text-[--primary-color] poppins-bold">Bondepart</h1>
            </div>
            <ul className="flex gap-x-8">
                <li>
                    <Link className="text-[--primary-color] hover:text-[--primary-color] transition duration-100" href="/">Beranda</Link>
                </li>
                <li>
                    <Link className="hover:text-[--primary-color] transition duration-100" href="/about">Tentang Kami</Link>
                </li>
                <li>
                    <Link className="hover:text-[--primary-color] transition duration-100" href="/artikel">Artikel</Link>
                </li>
                <li>
                    <Link className="hover:text-[--primary-color] transition duration-100" href="galery">Galery</Link>
                </li>   
            </ul>
            <button class="px-7 py-2 bg-gradient-to-r bg-teal-700 text-white font-bold rounded-full transition-transform transform-gpu hover:shadow-lg">Contact</button>
        </nav>
    )
}