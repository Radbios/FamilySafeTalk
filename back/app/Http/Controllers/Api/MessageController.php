<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        $message = Message::create([
            "send_id" => Auth()->user()->id,
            "receiver_id" => $request->receiver_id,
            "type" => $request->type,
            "is_suspected" => false,
            "content" => $request->content
        ]);

        return response()->json($message);
    }
}