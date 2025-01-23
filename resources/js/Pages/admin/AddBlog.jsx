import { useState } from 'react';
import { router } from '@inertiajs/react';
import { Editor } from '@tinymce/tinymce-react';
import { IoMdImages } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";

export default function BlogForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', image);

        router.post('/upload', formData);
    };

    return (
        <>
            <form
                className="w-full bg-[--third-color]"
                onSubmit={handleSubmit}
            >

                <div className='flex gap-x-10 px-20 py-6' >
                    <div className="mb-4 w-auto">
                        {preview
                            ? <div className='w-auto h-auto relative'>
                                <img className='h-44 w-auto' src={preview} alt='Thumbnail' />
                                <label className='p-2 bg-white rounded-full absolute top-2 right-2 cursor-pointer' htmlFor="image">
                                    <FaPencilAlt className='text-xl text-black text-opacity-70 hover:text-opacity-50' />
                                </label>
                            </div>
                            : <label className="w-72 h-44 p-8 border-2 border-gray-500 shadow text-gray-700 bg-white font-bold mb-2 flex flex-col justify-center items-center cursor-pointer" htmlFor="image">
                                <IoMdImages className="text-6xl" />
                                <h2 className="text-center block text-gray-700 font-bold mt-2" >Thumbnail</h2>
                            </label>}
                        <input
                            className='hidden'
                            type="file"
                            id="image"
                            name="image"
                            onChange={(e) => {
                                const file = e.target.files[0]
                                setImage(file)
                                setPreview(URL.createObjectURL(file));
                            }}
                            accept="image/*"
                            required
                        />
                    </div>

                    <div className="w-full md:w-2/4 mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                            Title:
                        </label>
                        <input
                            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="title"
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* TinyMCE Editor untuk Deskripsi */}
                <div className="mb-4">
                    <Editor
                        apiKey="y4ngmv9wvgdzjlx5pynl36rw5uyji3sridg6uhivna9c1y0i"
                        value={content}
                        onEditorChange={(newValue) => setContent(newValue)}
                        init={{
                            height: 1600,
                            menubar: true,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount', 'emoticons'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic underline strikethrough | ' +
                                'alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | ' +
                                'link image media | forecolor backcolor emoticons | removeformat | help | insertdatetime preview',
                            content_style: `
            /* Set base font family and size */
            body {
                font-family: Helvetica, Arial, sans-serif;
                font-size: 14px;
                line-height: 1.6;
            }

            /* Remove all default heading styles */
            h1, h2, h3, h4, h5, h6 {
                font-size: inherit;
                font-weight: inherit;
            }

            /* Reset list styles */
            ul, ol {
                margin: 0 0 1rem 1.25rem;
            }
            ul {
                list-style-type: disc;
            }
            ol {
                list-style-type: decimal;
            }

            /* Links */
            a {
                color: #1a73e8;
                text-decoration: underline;
            }

            /* Blockquote */
            blockquote {
                margin: 1rem 0;
                padding-left: 1rem;
                border-left: 3px solid #ccc;
            }

            /* Code */
            code {
                font-family: "Courier New", Courier, monospace;
                background-color: #f4f4f4;
                padding: 0.2rem 0.4rem;
                border-radius: 4px;
            }

            /* Images */
            img {
                width: 100%;
                max-width: 100%;
                height: auto;
            }
        `,
                        }}
                    />
                </div>
                {/* Tombol Submit */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Upload
                </button>
            </form>
        </>
    );
}