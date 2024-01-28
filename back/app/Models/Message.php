<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        "chat_id",
        "sender_id",
        "type",
        "is_suspected",
        "content",
        'is_read'
    ];

    public function sender()
    {
        return $this->belongsTo(User::class, "sender_id");
    }
}
