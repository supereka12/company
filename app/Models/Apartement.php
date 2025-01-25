<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Apartement extends Model
{
    protected $fillable = ['name', 'image_url', 'total_unit', 'location', 'address', 'facilities', 'description'];

    public function unit()
    {
        return $this->hasMany(Unit::class);
    }
}
