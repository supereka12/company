import Sidebar from "@/Components/Sidebar";
import Navbar from "@/Components/Navbar1";
import { router } from "@inertiajs/react";

export default function GaleryAdminPage({ blog }) {

    const handleDelete = (id) => {
        router.delete(`/admin/blog/${id}`)
    }
    return (
        <main className="w-full flex">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <Navbar title={"Galery"} />
                <div className="flex flex-col mt-5 px-5">
                    <div className="flex items-center justify-between mb-4">
                        <form className="flex gap-3">
                            <div className="flex">
                                <input class="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="search" placeholder="Search" />
                            </div>
                            <select id="filter" name="filter"
                                className="w-40 h-10 border border-gray-300 focus:outline-none focus:border-sky-500 text-gray-700 rounded px-2"
                            >
                                <option value="All" selected>
                                    Semua
                                </option>
                                <option value="Filter1">Filter 1</option>
                                <option value="Filter2">Filter 2</option>
                            </select>
                        </form>
                        <a href="/admin">
                            <button className="px-4 py-2 font-medium text-white bg-teal-700 rounded-md">
                                Tambah
                            </button>
                        </a>
                    </div>
                    <div className="relative overflow-auto">
                        <table className="min-w-full">
                            <thead className="bg-teal-700 text-white">
                                <tr>
                                    <th className="px-4 py-2 text-center">NO</th>
                                    <th className="px-4 py-2 text-left">JUDUL</th>
                                    <th className="px-4 py-2 text-center">TANGGAL PUBLISH</th>
                                    <th className="px-4 py-2 text-center">ACTION</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}



