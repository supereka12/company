import Sidebar from "@/Components/Sidebar";
import Navbar from "@/Components/Navbar1";

export default function BlogAdmin({ blog }) {
    console.log(blog)
    return (
        <>
            <Sidebar />
            <Navbar />
            <div className="flex flex-col ml-[25%] mr-[5%] mt-10">
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
                    <button className="px-4 py-2 font-medium text-white bg-teal-700 rounded-md">
                        Tambah
                    </button>
                </div>

                <table className="min-w-full">
                    <thead className="bg-teal-700 text-white">
                        <tr>
                            <th className="px-4 py-2 text-center">NO</th>
                            <th className="px-4 py-2 text-left">JUDUL</th>
                            <th className="px-4 py-2 text-left">DESKRIPSI</th>
                            <th className="px-4 py-2 text-center">TANGGAL PUBLISH</th>
                            <th className="px-4 py-2 text-center">ACTION</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {blog.map((item, index) => (
                            <tr key={index} classNameName="">
                                <td className="border border-gray-300 px-4 py-2 text-center">{item.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.content}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{new Date(item.created_at).toLocaleDateString()}</td>
                                <td className="px-6 py-4 whitespace-nowrap border text-center border-gray-300">
                                    <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                                    <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}



