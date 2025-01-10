import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function ArtikelPage() {
    return (
        <>
            <Navbar />
            <div className="bg-teal-800 h-[250px] text-white py-12">
                <div className="container mx-auto flex flex-col items-center">
                    <h2 className="text-3xl text-center font-bold mb-1">Aritikel Bondepart</h2>
                    <p>Di sini Anda dapat menemukan berita</p>
                    <p className="mb-6">perusahaan dan artikel bisnis terkini.</p>
                    <form className="w-full max-w-md">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Pencarian Artikel"
                                required
                            />
                        </div>
                    </form>
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