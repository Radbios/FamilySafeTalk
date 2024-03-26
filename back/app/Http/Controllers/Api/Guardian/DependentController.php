<?php

namespace App\Http\Controllers\Api\Guardian;

use App\Http\Controllers\Controller;
use App\Http\Resources\ContactPermissionRequest;
use App\Http\Resources\ContactResource;
use App\Http\Resources\PreferenceResource;
use App\Http\Resources\UserParentRelationshipResource;
use App\Http\Resources\UserResource;
use App\Models\Contact;
use App\Models\ContactPermission;
use App\Models\Preference;
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

        $user->preferences()->create();

        $relationship = UserParentRelationship::create([
            'guardian_id' => Auth()->user()->id,
            'child_id' => $user->id
        ]);

        Contact::create([
            "user_id" => Auth::user()->id,
            "contact_id" => $user->id,
            "name" => $user->name . " (Protegido)",
            "is_blocked" => false
        ]);

        Contact::create([
            "user_id" => $user->id,
            "contact_id" => Auth::user()->id,
            "name" => Auth()->user()->name . " (Responsável)",
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

    public function getPreference(string $child_id)
    {
        $dependent = Auth()->user()->dependents()->where('child_id', $child_id)->first()->info_dependent;
        $preference = $dependent->preferences;
        if($preference)
        {
            return new PreferenceResource($preference);
        }

        $preference = $dependent->preferences()->create();
        return new PreferenceResource($preference);
    }

    public function setPreference(Request $request, string $child_id)
    {
        $dependent = User::findOrFail($child_id);
        $preference = $dependent->preferences;
        if($preference)
        {
            $preference->update($request->all());

            return new PreferenceResource($preference);
        }

        $preference = $dependent->preferences()->create();
        return new PreferenceResource($preference);
    }

    public function getContactPermissions(string $child_id)
    {
        $dependent = Auth()->user()->dependents()->where('child_id', $child_id)->first()->info_dependent;
        $contacts = $dependent->contact_permissions;
        return ContactPermissionRequest::collection($contacts);
    }

    public function AcceptContact(Request $request, string $child_id, string $invite_id)
    {
        $dependent = Auth()->user()->dependents()->where('child_id', $child_id)->first()->info_dependent;
        $invite = $dependent->contact_permissions()->findOrFail($invite_id);
        if($request->status)
        {
            $new_contact = $dependent->contacts()->create([
                "name" => $invite->name,
                "contact_id" => $invite->contact_id
            ]);
        }

        $invite->delete();

        return new ContactPermissionRequest($invite);
    }
}
