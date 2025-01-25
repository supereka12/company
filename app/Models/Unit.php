<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    protected $fillable = ['apartement_id', 'unit_number', 'unit_type', 'floor', 'facilities'];
    public function apartement()
    {
        return $this->belongsTo(Apartement::class);
    }

    public function photo()
    {
        return $this->hasMany(Photo::class);
    }
}
