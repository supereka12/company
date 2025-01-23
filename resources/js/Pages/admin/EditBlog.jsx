import { useState } from "react";
import { router, usePage } from "@inertiajs/react";
import { Editor } from "@tinymce/tinymce-react";
import { IoMdImages } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";

export default function EditBlog() {
    const { props } = usePage();
    const { blog } = props;

    const [title, setTitle] = useState(blog.title || "");
    const [content, setContent] = useState(blog.content || "");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(blog.image_url || "");

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        if (image) formData.append("image", image);
                router.post(`/admin/blog/${blog.id}`, formData);
            };

    return (
        <div className="container mx-auto">
            <form
                className="w-full bg-[--third-color]"
                onSubmit={handleSubmit}
            >
                <div className="flex gap-x-10 px-4 py-6">
                    <div className="mb-4 w-auto">
                        {preview ? (
                            <div className="w-auto h-auto relative">
                                <img className="h-44 w-auto" src={preview} alt="Thumbnail" />
                                <label className="p-2 bg-white rounded-full absolute top-2 right-2" htmlFor="image">
                                    <FaPencilAlt className="text-xl text-black text-opacity-70" />
                                </label>
                            </div>
                        ) : (
                            <label className="w-44 h-44 p-8 border-2 border-gray-500 shadow text-gray-700 bg-white font-bold mb-2 flex flex-col justify-center items-center cursor-pointer" htmlFor="image">
                                <IoMdImages className="text-6xl" />
                                <h2 className="text-center block text-gray-700 font-bold mt-2">Thumbnail</h2>
                            </label>
                        )}
                        <input
                            className="hidden"
                            type="file"
                            id="image"
                            name="image"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                setImage(file);
                                setPreview(URL.createObjectURL(file));
                            }}
                            accept="image/*"
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
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <Editor
                        apiKey="y4ngmv9wvgdzjlx5pynl36rw5uyji3sridg6uhivna9c1y0i"
                        value={content}
                        onEditorChange={(newValue) => setContent(newValue)}
                        init={{
                            height: 1600,
                            menubar: true,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor',
                                'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'help', 'wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic underline strikethrough | ' +
                                'alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | ' +
                                'link image media | forecolor backcolor emoticons | removeformat | help | insertdatetime preview',
                        }}
                    />
                </div>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Update Blog
                </button>
            </form>
        </div>
    );
}
