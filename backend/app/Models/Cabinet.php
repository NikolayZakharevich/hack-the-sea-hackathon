<?php

namespace App\Models;

use Illuminate\Support\Facades\Redis;

class Cabinet {

    private static function getKey($user_id) {
        return 'cabinet' . $user_id;
    }

    public static function add($id, $level, $level_count, $type, $tables) {
        $cabinet            = [
            'id'          => $id,
            'level'       => $level,
            'level_count' => $level_count,
            'type'        => $type,
            'tables'      => $tables,
        ];
        $cabinet_serialized = json_encode($cabinet, JSON_UNESCAPED_UNICODE);

        $result = Redis::set(self::getKey($id), $cabinet_serialized);
        return (bool)$result;
    }

    public static function get($id) {
        $cabinet_serialized = Redis::get(self::getKey($id));
        if (!$cabinet_serialized) {
            return null;
        }

        return json_decode($cabinet_serialized, true);
    }
}
