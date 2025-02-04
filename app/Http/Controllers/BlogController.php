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

        // Upload gambar ke Cloudinary dengan folder 'bondepart'
        $urlImage = Cloudinary::upload($imagePath, [
            'folder' => 'bondepart'  // Menentukan folder tujuan di Cloudinary
        ])->getSecurePath();

        $blog = Blog::create([
            'title' => $validated['title'],
            'slug' => Str::slug($validated['title']),
            'image_url' => $urlImage,
            'content' => $validated['content'],
            'status' => 'draft',
            'published_at' => null,
        ]);

        return redirect('admin/articles')->with('success', 'Barang berhasil disimpan.');
    }

    public function show()
    {
        $blog = Blog::all();
        return Inertia::render('Blog', ['blog' => $blog]);
    }
    public function showAdminBlog()
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

    public function detailBlog($slug)
    {
        $blog = Blog::where('slug', $slug)->first();
        $other_blog = Blog::inRandomOrder()->limit(5)->get();
        return Inertia::render('DetailBlog', ['blog' => $blog, 'other_blog' => $other_blog]);
    }

    public function edit($id)
    {
        $blog = Blog::findOrFail($id);

        return Inertia::render('Admin/EditBlog', [
            'blog' => $blog,
        ]);
    }

    public function editBlog(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            'image' => 'nullable|image',
        ]);

        $blog = Blog::findOrFail($id);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->getRealPath();
            $urlImage = Cloudinary::upload($imagePath)->getSecurePath();
            $blog->image_url = $urlImage; // Perbarui URL gambar
        }

        $blog->update([
            'title' => $validated['title'],
            'slug' => Str::slug($validated['title']),
            'content' => $validated['content'],
        ]);

        return redirect('admin/articles')->with('success', 'Blog berhasil diperbarui.');
    }


}
