<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\GaleryController;
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\ProfileController;
use App\Models\Apartement;
use App\Models\Blog;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Response;
use App\Models\Article; // Import model Article

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        // 'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

//this is API
Route::get('/unit/photos/{slug}', [PhotoController::class, 'getPhotosByApartmentAndCategory']);
Route::get('/unit/photos', [PhotoController::class, 'index']);
Route::get('/unit/photos', [PhotoController::class, 'store']);

//this is route for admin
Route::middleware(['auth'])->group(function () {
    Route::get('/manage/articles', [BlogController::class, 'showAdminBlog'])->name('admin.articles');
    Route::delete('/manage/articles/{id}', [BlogController::class, 'destroy']);
    Route::post('/manage/articels/{id}', [BlogController::class, 'editBlog'])->name('blog.update');
    Route::get('/manage/articles/{id}/edit', [BlogController::class, 'edit'])->name('admin.blog.edit');
    Route::get('/manage/articels/add', function () {
        return Inertia::render('Admin/AddBlog');
    });
    Route::get('/manage', function () {
        return Inertia::render('Admin/Beranda');
    });
    Route::get('/manage/galery', function () {
        return Inertia::render('Admin/Galery');
    });
    Route::get('/manage/photos/create', function () {
        return Inertia::render('Admin/AddPhotos');
    });
    Route::get('/manage/articles/add', function () {
        return Inertia::render('Admin/AddBlog');
    });
    Route::get('/manage/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    });
    Route::get('/manage/apartments', function() {
        return Inertia::render('Admin/Apartments');
    });
    Route::get('/manage/apartments/create', function() {
        return Inertia::render('Admin/Apartments');
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


//sitemap.xml
Route::get('/sitemap.xml', function () {
    $staticUrls = [
        url('/'),
        url('/about'),
        url('/contact'),
        url('/articles'),
    ];

    // Ambil semua artikel dari database
    $apartments = Apartement::all();
    $articles = Blog::all();

    $sitemap = '<?xml version="1.0" encoding="UTF-8"?>';
    $sitemap .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

    // Tambahkan halaman statis
    foreach ($staticUrls as $url) {
        $sitemap .= '<url>';
        $sitemap .= '<loc>' . $url . '</loc>';
        $sitemap .= '<lastmod>' . date('Y-m-d') . '</lastmod>';
        $sitemap .= '<changefreq>daily</changefreq>';
        $sitemap .= '<priority>0.8</priority>';
        $sitemap .= '</url>';
    }

    // Tambahkan halaman artikel dinamis
    foreach ($apartments as $apartment) {
        $sitemap .= '<url>';
        $sitemap .= '<loc>' . url('/galery/' . $apartment->slug) . '</loc>';
        $sitemap .= '<lastmod>' . $apartment->updated_at->format('Y-m-d') . '</lastmod>';
        $sitemap .= '<changefreq>weekly</changefreq>';
        $sitemap .= '<priority>0.7</priority>';
        $sitemap .= '</url>';
    }
    // Tambahkan halaman artikel dinamis
    foreach ($articles as $article) {
        $sitemap .= '<url>';
        $sitemap .= '<loc>' . url('/articles/' . $article->slug) . '</loc>';
        $sitemap .= '<lastmod>' . $article->updated_at->format('Y-m-d') . '</lastmod>';
        $sitemap .= '<changefreq>weekly</changefreq>';
        $sitemap .= '<priority>0.7</priority>';
        $sitemap .= '</url>';
    }

    $sitemap .= '</urlset>';

    return Response::make($sitemap, 200, ['Content-Type' => 'application/xml']);
});




//this is route for user

// Route::get('/barang', [BlogController::class, 'index'])->name('admin/blog');


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



require __DIR__ . '/auth.php';
