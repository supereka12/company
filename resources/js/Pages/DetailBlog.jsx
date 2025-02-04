import Footer from "@/Components/Footer"
import Navbar from "@/Components/Navbar"
import TextHead from "@/Components/TextHead"
import { Head, Link } from "@inertiajs/react"

export default function DetailBlogPage(props) {
 
    return (
        <>
            <Head title={props.blog.title} />
            <Navbar />
            <main>
                <section className="w-full min-h-screen px-5 py-10 md:p-10 lg:p-20 flex flex-col items-center gap-x-12 bg-[--third-color]">
                    <nav aria-label="breadcrumb" class="w-3/4">
                        <ol class="flex w-full flex-wrap items-center rounded-md py-2">
                            <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                                <Link href="/">Bondepart</Link>
                                <span class="pointer-events-none mx-2 text-slate-800">
                                    /
                                </span>
                            </li>
                            <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                                <Link href="/articles">Artikel</Link>
                            </li>
                        </ol>
                    </nav>
                    <div className="w-3/4 flex flex-col items-center" >
                    <div className="w-full">
                        <h1 className="text-4xl text-start text-black poppins-bold opacity-80 leading-[47px] tracking-widest">{props.blog.title}</h1>
                    </div>
                        <div className="w-full no-tailwind mt-5" dangerouslySetInnerHTML={{ __html: props.blog.content }} />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}