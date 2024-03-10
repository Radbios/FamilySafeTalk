<?php

namespace App\Http\Controllers\Api\Guardian;

use App\Http\Controllers\Controller;
use App\Http\Resources\ContactResource;
use App\Http\Resources\UserParentRelationshipResource;
use App\Http\Resources\UserResource;
use App\Models\Contact;
use App\Models\User;
use App\Models\UserParentRelationship;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class DependentController extends Controller
{
    public function index()
    {
        return UserParentRelationshipResource::collection(Auth()->user()->dependents);
    }

    public function store(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => 2,
            // 'tel' => $request->tel
        ]);

        $relationship = UserParentRelationship::create([
            'guardian_id' => Auth()->user()->id,
            'child_id' => $user->id
        ]);

        Contact::create([
            "user_id" => Auth::user()->id,
            "contact_id" => $user->id,
            "name" => $request->name . " (Protegido)",
            "is_blocked" => false
        ]);

        Contact::create([
            "contact_id" => Auth::user()->id,
            "user_id" => $user->id,
            "name" => $request->name . " (Responsável)",
            "is_blocked" => false
        ]);

        return new UserResource($user);
    }

    public function blockedContacts(string $child_id)
    {
        $dependent = Auth()->user()->dependents()->where('child_id', $child_id)->first();

        if($dependent)
        {
            return ContactResource::collection($dependent->info_dependent->contacts()->where("is_blocked", true)->get());
        }

        return null;
    }

}
