<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class GaleryController extends Controller
{
    public function show($slug) {
        return Inertia::render('Galery', ['title' => 'Bondepart']);
    }
}
