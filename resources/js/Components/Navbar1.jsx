import { Link } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";


export default function Navbar1({ title }) {
    return (
        <nav class="p-5 bg-[--four-color] border-b-2 border-[--primary-color]">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <h1 className="text-3xl poppins-bold opacity-80">{title}</h1>
                <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                    <h2 className="font-bold mr-3">Admin</h2>
                    <a href="">
                        <div>
                            <button type="button" class=" relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                <span class="absolute -inset-1.5"></span>
                                <span class="sr-only">Open user menu</span>
                                <img class="size-8 rounded-full" src="" alt="" />
                            </button>
                        </div>
                    </a>
                </div>
            </div>
        </nav>
    )
}