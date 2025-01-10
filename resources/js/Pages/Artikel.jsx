import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import TextHead from "@/Components/TextHead";

export default function ArtikelPage() {
    return (
        <>
            <Navbar />
            <div className="bg-[--primary-color] h-[70vh] flex flex-col items-center justify-center text-center text-white py-12">
                <TextHead title={"Artikel Bondepart"} color={"text-white"} />
                <p className="w-[420px] open-sans mt-2 text-2xl text-white opacity-70">Di sini Anda dapat menemukan berita perusahaan dan artikel bisnis terkini.</p>
                <div className="w-[40%] mt-5">
                    <input className="w-full py-3 pl-3 pr-2 bg-white text-black text-opacity-60 rounded-full outline-none" type="text" placeholder="Pencarian Artikel" />
                </div>
            </div>

            <div class="flex justify-center">
                <div class="grid grid-cols-1 m-5 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    <div class="max-w-xs bg-white border border-gray-200 shadow dark:bg-white rounded-lg">
                        <a href="#">
                            <img class="w-full h-40 object-cover rounded-t-lg" src="/images/RuangTamu.jpg" alt="" />
                        </a>
                        <div class="p-3">
                            <a href="#">
                                <h5 class="mb-2 text-base font-semibold tracking-tight text-red-500">Interior populer tahun 2025 di Indonesia</h5>
                            </a>
                            <p class="mb-3 text-sm font-normal text-gray-700">Konsep circular design atau desain melingkar juga menjadi tren, di mana setiap elemen interior.....</p>
                        </div>
                    </div>
                    <div class="max-w-xs bg-white border border-gray-200 shadow dark:bg-white rounded-lg">
                        <a href="#">
                            <img class="w-full h-40 object-cover rounded-t-lg" src="/images/RuangTamu.jpg" alt="" />
                        </a>
                        <div class="p-3">
                            <a href="#">
                                <h5 class="mb-2 text-base font-semibold tracking-tight text-red-500">Interior populer tahun 2025 di Indonesia</h5>
                            </a>
                            <p class="mb-3 text-sm font-normal text-gray-700">Konsep circular design atau desain melingkar juga menjadi tren, di mana setiap elemen interior.....</p>
                        </div>
                    </div>
                    <div class="max-w-xs bg-white border border-gray-200 shadow dark:bg-white rounded-lg">
                        <a href="#">
                            <img class="w-full h-40 object-cover rounded-t-lg" src="/images/RuangTamu.jpg" alt="" />
                        </a>
                        <div class="p-3">
                            <a href="#">
                                <h5 class="mb-2 text-base font-semibold tracking-tight text-red-500">Interior populer tahun 2025 di Indonesia</h5>
                            </a>
                            <p class="mb-3 text-sm font-normal text-gray-700">Konsep circular design atau desain melingkar juga menjadi tren, di mana setiap elemen interior.....</p>
                        </div>
                    </div>
                    <div class="max-w-xs bg-white border border-gray-200 shadow dark:bg-white rounded-lg">
                        <a href="#">
                            <img class="w-full h-40 object-cover rounded-t-lg" src="/images/RuangTamu.jpg" alt="" />
                        </a>
                        <div class="p-3">
                            <a href="#">
                                <h5 class="mb-2 text-base font-semibold tracking-tight text-red-500">Interior populer tahun 2025 di Indonesia</h5>
                            </a>
                            <p class="mb-3 text-sm font-normal text-gray-700">Konsep circular design atau desain melingkar juga menjadi tren, di mana setiap elemen interior.....</p>
                        </div>
                    </div>
                    <div class="max-w-xs bg-white border border-gray-200 shadow dark:bg-white rounded-lg">
                        <a href="#">
                            <img class="w-full h-40 object-cover rounded-t-lg" src="/images/RuangTamu.jpg" alt="" />
                        </a>
                        <div class="p-3">
                            <a href="#">
                                <h5 class="mb-2 text-base font-semibold tracking-tight text-red-500">Interior populer tahun 2025 di Indonesia</h5>
                            </a>
                            <p class="mb-3 text-sm font-normal text-gray-700">Konsep circular design atau desain melingkar juga menjadi tren, di mana setiap elemen interior.....</p>
                        </div>
                    </div>
                    <div class="max-w-xs bg-white border border-gray-200 shadow dark:bg-white rounded-lg">
                        <a href="#">
                            <img class="w-full h-40 object-cover rounded-t-lg" src="/images/RuangTamu.jpg" alt="" />
                        </a>
                        <div class="p-3">
                            <a href="#">
                                <h5 class="mb-2 text-base font-semibold tracking-tight text-red-500">Interior populer tahun 2025 di Indonesia</h5>
                            </a>
                            <p class="mb-3 text-sm font-normal text-gray-700">Konsep circular design atau desain melingkar juga menjadi tren, di mana setiap elemen interior.....</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}