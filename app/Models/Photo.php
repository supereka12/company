<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    use HasFactory;

    protected $fillable = ['unit_id', 'image_url', 'category', 'title'];

    public function unit()
    {
        return $this->belongsTo(Unit::class, 'unit_id');
    }
}
