import { useState } from 'react';
import { router } from '@inertiajs/react';
import { Editor } from '@tinymce/tinymce-react';

export default function BlogForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    // Fungsi untuk menangani submit form
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', image);

        // Kirim data ke backend menggunakan Inertia
        router.post('/upload', formData);
    };

    return (
        <div className="container mx-auto p-4">
            <form 
                className="w-full mx-auto mt-20 p-6 bg-slate-100 border rounded-lg shadow-lg" 
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl text-center font-bold mb-6">Isi Data Blog</h2>

                {/* Input untuk Judul */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                        Judul:
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        type="text" 
                        id="title"
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>

                {/* Input untuk Gambar */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
                        Thumbnail:
                    </label>
                    <input 
                        type="file" 
                        id="image" 
                        name="image" 
                        onChange={(e) => setImage(e.target.files[0])} 
                        accept="image/*"
                        required
                    />
                </div>

                {/* TinyMCE Editor untuk Deskripsi */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="content">
                        Deskripsi:
                    </label>
                    <Editor
                        apiKey="wvukpkufstihiwwknhc7ctc9pyz3itibe86gc4q8igpajwrg"  // Ganti dengan API key TinyMCE Anda
                        value={content}
                        onEditorChange={(newValue) => setContent(newValue)}
                        init={{
                            height: 300,
                            menubar: false,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | bold italic | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
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
        </div>
    );
}
