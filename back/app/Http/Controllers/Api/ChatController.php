<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ChatResource;
use App\Models\Chat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function index()
    {
        $data = ChatResource::collection(
            Chat::whereHas('participants', function ($query) {
                $query->where('user_id', Auth::user()->id);
            })->get()
        );
        return response()->json($data);
    }

    public function show($chat_id)
    {
        $data = Chat::findOrFail($chat_id);

        return response()->json(new ChatResource($data));
    }
}
