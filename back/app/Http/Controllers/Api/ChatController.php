<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ChatCollection;
use App\Http\Resources\ChatResource;
use App\Models\Chat;
use App\Models\Participant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function index()
    {
        $data = new ChatCollection(
            Chat::whereHas('participants', function ($query) {
                $query->where('user_id', Auth::user()->id);
            })
            ->whereHas('messages')
            ->orderBy('updated_at', 'asc')
            ->get()
        );
        return response()->json($data);
    }

    public function store(Request $request)
    {
        $chat = Chat::create([
            "type" => $request->type
        ]);

        foreach ($request->participants as $value) {
            $chat->participants()->create([
                "user_id" => $value
            ]);
        }

        return new ChatResource($chat);
    }

    public function show($chat_id)
    {
        $data = new ChatResource(Chat::findOrFail($chat_id));

        return response()->json($data);
    }

    public function getChatByContact(int $contact_id)
    {
        $chatUser = Chat::whereHas("participants", function($query) use ($contact_id){
            $query->where("user_id", Auth()->user()->id);
        })
            ->whereHas("participants", function($query) use ($contact_id){
                $query->where("user_id", $contact_id);
            })
            ->first();

        if(!$chatUser)
        {
            $request = new Request([
                'type' => 'private',
                'participants' => [
                    Auth()->user()->id, $contact_id
                ]
            ]);
            $chatUser = $this->store($request);
            return $chatUser;
        }

        return new ChatResource($chatUser);
    }
}
