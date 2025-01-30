<?php

namespace App\Http\Controllers;

use App\Models\Apartement;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ApartmentsController extends Controller
{
    public function index() {
        $apartments = Apartement::all();
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'required|image',
            'total_unit' => 'required|integer|max:20',
            'location' => 'required',
            'address' => 'required',
            'fasilities' => 'required',
            'description' => 'required',
        ]);

        $imagePath = $request->file('image')->getRealPath();

        $urlImage = Cloudinary::upload($imagePath, [
            'folder' => 'bondepart'  
        ])->getSecurePath();

        $apartment = Apartement::create([
            'name' => $validated['name'],
            'slug' => Str::slug($validated['name']),
            'image_url' => $urlImage,
            'total_unit' => $validated['total_unit'],
            'location' => $validated['location'],
            'address' => $validated['address'],
            'fasilities' => $validated['fasilities'],
            'description' => $validated['description'],
        ]);

        return redirect('admin/apartments')->with('success', 'Barang berhasil disimpan.');
    }
}
