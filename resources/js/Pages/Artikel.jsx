import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function ArtikelPage() {
    return (
        <>
            <Navbar />
            <div className="bg-teal-800 h-[300px] text-white py-12">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <form class=" mx-auto">
                        <label for="default-search" class="mb-2 text-sm font-medium text-white sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}