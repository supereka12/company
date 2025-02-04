import Sidebar from "@/Components/Sidebar";
import Navbar from "@/Components/Navbar1";
import { useState, useEffect } from "react";
import axios from "axios";

export default function GaleryAdminPage() {
    const [photos, setPhotos] = useState([]);
    const [paginate, setPaginate] = useState({
        current_page: 1,
        last_page: 1,
    });
    const [filter, setFilter] = useState("all"); // Default filter is "All"
    const [loading, setLoading] = useState(false);
    const [keywords, setKewords] = useState("")

    // Load photos with filter and pagination
    const loadPhotos = async (page = 1, filter = "all") => {
        setLoading(true);
        try {
            const response = await axios.get("/api/v1/photos", {
                params: {
                    page: page,
                    filter: filter,
                },
            });
            console.log(response.data)

            setPaginate({
                current_page: response.data.unit_photos.pagination.current_page,
                last_page: response.data.unit_photos.pagination.last_page,
            });

            setPhotos(response.data.unit_photos.data);
        } catch (error) {
            console.error("Error fetching photos:", error);
        } finally {
            setLoading(false);
        }
    };

    // Handle filter change
    const handleFilterChange = (event) => {
        const selectedFilter = event.target.value;
        setFilter(selectedFilter);
        loadPhotos(1, selectedFilter); // Reload photos with the selected filter
    };

    // Handle pagination
    const handlePagination = (page) => {
        loadPhotos(page, filter); // Fetch photos for the selected page and current filter
    };

    // Load photos initially
    useEffect(() => {
        loadPhotos(); // Load photos with default filter and page 1
    }, [keywords]);

    return (
        <main className="w-full flex">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <Navbar title={"Galery"} />
                <div className="flex flex-col mt-5 px-5">
                    <div className="flex items-center justify-between mb-4">
                        <form className="flex gap-3">
                            <div className="flex">
                                <input
                                onChange={(e) => setKewords(e.target.value)}
                                value={keywords}
                                    className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    type="search"
                                    placeholder="Search"
                                />
                            </div>
                            <select
                                id="filter"
                                name="filter"
                                value={filter}
                                onChange={handleFilterChange}
                                className="w-40 h-10 border border-gray-300 focus:outline-none focus:border-sky-500 text-gray-700 rounded px-2"
                            >
                                <option value="all">Semua</option>
                                <option value="Interior">Interior</option>
                                <option value="Eksterior">Eksterior</option>
                                <option value="View">View</option>
                            </select>
                        </form>
                        <a href="/admin/photos/create">
                            <button className="px-4 py-2 font-medium text-white bg-teal-700 rounded-md">
                                Tambah
                            </button>
                        </a>
                    </div>

                    <div className="relative overflow-auto">
                        <table className="min-w-full">
                            <thead className="bg-teal-700 text-white">
                                <tr>
                                    <th className="px-4 py-2 text-left">NO</th>
                                    <th className="px-4 py-2 text-left">UNIT NUMBER</th> {/* Kolom baru untuk unit_number */}
                                    <th className="px-4 py-2 text-left">JUDUL</th>
                                    <th className="px-4 py-2 text-left">KATEGORI</th>
                                    <th className="px-4 py-2 text-left">TANGGAL UPLOAD</th>
                                    <th className="px-4 py-2 text-left">ACTION</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {loading ? (
                                    <tr>
                                        <td colSpan={6} className="text-center py-3">
                                            Loading...
                                        </td>
                                    </tr>
                                ) : photos.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="text-center py-3">
                                            No photos found
                                        </td>
                                    </tr>
                                ) : (
                                    photos.map((photo, index) => (
                                        <tr className="border-b py-2" key={photo.id}>
                                            <td className="px-4 py-2">
                                                {index + 1}
                                            </td>
                                            <td className="px-4 py-2">
                                                {/* Tampilkan unit_number jika ada */}
                                                {photo.unit ? photo.unit.unit_number : 'No Unit'}
                                            </td>
                                            <td className="px-4 py-2 break-words max-w-[300px] whitespace-pre-wrap">
                                                {photo.title}
                                            </td>
                                            <td className="px-4 py-2">
                                                {photo.category}
                                            </td>
                                            <td className="px-4 py-2">
                                                {new Date().toLocaleDateString()}
                                            </td>
                                            <td className="px-4 py-2">
                                                <button
                                                    className="text-blue-500"
                                                    onClick={() => handleEdit(photo.id)} // Fungsi untuk edit
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="text-red-500 ml-2"
                                                    onClick={() => handleDelete(photo.id)} // Fungsi untuk delete
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        <div className="flex justify-between items-center mt-4">
                            <button
                                onClick={() => handlePagination(paginate.current_page - 1)}
                                disabled={paginate.current_page <= 1}
                                className="px-4 py-2 bg-teal-700 text-white rounded-md"
                            >
                                Previous
                            </button>

                            <span>
                                Page {paginate.current_page} of {paginate.last_page}
                            </span>

                            <button
                                onClick={() => handlePagination(paginate.current_page + 1)}
                                disabled={paginate.current_page >= paginate.last_page}
                                className="px-4 py-2 bg-teal-700 text-white rounded-md"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
