<?php

namespace App\Http\Controllers\Api;

use App\Events\MessageEvent;
use App\Http\Controllers\Controller;
use App\Http\Resources\MessageResource;
use App\Jobs\SendMessageJob;
use App\Models\Chat;
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

        $child = $message->chat->participants()->where("user_id", "<>", auth()->user()->id)->first()->user;
        $guardian = $child->guardian->info_guardian;

        if($guardian) SendMessageJob::dispatch($message, $guardian, $child);

        return response()->json(new MessageResource($message));
    }

    public function lastMessage(int $chat_id)
    {
        $message = Chat::findOrFail($chat_id)->messages()->latest()->first();;
        return new MessageResource($message);
    }
}
