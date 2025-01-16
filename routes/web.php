<?php

use App\Http\Controllers\BlogController;
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

Route::get('/admin/fasilitas', function () {
    return Inertia::render('Admin/Fasilitas');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});
Route::get('/admin', function () {
    return Inertia::render('Admin/Beranda');
});
Route::get('/admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
});
Route::get('/admin/blog', [BlogController::class, 'show']);
Route::delete('/admin/blog/{id}', [BlogController::class, 'destroy']);

Route::get('/barang', [BlogController::class, 'index'])->name('admin/blog');

Route::get('/galery', function () {
    return Inertia::render('Galery');
});

Route::post("/upload", [BlogController::class, 'createBlog']);


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
