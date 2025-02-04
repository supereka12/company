import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import TextHead from "@/Components/TextHead";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { IoMdSearch } from "react-icons/io";
import { Head, Link, router } from "@inertiajs/react";

export default function BlogPage(props) {
    const [keyword, setKeyword] = useState('')
    const [listSearch, setListSearch] = useState([])
    const [activeSearch, setActiveSearch] = useState(false)
    const inputSearch = useRef(null)
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const handleSearch = (e) => {
        setKeyword(e.target.value)
        const search = props.blog.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(search)
        setListSearch(search)
    }

    const handleFocus = () => {
        setActiveSearch(true)
        console.log(inputSearch.current)
        inputSearch.current.focus()
    }

    function getTextWithoutImage(content) {
        const tempDiv = document.createElement('div')
        tempDiv.innerHTML = content

        const images = tempDiv.querySelectorAll('img')
        images.forEach(img => img.remove())

        const textOnly = tempDiv.textContent || tempDiv.innerText

        return textOnly.substring(0, 350) + '...'
    }


    return (
        <>
            <Head title="Blog" />
            <Navbar />
            <main>
                <section className="bg-gradient-to-br from-[--secondary-color] to-[--primary-color] h-[70vh] px-5 py-10 md:p-10 lg:p-20 flex flex-col items-center justify-center text-center text-white">
                    <TextHead title={"Artikel Bondepart"} color={"text-white"} />
                    <p className="w-full md:w-[420px] open-sans mt-2 text-2xl text-white opacity-70" data-aos="zoom-in">
                        Di sini Anda dapat menemukan berita perusahaan dan artikel bisnis terkini.                    </p>
                    {/* <div className="w-full md:w-2/4 lg:w-[40%] mt-5" data-aos="zoom-in">
                        <div onClick={handleFocus} className="w-full py-2 pl-12 pr-2 flex items-center gap-x-3 bg-white text-black text-opacity-60 outline-none text-xl text-start cursor-pointer hover:ring-2 hover:ring-black">
                            <IoMdSearch className="text-2xl text-black opacity-60 absolute left-4 top-1/2 transform -translate-y-1/2" />
                            <p>Search...</p>
                        </div>
                        <div className={`h-auto bg-white ${activeSearch ? 'w-full' : 'w-0 overflow-hidden'} absolute top-0 left-0`}>
                            <div className="w-full relative">
                                <IoMdSearch className="text-2xl text-black opacity-60 absolute left-4 top-1/2 transform -translate-y-1/2" />
                                <input onChange={handleSearch} value={keyword} ref={inputSearch} className="w-full py-2 pl-12 pr-2 bg-white text-black text-opacity-60 focus:ring-2 focus:ring-black text-xl text-start cursor-pointer hover:ring-2 hover:ring-black" placeholder="Search..." type="text" />
                            </div>
                                <ul className="w-full bg-white text-black" >
                                    {keyword == ""
                                    ? null
                                : listSearch.map((data, index) => {
                                    return (
                                        <li key={index} >
                                            <button onClick={() => router.get(`/blog/${data.slug}`)} className="w-full px-3 py-2 poppins-light hover:bg-[--bg-secondary] text-start">{data.title}</button>
                                        </li>
                                    )
                                })}
                                </ul>
                            </div>
                    </div> */}
                </section>
                <section className="w-full min-h-screen h-auto px-5 py-10 md:p-10 lg:p-20 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-5">
                        {props.blog.map((data, index) => {
                            return (
                                <div key={index} className="w-full">
                                    <figure className="w-full h-52 md:h-40">
                                        <img className="w-full h-full object-cover" src={data.image_url} alt={data.title} />
                                    </figure>
                                    <Link href={`/articles/${data.slug}`} className="font-bold text-xl poppins-light line-clamp-2 opacity-80 text-black hover:underline">{data.title}</Link>
                                    <p className="open-sans line-clamp-3 opacity-70 text-black">{getTextWithoutImage(data.content)}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}