import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CreatePhoto() {
    const [unitId, setUnitId] = useState('');
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [progress, setProgress] = useState(0);
    const [units, setUnits] = useState([]);
    const [loadingUnits, setLoadingUnits] = useState(true);

    // Ambil data units dari API
    useEffect(() => {
        const fetchUnits = async () => {
            setLoadingUnits(true);
            try {
                const response = await axios.get('/api/v1/units');
                setUnits(response.data);
            } catch (error) {
                console.error('Error fetching units:', error);
            } finally {
                setLoadingUnits(false);
            }
        };
        fetchUnits();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setProgress(0);

        const formData = new FormData();
        formData.append('unit_id', unitId);
        formData.append('image_url', image);
        formData.append('title', title);
        formData.append('category', category);

        try {
            await axios.post('/api/v1/photos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
        } catch (error) {
            setErrors(error.response?.data?.errors || {});
        } finally {
            setLoading(false);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const renderImagePreview = () => {
        if (image) {
            return (
                <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    className="w-full h-auto object-cover rounded-md border-2 border-gray-300"
                />
            );
        }
        return <div className="text-gray-400 text-center">No image selected</div>;
    };

    return (
        <div className="container mx-auto p-5 max-w-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Add Photo</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Unit */}
                <div>
                    <label htmlFor="unit_id" className="block text-gray-700">Unit</label>
                    {loadingUnits ? (
                        <p className="text-center text-gray-500">Loading units...</p>
                    ) : (
                        <select
                            id="unit_id"
                            name="unit_id"
                            value={unitId}
                            onChange={(e) => setUnitId(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                        >
                            <option value="">Select Unit</option>
                            {units.data.map((unit) => (
                                <option key={unit.id} value={unit.id}>
                                    {unit.unit_number} ({unit.unit_type})
                                </option>
                            ))}
                        </select>
                    )}
                    {errors.unit_id && <p className="text-red-500 text-sm mt-1">{errors.unit_id}</p>}
                </div>

                {/* Image Upload */}
                <div>
                    <label htmlFor="image_url" className="block text-gray-700">Image</label>
                    <input
                        type="file"
                        name="image_url"
                        id="image_url"
                        onChange={handleImageChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                    <div className="mt-2">
                        {renderImagePreview()}
                    </div>
                    {errors.image_url && <p className="text-red-500 text-sm mt-1">{errors.image_url}</p>}
                </div>

                {/* Title */}
                <div>
                    <label htmlFor="title" className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                        placeholder="Enter title"
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                </div>

                {/* Category */}
                <div>
                    <label htmlFor="category" className="block text-gray-700">Category</label>
                    <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                    >
                        <option value="">Select Category</option>
                        <option value="Interior">Interior</option>
                        <option value="Exterior">Exterior</option>
                        <option value="View">View</option>
                    </select>
                    {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                <button
                        type="submit"
                        className={`bg-teal-600 text-white px-6 py-3 rounded-md text-lg ${loading || progress > 100 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading || progress > 100}
                    >
                        {loading || progress > 100 ? 'Uploading...' : 'Save Photo'}
                    </button>
                </div>
            </form>
        </div>
    );
}
