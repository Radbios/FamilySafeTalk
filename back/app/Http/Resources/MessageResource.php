<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class MessageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $rules = [
            'id' => $this->id,
            'content' => $this->content,
            'type' => $this->type,
            'is_read'=> $this->is_read,
            'sender' => new UserResource($this->sender),
            'date' => $this->created_at,
        ];

        if($rules['sender']->id == Auth()->user()->id){
            $rules['sender']->name = 'Eu';
        }
        else {
            $contact = Auth()->user()->contacts()->where('contact_id', $this->sender_id)->first();
            $rules['sender']->name = $contact ? $contact->name : $this->sender->name;
        }
        return $rules;
    }
}
