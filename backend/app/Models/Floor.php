<?php

namespace App\Models;

use Illuminate\Support\Facades\Redis;

class Floor {

    private static function getKey($floor_id) {
        return 'floor' . $floor_id;
    }

    private static function getSetKey() {
        return 'floors';
    }

    public static function add($id, $cabinets) {
        $floor            = [
            'id'        => $id,
            'cabinets'  => $cabinets,
        ];
        $floor_serialized = json_encode($floor, JSON_UNESCAPED_UNICODE);

        $result = (bool)Redis::set(self::getKey($id), $floor_serialized);
        if ($result) {
            Redis::sadd(self::getSetKey(), $id);
        }

        return $result;
    }

    public static function get($id, $filters) {
        $floor_serialized = Redis::get(self::getKey($id));
        if (!$floor_serialized) {
            return null;
        }

        $floor = json_decode($floor_serialized, true);
        foreach ($floor['cabinets'] as $key => $cabinet) {
            $cabinet_id = $cabinet['id'];
            $cabinet = Cabinet::get($cabinet_id);
            if (!in_array($cabinet['type'], $filters)) {
                unset($floor['cabinets'][$key]);
            }
        }

        return $floor;
    }

    public static function getAll($filters) {
        $all_floor_ids = (array)Redis::smembers(self::getSetKey());
        $floors        = [];
        foreach ($all_floor_ids as $floor_id) {
            $floors[] = self::get($floor_id, $filters);
        }

        return $floors;
    }
}
