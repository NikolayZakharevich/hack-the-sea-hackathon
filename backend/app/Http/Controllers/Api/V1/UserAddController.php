<?php

namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiRequest;
use App\Models\User;
use Illuminate\Support\Facades\Redis;

class UserAddController extends Controller {

    public function index(ApiRequest $request) {
        $user_id      = (int)$request->get('id');
        $user_name    = (string)$request->get('name');
        $user_surname = (string)$request->get('surname');

        if (!$user_id || !$user_surname || !$user_name) {
            return response()->json([
                'response' => 'bad',
            ]);
        }

        $user_cabinet = (int)$request->get('cabinet');
        $user_level   = (int)$request->get('level');

        $save_result = User::add($user_id, $user_name, $user_surname, $user_cabinet, $user_level);
        if (!$save_result) {
            return response()->json([
                'response' => 'bad',
                'desc' => 'save result',
            ]);
        }

        return response()->json([
            'response' => 'ok',
        ]);
    }
}
