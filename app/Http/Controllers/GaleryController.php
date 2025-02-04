<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class GaleryController extends Controller
{
    public function show($slug) {
        $title = str_replace('-', ' ', $slug);
        return Inertia::render('Galery', ['title' => $title]);
    }
    
    
}
