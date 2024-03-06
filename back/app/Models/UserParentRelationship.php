<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserParentRelationship extends Model
{
    use HasFactory;

    protected $fillable = [
        'guardian_id',
        'child_id'
    ];

    public function info_dependent()
    {
        return $this->belongsTo(User::class, 'child_id');
    }

    public function info_guardian()
    {
        return $this->belongsTo(User::class, 'guardian_id');
    }
}
