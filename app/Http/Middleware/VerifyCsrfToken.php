<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;
use Illuminate\Http\Request;

class VerifyCsrfToken extends Middleware
{
    /**
     * Indicate that the XSRF-TOKEN cookie should be set on the response.
     *
     * @var bool
     */
    protected $addHttpCookie = true;

    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        '/api/*', // Mengecualikan semua endpoint API dari CSRF token
        '/webhook/*', // Jika ada webhook dari layanan eksternal
        '/inertia/*', // Jika ada request dari Inertia.js yang tidak memerlukan CSRF token
    ];

    /**
     * Determine if the request has a valid CSRF token.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return bool
     */
    protected function tokensMatch($request)
    {
        // Cek apakah request datang dari API atau harus dilewati CSRF check
        if ($this->isReading($request) || $this->inExceptArray($request)) {
            return true;
        }

        // Default Laravel CSRF token validation
        return parent::tokensMatch($request);
    }
}
