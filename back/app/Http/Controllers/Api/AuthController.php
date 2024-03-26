<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Http\Resources\UserResource;
use App\Jobs\SendMessageJob;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request){
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            return [
                'error' => "error"
            ];
        }

        return [
            'token' => $user->createToken("auth_token")->plainTextToken,
            'user' => new UserResource($user)
        ];
    }

    public function register(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => $request->role_id,
            'tel' => $request->tel
        ]);

        return new UserResource($user);
    }

    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return [
            "message" => "logged-out successfully"
        ];
    }
}
