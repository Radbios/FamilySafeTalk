<?php

namespace Database\Seeders;

use App\Models\Chat;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $chat = Chat::create([
            "type" => "private"
        ]);

        $chat->participants()->create([
            "user_id" => 1,
        ]);

        $chat->participants()->create([
            "user_id" => 2,
        ]);

        $chat->participants()->create([
            "user_id" => 3,
        ]);

        $chat->messages()->create([
            'sender_id' => 1,
            'type' => 'text',
            'content' => 'olá, moço',
        ]);

        $chat->messages()->create([
            'sender_id' => 2,
            'type' => 'text',
            'content' => 'olares',
        ]);

        $chat->messages()->create([
            'sender_id' => 3,
            'type' => 'text',
            'content' => 'Dale, pessoas',
        ]);
    }
}
