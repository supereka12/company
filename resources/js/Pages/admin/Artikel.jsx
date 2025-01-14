import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Sidebar from "@/Components/Sidebar";
import Navbar1 from '@/Components/Navbar1';

export default function ArtikelAdmin({artikel}) {
    console.log(artikel)
    return (
        <>
            <Sidebar />
            <Navbar1 />
            <div className='ml-[20%] mt-16 w-[70%] flex items-center justify-center'>
                <div>
                
                    <button class="px-4 ml-[100%] py-2 font-medium text-white bg-teal-700 rounded-md focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out">Tambah</button>
                </div>
                <table class="min-w-full divide-y divide-gray-200">
                    <thead className="bg-teal-700 ">
                        <tr>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">NO</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">JUDUL</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">DESKRIPSI</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">TANGGAL PUBLISH</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-500">
                        {artikel.map((item, index) => (
                            <tr key={index} classNameName="text-center">
                                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.judul}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.isi}</td>
                                <td className="border border-gray-300 px-4 py-2">{new Date(item.created_at).toLocaleDateString()}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
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
