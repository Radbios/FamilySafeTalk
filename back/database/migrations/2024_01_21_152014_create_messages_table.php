<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->foreignId("chat_id")->constrained("chats")->cascadeOnDelete();
            $table->foreignId("sender_id")->constrained("users")->cascadeOnDelete();
            $table->string("type");
            $table->string("content");
            $table->boolean("is_suspected")->default(false);
            $table->boolean("is_read")->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};
