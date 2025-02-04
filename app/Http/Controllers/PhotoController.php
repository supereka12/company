<?php

namespace App\Http\Controllers;

use App\Models\Apartement;
use App\Models\CategoryPhoto;
use App\Models\Photo;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;

class PhotoController extends Controller
{
    public function index()
    {
        $photos = Photo::with('categoryPhotos')->get();
        return response()->json($photos);
    }

    // Menambahkan foto baru
    public function compressAndUploadToCloudinary($imagePath)
    {
        // Upload gambar ke Cloudinary dengan folder 'bondepart' dan kompresi otomatis
        $uploadedFile = Cloudinary::upload($imagePath, [
            'folder' => 'bondepart', // Menentukan folder tujuan di Cloudinary
            'quality' => 'auto',     // Kompresi otomatis dengan kualitas terbaik
            'fetch_format' => 'auto' // Menggunakan format gambar terbaik (misalnya WebP)
        ]);

        return $uploadedFile->getSecurePath(); // Mengembalikan URL gambar yang sudah dikompres dan diupload
    }

    // Fungsi untuk menyimpan foto dan kategori
    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'apartment_id' => 'required|exists:apartements,id',
            'image_url' => 'required|image', // Validasi format gambar
            'categories' => 'array',
        ]);

        
        $imagePath = $request->file('image_url')->getRealPath();

        if (empty($imagePath)) {
            return response()->json(['error' => 'File path cannot be empty', 'path' => $imagePath], 400);
        }
        
        $cloudinaryResponse = $this->compressAndUploadToCloudinary($imagePath);
        

        // Menyimpan foto ke database
        $photo = Photo::create([
            'apartement_id' => $request->apartment_id,
            'image_url' => $cloudinaryResponse,
        ]);

        // Simpan kategori yang dipilih
        $categories = $request->input('categories', []);

        foreach ($categories as $categoryName) {
            // Pastikan kategori ada di database atau buat baru
            $category = CategoryPhoto::firstOrCreate([
                'name' => $categoryName,
                'photo_id' => $photo->id // Pastikan kategori terkait dengan photo_id
            ]);
        }
        // Mengembalikan response dengan data foto dan kategori
        return response()->json([
            'photo' => $photo,
            'category' => $category,
        ], 201); // Status 201 Created
    }
    // Menampilkan detail foto berdasarkan ID
    public function show($id)
    {
        $photo = Photo::with('categoryPhotos')->findOrFail($id);
        return response()->json($photo);
    }

    public function getPhotosByApartmentAndCategory(Request $request, $apartmentSlug)
    {
        // Mengambil kategori dari request (query parameter atau form data)
        $categoryName = $request->input('category', 'all');
    
        if (!$categoryName) {
            return response()->json(['message' => 'Category is required'], 400);
        }
    
        // Cari apartment berdasarkan slug
        $apartment = Apartement::where('slug', $apartmentSlug)->first();
    
        if (!$apartment) {
            return response()->json(['message' => 'Apartment not found'], 404);
        }
    
        // Ambil foto berdasarkan apartment_id dan kategori di category_photo
        $photos = Photo::where('apartement_id', $apartment->id)
            ->whereHas('categoryPhotos', function ($query) use ($categoryName) {
                $query->where('name', $categoryName); // Menyaring berdasarkan kategori
            })
            ->paginate(12); // Pagination 10 foto per halaman
    
        return response()->json($photos);
    }
    

    // Mengupdate foto
    public function update(Request $request, $id)
    {
        $photo = Photo::findOrFail($id);

        $request->validate([
            'apartment_id' => 'required|exists:apartments,id',
            'image_url' => 'required|url',
        ]);

        $photo->update($request->all());
        return response()->json($photo);
    }

    // Menghapus foto
    public function destroy($id)
    {
        $photo = Photo::findOrFail($id);
        $photo->delete();
        return response()->json(['message' => 'Photo deleted successfully']);
    }
}
