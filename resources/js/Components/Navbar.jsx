import { Link } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";

export default function Navbar() {
    const location = use
    return (
        <nav className="w-full px-20 py-2 bg-white border-b-2 border-[--primary-color] flex items-center justify-between sticky top-0 z-10">
            <div>
                <h1 className="text-3xl text-[--primary-color] poppins-bold">Bondepart</h1>
            </div>
            <ul className="flex gap-x-8">
                <li>
                    <Link className="text-[--primary-color] hover:text-[--primary-color] transition duration-100 poppins-light" href="/">Home</Link>
                </li>
                <li>
                    <Link className="hover:text-[--primary-color] transition duration-100 poppins-light" href="/about">About Us</Link>
                </li>
                <li>
                    <Link className="hover:text-[--primary-color] transition duration-100 poppins-light" href="/artikel">Blog</Link>
                </li>
                <li>
                    <Link className="hover:text-[--primary-color] transition duration-100 poppins-light" href="galery">Galery</Link>
                </li>   
            </ul>
            <PrimaryButton title={"Contact"} />
        </nav>
    )
}