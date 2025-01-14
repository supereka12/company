<?php

namespace App\Http\Controllers;

use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArtikelController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'image'=> 'required|image'
        ]);

        $urlImage = Cloudinary::upload($request->file('image')->getRealPath())->getSecurePath();
        
    }
}
