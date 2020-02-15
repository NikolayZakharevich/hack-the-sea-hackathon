<?php

namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiRequest;
use App\Models\User;
use Illuminate\Support\Facades\Redis;

class UserController extends Controller
{

    public function index(ApiRequest $request)
    {
        return response()->json([
            'response' => 'ok',
            'desc' => '/user/{id} to get user profile',
        ]);
    }

    public function show(ApiRequest $request, int $user_id)
    {
        $user = User::get($user_id);
        return response()->json([
            'response' => 'ok',
            'user' => $user,
        ]);
    }
}
