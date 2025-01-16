import { router } from "@inertiajs/react";
import { useState } from "react";


export default function Beranda({ url_image }) {
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    // Fungsi untuk mengirimkan file ke backend menggunakan Inertia
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('image', image);
        formData.append('title', title);
        formData.append('content', content);

        router.post("/upload", formData)
    };

    return (
        <div className="container mx-auto p-4">
            <img src={url_image} alt="" />

            <form className="max-w-md mx-auto mt-20 p-6 bg-slate-100 border rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <h2 class="text-2xl text-center font-bold mb-6">isi data blog</h2>
                <input
                    type="file"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="mb-4"
                    required
                />
                <div class="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" for="name">
                        Judul:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div class="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" for="name">
                        Deskripsi:
                    </label>
                    <textarea class="shadow appearance-none border h-36 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(e) => setContent(e.target.value)} required> </textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Upload
                </button>
            </form>

            {imageUrl && (
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Image URL:</h2>
                    <a
                        href={imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                    >
                        View Image
                    </a>
                </div>
            )}
        </div>
    );
};

