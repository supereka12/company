<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\GaleryController;
use App\Http\Controllers\PhotoController;
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

//this is API
Route::prefix('api/v1')->group(function () {
    Route::controller(PhotoController::class)->group(function () {
        Route::get('/photos', 'index');  // Mengambil data dengan slug opsional
        Route::post('/photos', 'store');  
        Route::get('/photos/{slug}', 'getPhotosByApartmentAndCategory');

    });
});
//this is route for admin
Route::middleware(['auth'])->group(function () {
    Route::get('/admin/articels', [BlogController::class, 'showAdminBlog']);
    Route::delete('/admin/articles/{id}', [BlogController::class, 'destroy']);
    Route::post('admin/articels/{id}', [BlogController::class, 'editBlog'])->name('blog.update');
    Route::get('/admin/articles/{id}/edit', [BlogController::class, 'edit'])->name('admin.blog.edit');
    Route::get('/admin/articels/add', function () {
        return Inertia::render('Admin/AddBlog');
    });
    Route::get('/admin', function () {
        return Inertia::render('Admin/Beranda');
    });
    Route::get('/admin/galery', function () {
        return Inertia::render('Admin/Galery');
    });
    Route::get('/admin/photos/create', function () {
        return Inertia::render('Admin/AddPhotos');
    });
    Route::get('/admin/articles/add', function () {
        return Inertia::render('Admin/AddBlog');
    });
    Route::get('/admin/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    });
    Route::get('/admin/apartments', function() {
        return Inertia::render('Admin/Apartments');
    });
    Route::get('/admin/apartments/create', function() {
        return Inertia::render('Admin/Apartments');
    });
});


//this is route for user
// Route::get('/barang', [BlogController::class, 'index'])->name('admin/blog');
Route::get('/galery', function () {
    return Inertia::render('Galery');
});
Route::get('/articles', [BlogController::class, 'show']);
Route::get('/articles/{slug}', [BlogController::class, 'detailBlog']);
Route::post("/upload", [BlogController::class, 'createBlog']);
Route::get('/barang', [BlogController::class, 'index'])->name('Admin/Blog');
Route::get('/about', function () {
    return Inertia::render('About');
});
Route::get('/articels', [BlogController::class, 'show']);
Route::get('/articles/{slug}', [BlogController::class, 'detailBlog']);
Route::get('/galery/{slug}', [GaleryController::class, 'show']);
Route::get('/contact', function () {
    return Inertia::render('Contact');
});


















Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');

})->middleware(['auth', 'verified'])->name('dashboard');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
