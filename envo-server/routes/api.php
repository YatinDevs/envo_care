<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TestimonialController;

Route::get('/', function () {
    return view('welcome');
});

Route::middleware('api')->group(function () {
    Route::get('/testimonials', [TestimonialController::class, 'index']);
});