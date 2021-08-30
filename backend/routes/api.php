<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('register', [UserController::class,'register'])->name('user.register');
Route::POST('login',[UserController::class,'login'])->name('user.login');
Route::post('add', [ProductController::class,'addProduct'])->name('add.product');
Route::get('list', [ProductController::class,'productLis'])->name('productLis');
Route::DELETE('delete/{id}',[ProductController::class,'delete'])->name('product.delete');
Route::get('update/{id}', [ProductController::class,'updateProduct'])->name('product.Update');