<?php

namespace App\Models;

use Illuminate\Support\Facades\Redis;

class Cabinet {

    private static function getKey($cabinet_id) {
        return 'cabinet' . $cabinet_id;
    }

    private static function getSetKey() {
        return 'cabinets';
    }

    public static function add($id, $floor, $level, $level_count, $type, $tables) {
        $cabinet            = [
            'id'          => $id,
            'floor'       => $floor,
            'level'       => $level,
            'level_count' => $level_count,
            'type'        => $type,
            'tables'      => $tables,
        ];
        $cabinet_serialized = json_encode($cabinet, JSON_UNESCAPED_UNICODE);

        $result = (bool)Redis::set(self::getKey($id), $cabinet_serialized);
        if ($result) {
            Redis::sadd(self::getSetKey(), $id);
        }
        return $result;
    }

    public static function get($id) {
        $cabinet_serialized = Redis::get(self::getKey($id));
        if (!$cabinet_serialized) {
            return null;
        }
        $cabinet_events = Event::getAllByCabinetId($id);
        $cabinet = json_decode($cabinet_serialized, true);

        $cabinet['events'] = $cabinet_events;
        return $cabinet;
    }

    public static function getAll() {
        $all_cabinets_ids = (array)Redis::smembers(self::getSetKey());
        $cabinets        = [];
        foreach ($all_cabinets_ids as $cabinet_id) {
            $cabinets[] = self::get($cabinet_id);
        }

        return $cabinets;
    }
}
