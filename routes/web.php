<?php

use App\Http\Controllers\PagesController;
use Illuminate\Support\Facades\Route;

Route::get('/home-page', [PagesController::class, 'index'])->name('home');
Route::get('/new-page', [PagesController::class, 'test'])->name('test');
