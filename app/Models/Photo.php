<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    use HasFactory;

    protected $fillable = ['category_id', 'title', 'description', 'file_path'];

    public function category()
    {
        return $this->belongsTo(CategoryPhoto::class, 'category_id');
    }
}
