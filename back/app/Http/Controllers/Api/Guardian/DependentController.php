<?php

namespace App\Http\Controllers\Api\Guardian;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserParentRelationshipResource;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Models\UserParentRelationship;
use Illuminate\Http\Request;
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
            'tel' => $request->tel
        ]);

        $relationship = UserParentRelationship::create([
            'guardian_id' => Auth()->user()->id,
            'child_id' => $user->id
        ]);

        return new UserResource($user);
    }

}
