import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import TextHead from "@/Components/TextHead";
import { Head, Link } from "@inertiajs/react";

export default function DetailBlogPage(props) {
    console.log(props.other_blog)
    return (
        <>
            <Head title={props.blog.title} />
            <Navbar />
            <main>
                <section className="w-full min-h-screen px-5 py-10 md:p-10 lg:p-20 flex justify-between gap-x-12 bg-white">
                    <div className="w-[70%]" >
                        <h1 className="text-4xl text-black poppins-bold opacity-80">{props.blog.title}</h1>
                        <ul className="flex text-opacity-70">
                            <li>
                                <Link className="text-black hover:underline hover:text-blue-500" href="/blogs" >/blogs</Link>
                            </li>
                            <li>
                                <p className="cursor-default">{`/${props.blog.title}`}</p>
                            </li>
                        </ul>
                        <figure className="w-full h-96 mt-5">
                            <img className="w-full h-full object-cover" src={props.blog.image_url} alt={props.blog.title} />
                        </figure>
                        <p className="mt-5 open-sans opacity-70 text-black">{props.blog.content}</p>
                    </div>
                    <div className="w-[30%]">
                        <h2 className="text-4xl poppins-bold opacity-80">Other</h2>
                        {props.other_blog.map((data, index) => {
                            return (
                                <div key={index} className="flex gap-x-3 mt-5">
                                    <figure className="w-40 h-24">
                                        <img className="w-full h-full object-cover" src={data.image_url} alt={data.title} />
                                    </figure>
                                    <div className="w-[60%]">
                                        <Link href={`/blog/${data.slug}`} className="poppins-bold opacity-80 hover:underline hover:text-blue-500 line-clamp-2">{data.title}</Link>
                                        <p className="opacity-70 line-clamp-2">{data.content}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <textarea name="" id="content" className="ckeditor"></textarea>
            </main>
            <Footer />
        </>
    )
}