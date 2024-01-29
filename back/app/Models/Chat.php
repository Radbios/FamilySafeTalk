<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "type",
        "image",
    ];

    public function participants()
    {
        return $this->hasMany(Participant::class, "chat_id");
    }

    public function messages()
    {
        return $this->hasMany(Message::class, "chat_id");
    }

}
