<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;
    protected $fillable =
    [
        'name',
        'user_id',
        'contact_id',
        'is_blocked'
    ];

    public function info()
    {
        return $this->belongsTo(User::class, 'contact_id');
    }
}
