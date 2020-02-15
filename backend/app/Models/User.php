<?php

namespace App\Models;

use Illuminate\Support\Facades\Redis;

class User {

    private static function getKey($user_id) {
        return 'user' . $user_id;
    }

    private static function getCounterKey() {
        return 'users_counter';
    }

    public static function add($id, $name, $surname, $floor, $cabinet, $level) {
        $user            = [
            'id'      => $id,
            'name'    => $name,
            'surname' => $surname,
            'floor'   => $floor,
            'cabinet' => $cabinet,
            'level'   => $level,
        ];
        $user_serialized = json_encode($user, JSON_UNESCAPED_UNICODE);

        $result = Redis::set(User::getKey($id), $user_serialized);
        return (bool)$result;
    }

    public static function create($name, $surname, $floor, $cabinet, $level) {
        $user_id = Redis::incr(self::getCounterKey());
        $save_result = self::add($user_id, $name, $surname, $floor, $cabinet, $level);
        return $save_result ? $user_id : 0;
    }

    public static function get($id) {
        $user_serialized = Redis::get(self::getKey($id));
        if (!$user_serialized) {
            return null;
        }

        return json_decode($user_serialized);
    }
}
