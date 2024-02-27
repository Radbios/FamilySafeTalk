<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ChatCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection->map(function($item){
                $lastMessage = new MessageResource($item->messages()->orderByDesc('created_at')->orderByDesc('id')->first());

                $user = $item->participants()->where("user_id", "<>", Auth()->user()->id)->first()->user;

                $contact = Auth()->user()->contacts()->where('contact_id', $user->id)->first();

                $name = $item->type == "group" ? $item->name : ($contact ? $contact->name : $user->name);

                $image = $item->type == "group" ? $item->image : $user->image;
                return [
                    'id' => $item->id,
                    'image' => $image,
                    'lastMessage' => $lastMessage,
                    'name' => $name,
                ];
            }),
        ];
    }
}
