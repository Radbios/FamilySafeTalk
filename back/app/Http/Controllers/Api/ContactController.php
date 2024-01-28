<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ContactResource;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = ContactResource::collection(
            Contact::where("user_id", Auth::user()->id)->get()
        );
        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = Contact::create([
            "user_id" => Auth::user()->id,
            "contact_id" => $request->contact_id,
            "name" => $request->name,
            "is_blocked" => false
        ]);

        return new ContactResource($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Contact::findOrFail($id);
        return new ContactResource($data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = Contact::findOrFail($id);
        $data->update([
            "is_blocked" => $request->is_blocked,
            "name" => $request->name
        ]);

        return new ContactResource($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = Contact::findOrFail($id);
        $data->delete();
        return new ContactResource($data);
    }
}
