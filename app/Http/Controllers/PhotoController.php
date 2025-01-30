<?php

namespace App\Http\Controllers;

use App\Models\Apartement;
use App\Models\Photo;
use App\Models\Unit;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PhotoController extends Controller
{
    public function index(Request $request)
    {
        $filter = $request->input('filter', 'all');
        $slug = $request->input('slug', '');
    
        // Jika slug tidak ditemukan, ambil semua foto tanpa filter slug
        if (!$slug) {
            // Ambil semua foto dari semua unit yang ada
            $photos = Photo::with('unit') // Pastikan untuk memuat relasi unit
                ->when($filter != 'all', function ($query) use ($filter) {
                    return $query->where('category', $filter);  // Filter berdasarkan kategori
                })
                ->paginate(10);
    
            // Format data foto dan unit yang terkait
            $formattedPhotos = $photos->map(function ($photo) {
                return [
                    'title' => $photo->title,
                    'image_url' => $photo->image_url,
                    'category' => $photo->category,
                    'unit' => [
                        'unit_number' => $photo->unit->unit_number,
                        'unit_type' => $photo->unit->unit_type,
                        'floor' => $photo->unit->floor,
                        'facilities' => $photo->unit->facilities,
                    ]
                ];
            });
    
            // Kembalikan respons dengan data foto dan pagination
            return response()->json([
                'unit_photos' => [
                    'data' => $formattedPhotos,
                    'pagination' => [
                        'total' => $photos->total(),
                        'per_page' => $photos->perPage(),
                        'current_page' => $photos->currentPage(),
                        'last_page' => $photos->lastPage(),
                    ]
                ]
            ]);
        }
    
        // Jika slug ditemukan, ambil data berdasarkan slug
        $apartment = Apartement::where('slug', $slug)->first();
    
        if ($apartment) {
            $photosQuery = Photo::whereHas('unit', function ($query) use ($apartment) {
                $query->where('units.apartement_id', $apartment->id); // Pastikan nama kolom sesuai dengan skema database Anda
            })
            ->when($filter != 'all', function ($query) use ($filter) {
                return $query->where('category', $filter);
            })
            ->with('unit');
        
            // Gunakan paginate bawaan Laravel
            $photos = $photosQuery->paginate(10);
        
            // Format data foto dengan unit terkait
            $formattedPhotos = $photos->map(function ($photo) {
                return [
                    'title' => $photo->title,
                    'image_url' => $photo->image_url,
                    'category' => $photo->category,
                    'unit' => $photo->unit ? [
                        'unit_number' => $photo->unit->unit_number,
                        'unit_type' => $photo->unit->unit_type,
                        'floor' => $photo->unit->floor,
                        'facilities' => $photo->unit->facilities,
                    ] : null
                ];
            });
        
            return response()->json([
                'unit_photos' => [
                    'data' => $formattedPhotos,
                    'pagination' => [
                        'total' => $photos->total(),
                        'per_page' => $photos->perPage(),
                        'current_page' => $photos->currentPage(),
                        'last_page' => $photos->lastPage(),
                    ]
                ]
            ]);
        } else {
            // Jika apartment tidak ditemukan berdasarkan slug, kembalikan data kosong
            return response()->json([
                'unit_photos' => [
                    'data' => [],
                    'pagination' => [
                        'total' => 0,
                        'per_page' => 10,
                        'current_page' => 1,
                        'last_page' => 1
                    ]
                ]
            ]);
        }
    }
    
    
    public function store(Request $request)
    {
        $request->validate([
            'unit_id' => 'required',
            'image_url' => 'required|image',
            'title' => 'required|string',
            'category' => 'required|string',
        ]);

        $imagePath = $request->file('image_url')->getRealPath();

        // Upload gambar ke Cloudinary dengan folder 'bondepart'
        $urlImage = Cloudinary::upload($imagePath, [
            'folder' => 'bondepart'  // Menentukan folder tujuan di Cloudinary
        ])->getSecurePath();

        Photo::create([
            'unit_id' =>$request->unit_id,
            'image_url' => $urlImage,
            'title' => $request->title,
            'category' => $request->category,
        ]);

        return redirect()->route('/admin/galery');
    }

    // Menampilkan form edit foto
    public function edit(Photo $photo)
    {
        return Inertia::render('Photos/Edit', [
            'photo' => $photo,
        ]);
    }

    // Mengupdate foto
    public function update(Request $request, Photo $photo)
    {
        $request->validate([
            'unit_id' => 'required|exists:units,id',
            'image_url' => 'required|string',
            'title' => 'required|string',
            'category' => 'required|string',
        ]);

        $photo->update([
            'unit_id' => $request->unit_id,
            'image_url' => $request->image_url,
            'title' => $request->title,
            'category' => $request->category,
        ]);

        return redirect()->route('photos.index');
    }

    // Menghapus foto
    public function destroy(Photo $photo)
    {
        $photo->delete();
        return redirect()->route('photos.index');
    }
}
