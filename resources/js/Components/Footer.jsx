import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer>

        <div class="bg-black">
            <div class="max-w-screen-lg px-4 sm:px-6 text-white sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto ">
                <div class="p-5">
                    <h3 class="font-bold text-xl text-green-500">Bondepart</h3>
                    <p className="text-gray-400 my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque, voluptas ea hic, nihil.</p>
                </div>
                <div class="p-5">
                    <div class="text-sm uppercase text-white font-bold">Support</div>
                    <a class="my-3 block" href="/#">Help Center <span class="text-white text-xs p-1"></span></a><a
                        class="my-3 block" href="/#">Privacy Policy <span class="text-white text-xs p-1"></span></a><a
                        class="my-3 block" href="/#">Conditions <span class="text-white text-xs p-1"></span></a>
                </div>
                <div class="p-5">
                    <div class="text-sm uppercase text-white font-bold">Contact us</div>
                    <a class="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA
                        <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">contact@company.com
                        <span class="text-teal-600 text-xs p-1"></span></a>
                </div>
            </div>
        </div>
    </footer>
    )
}