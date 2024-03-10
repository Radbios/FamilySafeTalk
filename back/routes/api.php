<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ChatController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\Guardian\DependentController;
use App\Http\Controllers\Api\MessageController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('/login', [AuthController::class, "login"]);
Route::post('/register', [AuthController::class, "register"]);

Route::middleware('auth:sanctum')->group(function(){
    Route::post('/logout', [AuthController::class, "logout"]);
    Route::apiResource("/contact", ContactController::class);
    Route::apiResource("/message", MessageController::class)->only("store");
    Route::apiResource("/chat", ChatController::class)->only("index", "show", "store");
    Route::get("/chat/{chat_id}/lastMessage", [MessageController::class, "lastMessage"]);
    Route::get("/chat/{user_id}/contact", [ChatController::class, "getChatByContact"]);

    Route::apiResource("/guardian/dependent", DependentController::class);
    Route::get("/guardian/dependent/{dependent_id}/blockedContacts", [DependentController::class, "blockedContacts"]);
});
