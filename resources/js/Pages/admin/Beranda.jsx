import { router } from "@inertiajs/react";
import { useState } from "react";

export default function Beranda({url_image}) {
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
            <h1 className="text-2xl font-bold mb-4">Upload Image</h1>
            <img src={url_image} alt="" />

            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="mb-4"
                    required
                />
                <input type="text" onChange={(e) => setTitle(e.target.value)} required/>
                <input type="text" onChange={(e) => setContent(e.target.value)} required/>
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

