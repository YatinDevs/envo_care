<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/db-test', function () {
    try {
        DB::connection()->getPdo();
        return "✅ Database connected successfully!";
    } catch (\Exception $e) {
        return "❌ Database connection failed: " . $e->getMessage();
    }
});