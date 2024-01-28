<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class ChatResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        $lastMessage = new MessageResource($this->messages()->orderByDesc('created_at')->orderByDesc('id')->first());

        $image = $this->participants()->where("user_id", "<>", Auth()->user()->id)->first()->user->image;

        return [
            'id' => $this->id,
            'image' => $image,
            'lastMessage' => $lastMessage,
        ];
    }
}
