<?php


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('/v1/floor', 'Api\V1\FloorController', ['only' => ['index', 'show']]);
Route::resource('/v1/user/add', 'Api\V1\UserAddController', ['only' => ['index', 'show']]);
Route::resource('/v1/user/edit', 'Api\V1\UserEditController', ['only' => ['index', 'show']]);
Route::resource('/v1/user', 'Api\V1\UserController', ['only' => ['index', 'show']]);
Route::resource('/v1/cabinet', 'Api\V1\CabinetController', ['only' => 'index']);
