<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    use HasFactory;

    protected $fillable = ['apartement_id', 'image_url'];

    public function apartement()
    {
        return $this->belongsTo(Apartement::class, 'apartement_id');
    }

    public function categoryPhotos()
    {
        return $this->hasMany(CategoryPhoto::class, 'photo_id');
    }
}
