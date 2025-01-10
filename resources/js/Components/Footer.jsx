import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="shadow bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <h1 className="text-3xl text-white opacity-80 poppins-bold">Bondepart</h1>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline md:me-6">Galery</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <span className="block text-sm sm:text-center text-gray-400">© 2025 Bondepart. All Rights Reserved.</span>
            </div>
        </footer>
    )
}