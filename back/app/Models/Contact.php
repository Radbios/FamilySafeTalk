<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;
    use HasUuids;

    protected $primaryKey = 'uuid';
    protected $fillable =
    [
        'user_id',
        'contact_id',
        'is_blocked'
    ];

    public function info()
    {
        return $this->belongsTo(User::class, 'contact_id');
    }
}
