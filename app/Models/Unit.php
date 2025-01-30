<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    protected $fillable = ['apartement_id', 'unit_number', 'unit_type', 'floor', 'facilities'];

    protected $casts = [
        'facilities' => 'json',  // Atau 'json' jika ingin objek
    ];
public function apartement()
{
    return $this->belongsTo(Apartement::class, 'apartement_id');
}


    public function photos()
    {
        return $this->hasMany(Photo::class, 'unit_id');
    }
}
