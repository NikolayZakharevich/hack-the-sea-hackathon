<?php

namespace App\Models;

use Illuminate\Support\Facades\Redis;

class Event {

    private static function getKey($floor_id) {
        return 'event' . $floor_id;
    }

    private static function getSetKey() {
        return 'events';
    }

    private static function getCounterKey() {
        return 'events_counter';
    }

    private static function getCabinetEventKey($cabinet_id) {
        return 'events_cabinet' . $cabinet_id;
    }

    public static function add($invited, $cabinet_id, $time_from, $time_to, $name) {
        $event_id = Redis::incr(self::getCounterKey());

        $event            = [
            'id'         => $event_id,
            'cabinet_id' => $cabinet_id,
            'invited'    => $invited,
            'time_from'  => $time_from,
            'time_to'    => $time_to,
            'name'       => $name,
        ];
        $floor_serialized = json_encode($event, JSON_UNESCAPED_UNICODE);
        $expire           = $time_to - time();
        if ($expire <= 0) {
            return null;
        }

        $result = (bool)Redis::set(self::getKey($event_id), $floor_serialized, $expire);
        if ($result) {
            Redis::sadd(self::getSetKey(), $event_id);
            Redis::sadd(self::getCabinetEventKey($cabinet_id), $event_id);
        }

        return $result;
    }

    public static function get($id) {
        $floor_serialized = Redis::get(self::getKey($id));
        if (!$floor_serialized) {
            return null;
        }

        return json_decode($floor_serialized, true);
    }

    public static function getAll() {
        $all_events_ids = (array)Redis::smembers(self::getSetKey());

        $events = [];
        $time   = time();
        foreach ($all_events_ids as $event_id) {
            $event = self::get($event_id);
            if (!$event || $time >= $event['time_to']) {
                Redis::srem(self::getSetKey(), $event_id);
                Redis::srem(self::getCabinetEventKey($event['cabinet_id']), $event_id);
                continue;
            }

            $events[] = $event;
        }

        return $events;
    }

    public static function getAllByCabinetId($cabinet_id) {
        $all_events_ids = (array)Redis::smembers(self::getCabinetEventKey($cabinet_id));

        $events = [];
        $time   = time();
        foreach ($all_events_ids as $event_id) {
            $event = self::get($event_id);
            if (!$event || $time >= $event['time_to']) {
                Redis::srem(self::getSetKey(), $event_id);
                Redis::srem(self::getCabinetEventKey($cabinet_id), $event_id);
                continue;
            }

            $events[] = $event;
        }

        return $events;
    }
}
