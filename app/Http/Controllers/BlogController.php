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
            'image' => 'required|image', // Pastikan file gambar valid
        ]);
    
            $imagePath = $request->file('image')->getRealPath();
            $urlImage = Cloudinary::upload($imagePath)->getSecurePath();
    
            $blog = Blog::create([
                'title' => $validated['title'],
                'slug' => Str::slug($validated['title']),
                'image_url' => $urlImage, 
                'content' => $validated['content'],
                'status' => 'draft',
                'published_at' => null,
            ]);

        return redirect('admin/blog')->with('success', 'Barang berhasil dihapus.');
    }

    public function show ()
    {
        $blog = Blog::all();
        return Inertia::render('Blog', ['blog' => $blog]);
    }
    public function showAdminBlog ()
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
    Public function detailBlog($slug) {
        $blog = Blog::where('slug',  $slug)->first();
        $other_blog = Blog::inRandomOrder()->limit(5)->get();
        return Inertia::render('DetailBlog', ['blog' => $blog, 'other_blog' => $other_blog]);
    }
}
