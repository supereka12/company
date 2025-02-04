<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoryPhoto extends Model
{
    protected $fillable = ['photo_id', 'name'];

    public function photo()
    {
        return $this->belongsTo(Photo::class, 'photo_id');
    }
}
