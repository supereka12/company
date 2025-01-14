import { Link } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";


export default function Navbar1() {
    return (
        <nav class="bg-white ml-[20%] dark:bg-slate-200">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <h1 className="text-2xl ">Daftar Artikel</h1>
                <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                    <a href="">
                        <div>
                            <button type="button" class=" mr-5 relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
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