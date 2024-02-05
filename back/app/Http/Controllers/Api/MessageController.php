<?php

namespace App\Http\Controllers\Api;

use App\Events\MessageEvent;
use App\Http\Controllers\Controller;
use App\Http\Resources\MessageResource;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        $message = Message::create([
            "sender_id" => Auth()->user()->id,
            "chat_id" => $request->chat_id,
            "type" => $request->type,
            "is_suspected" => false,
            "content" => $request->content
        ]);

        event(new MessageEvent($request->chat_id, $request->content));

        return response()->json(new MessageResource($message));
    }
}
