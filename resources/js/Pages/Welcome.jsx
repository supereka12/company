import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function BerandaPage() {
    return (
        <>
            <Navbar />
            <main>
                <div className="w-full h-[552px] flex justify-center">
                    <div className="w-[100%] relative overflow-hidden">
                        <div
                            className="w-full h-full bg-cover bg-top absolute"
                            style={{ backgroundImage: "url(/images/pexels-expect-best-79873-323705.jpg)" }}
                        ></div>
                        <div className="w-full h-full bg-black/60 absolute top-0"></div>
                        <div className="absolute inset-0 mt-28 m-11">
                            <h1 className="text-white text-4xl font-bold drop-shadow-lg mb-3">
                                Tempat Tinggal Modern
                            </h1>
                            <h1 className="text-white text-4xl font-bold drop-shadow-lg mb-5">
                                Dengan Fasilitas Lengkap
                            </h1>
                            <p>Rasakan gaya hidup yang memadukan yang terbaik dari kedua dunia kenyamanan dengan kemewahan.</p>
                            <button className="px-10 py-2 mt-6 bg-gradient-to-r bg-teal-800 text-white font-bold rounded-md transition-transform transform-gpu hover:scale-105 hover:shadow-lg">
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <main>
                <div className="bg-teal-600 text-white py-12">
                    <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
                        <div className="w-full md:w-1/2 mb-6 mr-5 md:mb-0">
                            <img src="/images/foto1.jpg" alt="Example" className="w-80 h-96 rounded-lg shadow-lg m-10" />
                        </div>
                        <div className="w-full md:w-1/2 md:pl-8">
                            <h2 className="text-4xl font-bold mb-4">Mengapa Memilih</h2>
                            <h2 className="text-4xl font-bold mb-4">Bondepart?</h2>
                            <ul className="space-y-4">
                                <li>
                                    Rasakan gaya hidup yang memadukan yang terbaik dari kedua dunia—kenyamanan dengan kemewahan.
                                </li>
                                <li>
                                    <span className="font-bold text-2xl">Fasilitas Lengkap</span>
                                    <p>
                                        Kolam renang,  taman bermain, dan keamanan 24 jam.
                                    </p>
                                </li>
                                <li>
                                    <span className="font-bold text-2xl">Fasilitas Lengkap</span>
                                    <p>
                                        Kolam renang,  taman bermain, dan keamanan 24 jam.
                                    </p>
                                </li>
                                <li>
                                    <span className="font-bold text-2xl">Fasilitas Lengkap</span>
                                    <p>
                                        Kolam renang,  taman bermain, dan keamanan 24 jam.
                                    </p>
                                </li>
                                <li>
                                    <span className="font-bold text-2xl">Fasilitas Lengkap</span>
                                    <p>
                                        Kolam renang,  taman bermain, dan keamanan 24 jam.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <div>
                <h2 className="text-4xl mt-10 text-center font-bold mb-4">Fasilitas Ungulan</h2>
            </div>
            <div class="grid grid-cols-1 m-5 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <a href="#" class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-white dark:border-gray-700 dark:hover:bg-slate-100">
                    <h5 class="mb-3 text-center text-2xl font-bold tracking-tight text-white-900 dark:text-black">Umum</h5>
                    <p class="font-normal text-black">- Area merokok</p>
                    <p class="font-normal text-black">- Ruang keluarga</p>
                    <p class="font-normal text-black">- Perapian di lobby</p>
                    <p class="font-normal text-black">- Alat pemanas</p>
                    <p class="font-normal text-black">- Area bebas asap rokok</p>
                    <p class="font-normal text-black">- Kolam renang</p>
                    <p class="font-normal text-black">- Teras rooftop</p>
                </a>
                <a href="#" class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-white dark:border-gray-700 dark:hover:bg-slate-100">
                    <h5 class="mb-3 text-center text-2xl font-bold tracking-tight text-white-900 dark:text-black">Umum</h5>
                    <p class="font-normal text-black">- Area merokok</p>
                    <p class="font-normal text-black">- Ruang keluarga</p>
                    <p class="font-normal text-black">- Perapian di lobby</p>
                    <p class="font-normal text-black">- Alat pemanas</p>
                    <p class="font-normal text-black">- Area bebas asap rokok</p>
                    <p class="font-normal text-black">- Kolam renang</p>
                    <p class="font-normal text-black">- Teras rooftop</p>
                </a>
                <a href="#" class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-white dark:border-gray-700 dark:hover:bg-slate-100">
                    <h5 class="mb-3 text-center text-2xl font-bold tracking-tight text-white-900 dark:text-black">Umum</h5>
                    <p class="font-normal text-black">- Area merokok</p>
                    <p class="font-normal text-black">- Ruang keluarga</p>
                    <p class="font-normal text-black">- Perapian di lobby</p>
                    <p class="font-normal text-black">- Alat pemanas</p>
                    <p class="font-normal text-black">- Area bebas asap rokok</p>
                    <p class="font-normal text-black">- Kolam renang</p>
                    <p class="font-normal text-black">- Teras rooftop</p>
                </a>
            </div>

            <div className="bg-teal-700 text-white py-12 mt-14">
                <div className="container">
                    <div className="w-full h-40">
                        <h2 className="text-4xl m-10 text-center font-bold mb-4">Nikmati tempat tinggal berkualitas hanya di Bondepart. Hubungi kami hari ini untuk informasi lebih lanjut.</h2>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}