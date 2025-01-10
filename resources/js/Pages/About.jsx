import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function AboutPage() {
    return (
        <>
        <Navbar />
        
        <div className="bg-teal-600 text-black py-12 ">
                <div className="container">
                    <div className="w-full h-40">


                
                    </div>  
                </div>
            </div>

            <main>
                <div className="bg-white text-black py-12">
                    <div className="container mx-auto flex flex-col md:flex-row mt-8 px-16 ">
                        <div className="w-full md:w-1/2 mb-6 mr-5 md:mb-0">
                            <img src="/images/foto1.jpg" alt="Example" className="w-80 h-96 rounded-lg shadow-lg m-10" />
                        </div>
                        <div className="w-full md:w-1/2 md:pl-8 mt-10">
                            <h2 className="text-4xl font-bold mb-3">Tentang Kami</h2>
                            <p>Selamat datang di Bondepart Kami adalah pengelola apartemen yang berkomitmen untuk memberikan pengalaman tempat terbaik. Dengan lokasi strategis dan fasilitas lengkap, kami berusaha menciptakan lingkungan yang nyaman, aman, dan memadai untuk kebutuhan hidup modern Anda.</p>
                        </div>
                    </div>
                </div>
            </main>

        <Footer />
        </>
    )
}