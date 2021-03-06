<?php

namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiRequest;
use App\Models\User;

class UserAddController extends Controller {

    public function index(ApiRequest $request) {
        $user_name    = (string)$request->get('name');
        $user_surname = (string)$request->get('surname');

        if (!$user_surname || !$user_name) {
            return response()->json([
                'response' => 'bad',
            ]);
        }

        $user_floor   = (int)$request->get('floor');
        $user_cabinet = (int)$request->get('cabinet');
        $user_level   = (int)$request->get('level');
        $photo_url    = (string)$request->get('photo_url');

        $new_user_id = User::create($user_name, $user_surname, $user_floor, $user_cabinet, $user_level, $photo_url);
        if (!$new_user_id) {
            return response()->json([
                'response' => 'bad',
                'desc'     => 'save failed',
            ]);
        }

        return response()->json([
            'response' => 'ok',
            'user_id'  => $new_user_id,
        ]);
    }
}
