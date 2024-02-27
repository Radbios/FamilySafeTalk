<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserParentRelationshipResource;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return UserParentRelationshipResource::collection(Auth()->user()->dependents);
    }
}
