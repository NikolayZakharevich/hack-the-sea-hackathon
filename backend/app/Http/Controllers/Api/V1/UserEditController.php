<?php

namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiRequest;
use App\Models\User;

class UserEditController extends Controller {

    public function index(ApiRequest $request) {
        $user_id      = (string)$request->get('id');
        $user_name    = (string)$request->get('name');
        $user_surname = (string)$request->get('surname');

        if (!$user_id || !$user_surname || !$user_name) {
            return response()->json([
                'response' => 'bad',
            ]);
        }

        $user_floor   = (int)$request->get('floor');
        $user_cabinet = (int)$request->get('cabinet');
        $user_level   = (int)$request->get('level');
        $photo_url    = (string)$request->get('photo_url');

        $save_result = User::add($user_id, $user_name, $user_surname, $user_floor, $user_cabinet, $user_level, $photo_url);
        if (!$save_result) {
            return response()->json([
                'response' => 'bad',
                'desc'     => 'save failed',
            ]);
        }

        return response()->json([
            'response' => 'ok',
        ]);
    }
}
