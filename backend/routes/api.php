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
Route::middleware(\App\Http\Middleware\Cors::class)->group(function () {
Route::resource('/v1/search', 'Api\V1\SearchController', ['only' => ['index', 'show']]);
Route::resource('/v1/route', 'Api\V1\RouteController', ['only' => ['index', 'show']]);
Route::resource('/v1/floor', 'Api\V1\FloorController', ['only' => ['index', 'show']]);
Route::resource('/v1/cabinet', 'Api\V1\CabinetController', ['only' => ['index', 'show']]);
Route::resource('/v1/user/add', 'Api\V1\UserAddController', ['only' => ['index', 'show']]);
Route::resource('/v1/user/edit', 'Api\V1\UserEditController', ['only' => ['index', 'show']]);
Route::resource('/v1/user', 'Api\V1\UserController', ['only' => ['index', 'show']]);
Route::resource('/v1/event/add', 'Api\V1\EventAddController', ['only' => ['index', 'show']]);
Route::resource('/v1/event', 'Api\V1\EventController', ['only' => ['index', 'show']]);
Route::resource('/v1/cabinet', 'Api\V1\CabinetController', ['only' => 'index']);
Route::resource('/v1/init', 'Api\V1\InitController', ['only' => 'index']);
});
