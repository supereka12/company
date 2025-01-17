<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function createBlog(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Pastikan file gambar valid
        ]);
    
            $imagePath = $request->file('image')->getRealPath();
            $urlImage = Cloudinary::upload($imagePath)->getSecurePath();  // Mendapatkan URL gambar setelah di-upload
    
            // Membuat entry blog baru dengan data yang telah di-validasi
            $blog = Blog::create([
                'title' => $validated['title'],
                'slug' => Str::slug($validated['title']),  // Membuat slug dari judul
                'image_url' => $urlImage,  // Menyimpan URL gambar yang di-upload
                'content' => $validated['content'],
                'status' => 'draft',  // Status default
                'published_at' => null,  // Menandakan blog belum dipublikasikan
            ]);

        return redirect('admin/blog')->with('success', 'Barang berhasil dihapus.');
    }

    public function show ()
    {
        $blog = Blog::all();
        return Inertia::render('Admin/Blog', ['blog' => $blog]);
    }

    public function destroy($id)
    {
        $blog = Blog::where('id', $id);
        $blog->delete();
        return redirect('admin/blog')->with('success', 'Barang berhasil dihapus.');
    }

    public function index()
    {
        // Mengambil 10 barang per halaman
        $blog = blog::paginate(10);
        
        // Menampilkan ke view dengan data barang
        return view('admin/blog', compact('blog'));
    }
}
