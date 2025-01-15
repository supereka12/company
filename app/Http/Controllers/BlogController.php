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
            // 'status' => 'required|in:draft,published,archived',
        ]);
        $urlImage = Cloudinary::upload($request->file('image')->getRealPath())->getSecurePath();

        $blog = Blog::create([
            'title' => $validated['title'],
            'slug' => Str::slug($validated['title']),
            'image_url' => $urlImage,
            'content' => $validated['content'],
            'status' => 'draft',
            'published_at' => null,
        ]);

        return Inertia::render("Admin/Beranda", ['url_image' => $urlImage]);
    }

    public function show ()
    {
        $blog = Blog::all();
        return Inertia::render('Admin/Blog', ['blog' => $blog]);
    }

    
}
