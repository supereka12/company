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
        <>
            <form
                className="w-full mt-20 p-6"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl text-center font-bold mb-6">Isi Data Blog</h2>

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

                {/* Input untuk Judul */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                        Title:
                    </label>
                    <input
                        className="w-full md:w-80 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                {/* TinyMCE Editor untuk Deskripsi */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="content">
                        Content
                    </label>
                    <Editor
                        apiKey="wvukpkufstihiwwknhc7ctc9pyz3itibe86gc4q8igpajwrg"
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
