<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContactPermissionRequest extends JsonResource
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
            'name' => $this->name,
            'contact_id' => $this->contact_id
        ];

        return $rules;
    }
}
