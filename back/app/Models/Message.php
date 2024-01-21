<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        "sender_id",
        "receiver_id",
        "type",
        "is_suspected",
        "content",
        'is_read'
    ];

    public function sender()
    {
        return $this->belongsTo(Message::class, "sender_id");
    }

    public function receiver()
    {
        return $this->belongsTo(Message::class, "receiver_id");
    }
}
