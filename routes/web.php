<?php

use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/blog', function () {
    return Inertia::render('Blog');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});
Route::get('/admin', function () {
    return Inertia::render('admin/Beranda');
});
Route::get('/admin/blog', function () {
    return Inertia::render('admin/Blog');
});

Route::get('/galery', function () {
    return Inertia::render('Galery');
});

Route::post("/upload", [ArtikelController::class, 'upload']);


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
