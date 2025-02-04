import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const categoriesList = ['All', 'Exterior', 'Interior', 'View'];

const AddPhoto = () => {
  const [apartmentId, setApartmentId] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // Menyimpan URL preview gambar
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [apartments, setApartments] = useState([{name: 'Jarrdin Apartemen', id: 2}, {name: 'Gateway Pasteur', id: 3}, {name: 'Grand Asia Afrika', id: 4}])

  // Handle pemilihan kategori
  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Handle perubahan input file
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Tampilkan preview gambar
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('apartment_id', apartmentId);
    formData.append('image_url', image);

    selectedCategories.forEach((category, index) => {
      formData.append(`categories[${index}]`, category);
    });

    try {
      const response = await axios.post('/api/v1/photos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      Swal.fire({
        icon: 'success',
        title: 'Photo uploaded successfully!',
        text: 'The photo and categories were added.',
      });

      setApartmentId('');
      setImage(null);
      setImagePreview(null);
      setSelectedCategories([]);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response?.data?.message || 'Something went wrong!',
      });
      console.error(error.response?.data);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Add Photo and Categories</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="mb-4">
          <label htmlFor="apartment_id" className="block mb-2">Select Apartment:</label>
          <select
            id="apartment_id"
            name="apartment_id"
            value={apartmentId}
            onChange={(e) => setApartmentId(e.target.value)}
            required
            className="border p-2 w-full"
          >
            <option value="" disabled>Select an apartment</option>
            {apartments.map((apartment) => (
              <option key={apartment.id} value={apartment.id}>
                {apartment.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="image_url" className="block mb-2">Image:</label>
          <input
            type="file"
            id="image_url"
            name="image_url"
            onChange={handleImageChange}
            required
            className="block w-full"
          />
        </div>

        {/* Preview Gambar */}
        {imagePreview && (
          <div className="mb-4">
            <h3 className="font-medium mb-2">Image Preview:</h3>
            <img src={imagePreview} alt="Preview" className="w-96 h-auto rounded-md" />
          </div>
        )}

        <div className="mb-4">
          <h3 className="font-medium mb-2">Select Categories:</h3>
          <div className="flex gap-2">
            {categoriesList.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded ${
                  selectedCategories.includes(category) ? 'bg-[--primary-color] text-white' : 'bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <button type="submit" className="bg-[--primary-color] text-white px-4 py-2">Add Photo</button>
      </form>
    </div>
  );
};

export default AddPhoto;
