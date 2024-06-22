<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;

Route::post('/login', [AuthenticationController::class, 'login']);
Route::get('/logout', [AuthenticationController::class, 'logout'])->middleware(['auth:sanctum']);

Route::get('/posts', function () {
    dd('post update');
})->middleware(['auth:sanctum']);

