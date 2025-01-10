import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer>

        <div class="bg-black">
            <div class="max-w-screen-lg px-4 sm:px-6 text-white sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto ">
                <div class="p-5">
                    <h3 class="font-bold text-xl text-green-500">Bondepart</h3>
                    <p className="text-gray-400 my-3">© 2025 Bondepart. Semua hak dilindungi undang-undang.</p>
                </div>
                <div class="p-5">
                    <div class="text-sm uppercase text-white font-bold">Pelajari Lainnya</div>
                    <a class="my-1 block" href="/#">Beranda <span class="text-white text-xs p-1"></span></a><a
                        class="my-1 block" href="/#">Tentang Kami <span class="text-white text-xs p-1"></span></a><a
                        class="my-1 block" href="/#">Fasilitas <span class="text-white text-xs p-1"></span></a><a
                        class="my-1 block" href="/#">Galery<span class="text-white text-xs p-1"></span></a>
                </div>
                <div class="p-5">
                    <div class="text-sm uppercase text-white font-bold">Hubungi Kami</div>
                    <a class="my-1 block" href="/#">0843-3434-5323
                        <span class="text-teal-600 text-xs p-1"></span></a><a class=" block" href="/#">Bondepart@gmail.com
                        <span class="text-teal-600 text-xs p-1"></span></a>
                </div>
            </div>
        </div>
    </footer>
    )
}