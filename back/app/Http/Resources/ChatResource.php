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

        $user = $this->participants()->where("user_id", "<>", Auth()->user()->id)->first()->user;

        $contact = Auth()->user()->contacts()->where('contact_id', $user->id)->first();

        $name = $this->type == "group" ? $this->name : ($contact ? $contact->name : $user->name);

        $image = $this->type == "group" ? $this->image : $user->image;

        return [
            'id' => $this->id,
            'image' => $image,
            'lastMessage' => $lastMessage,
            'messages' => MessageResource::collection($this->messages()->orderByDesc('created_at')->orderByDesc('id')->get()),
            'name' => $name,
        ];
    }
}
