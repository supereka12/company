import Navbar from "@/Components/Navbar";

export default function BerandaPage() {
    return (
        <>
            <Navbar />
            <main>
                <div className="w-full h-[422px] flex justify-center">
                    <div className="w-[100%] relative overflow-hidden">
                        <div className="w-full h-full bg-cover bg-top absolute" style={{ backgroundImage: 'url(/images/pexels-expect-best-79873-323705.jpg)' }}></div>
                        <div className="w-full h-full bg-black/50 absolute top-0"></div>
                        <div class="inset-0 mt-32 m-11">
                            <h1 class="text-white text-2xl font-bold">Tempat Tinggal Modern</h1>
                            <h1 class="text-white text-2xl font-bold">Dengan Fasilitas</h1>
                            <h1 class="text-white text-2xl font-bold">Lengkap</h1>
                            <button class="px-10 py-2 mt-6 bg-gradient-to-r bg-green-500 text-white font-bold rounded-md transition-transform transform-gpu hover:shadow-lg">Contact</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}