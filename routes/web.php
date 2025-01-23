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

Route::get('/admin/galery', function () {
    return Inertia::render('Admin/Galery');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/galery', function () {
    return Inertia::render('Galery');
});

Route::get('/admin/blog', [BlogController::class, 'showAdminBlog']);
Route::delete('/admin/blog/{id}', [BlogController::class, 'destroy']);
Route::post('admin/blog/{id}', [BlogController::class, 'editBlog'])->name('blog.update');
Route::get('/admin/blog/{id}/edit', [BlogController::class, 'edit'])->name('admin.blog.edit');
Route::get('/admin/blog/add', function () {
    return Inertia::render('Admin/AddBlog');
});

Route::get('/blogs', [BlogController::class, 'show']);
Route::get('/blog/{slug}', [BlogController::class, 'detailBlog']);
Route::post("/upload", [BlogController::class, 'createBlog']);
Route::get('/barang', [BlogController::class, 'index'])->name('Admin/Blog');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');

})->middleware(['auth', 'verified'])->name('dashboard');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
