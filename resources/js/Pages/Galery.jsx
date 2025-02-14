import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { useEffect, useState, useCallback } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import TextHead from "@/Components/TextHead";
import { Head } from "@inertiajs/react";
import axios from "axios";
import { IoMdClose } from "react-icons/io";

export default function GaleryPage({ title, apartmentId }) {
    const [paginate, setPaginate] = useState({
        current_page: 1,
        last_page: 1,
    });

    const [photos, setPhotos] = useState([]);
    const [filter, setFilter] = useState("all");
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState("all");
    const [PreviewPhoto, setPreviewPhoto] = useState(null);

    // Load photos with filter and pagination
    const loadPhotos = async (page = 1, filter = "all") => {
        setLoading(true);
        try {
            const response = await axios.get(`/api/v1/photos/${title.split(" ").join("-")}`, {
                params: {
                    page: page,
                    category: filter,
                },
            });

            console.log(response.data)

            const newPhotos = response.data.data;
            setPaginate({
                current_page: response.data.current_page,
                last_page: response.data.last_page,
            });

            setPhotos((prevPhotos) =>
                page === 1 ? newPhotos : [...prevPhotos, ...newPhotos]
            );
        } catch (error) {
            console.error("Error fetching photos:", error);
        } finally {
            setLoading(false);
        }
    };

    // Update the filter when a button is clicked
    const handleFilterChange = (filter) => {
        if (active !== filter) {
            setActive(filter);
            setFilter(filter);
            setPaginate({
                current_page: 1,
                last_page: 1,
            });
            setPhotos([]);
            loadPhotos(1, filter);
        }
    };

    // Infinite scroll logic
    const handleScroll = useCallback(() => {
        const bottom =
            document.documentElement.scrollHeight <
            document.documentElement.scrollTop + window.innerHeight + 80;
        const parseCurrentPage = parseInt(paginate.current_page);
        const parseLastPage = parseInt(paginate.last_page);

        if (bottom && !loading && parseCurrentPage < parseLastPage) {
            loadPhotos(parseCurrentPage + 1, filter);
        }
    }, [loading, paginate.current_page, paginate.last_page, filter]);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    useEffect(() => {
        loadPhotos(1, filter);
    }, [filter]);

    // Attach scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <>
            <Head title="Galery" />
            <Navbar />
            <main>
                <section className="min-h-screen h-auto px-5 py-10 md:p-10 lg:p-20 flex flex-col items-center bg-[--third-color] text-center">
                    <div className="w-full md:w-[80%]">
                        <TextHead title={`${title}`} />
                    </div>

                    <ul className="mt-5 flex gap-x-3" data-aos="zoom-in">
                        {[{ key: "Semua", value: "all" }, { key: "Eksterior", value: "exterior" }, { key: "Interior", value: "interior" }, { key: "View", value: "view" }].map((category, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => handleFilterChange(category.value)}
                                    className={`px-7 py-3 border border-[--primary-color] rounded-full ${active === category.value
                                        ? "bg-[--primary-color] text-white"
                                        : "hover:text-white hover:bg-[--primary-color]"
                                        }`}
                                >
                                    {category.key.charAt(0).toUpperCase() + category.key.slice(1)}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {PreviewPhoto ? (
                        <div className="w-full h-full bg-black/50 flex justify-center items-center fixed top-0 left-0 z-10">
                            <div className="w-96 h-auto relative">
                                <img className="w-full h-auto" src={PreviewPhoto.image_url} alt="photo" />
                                <div
                                    onClick={() => {
                                        document.body.style.overflow = "auto";
                                        setPreviewPhoto(null);
                                    }}
                                    className="absolute top-1 right-1 cursor-pointer"
                                >
                                    <IoMdClose className="text-3xl text-[--primary-color] text-opacity-80" />
                                </div>
                            </div>
                        </div>
                    ) : null}

                    {photos.length === 0 ? (
                        null
                    ) : (
                        <div className="w-full mt-5 grid grid-cols-2 lg:grid-cols-4 gap-3">
                            {photos.map((data, index) => (
                                <div
                                    onClick={() => {
                                        document.body.style.overflow = "hidden";
                                        setPreviewPhoto(data);
                                    }}
                                    className="shadow h-[24rem] md:h-[30rem] cursor-pointer relative bg-gray-200"
                                    key={index}
                                >
                                    <img
                                        className="w-full h-full object-cover hover:brightness-50"
                                        src={data.image_url}
                                        alt={`image ${index}`}
                                        loading="lazy"
                                        onLoad={(e) => e.currentTarget.classList.remove("hidden")}
                                        onError={(e) => e.currentTarget.classList.add("hidden")}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="w-full mt-5 grid grid-cols-2 lg:grid-cols-4 gap-3" >
                        {loading && Array.from({ length: 12 }).map((_, index) => (
                            <div key={index} className="w-full shadow h-[24rem] md:h-[30rem] cursor-pointer relative bg-gray-200"></div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
