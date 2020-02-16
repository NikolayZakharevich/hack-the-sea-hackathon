<?php

namespace App\Models;

use Illuminate\Support\Facades\Redis;

class Search {

    public static function searchEngine($query) {
        $result = [];
        $words  = explode(' ', $query);
        if (!$words) {
            return $result;
        }
        foreach ($words as $key => $word) {
            $words[$key] = self::toLower($word);
        }

        $users = User::getAll();

        $users_scored = [];
        foreach ($users as $user) {
            $name    = self::toLower($user['name']);
            $surname = self::toLower($user['surname']);
            $score   = self::getScore($surname, $words, 3) + self::getScore($name, $words, 2);
            if (!$score) {
                continue;
            }

            $users_scored[] = [
                'score' => $score,
                'user'  => $user,
            ];
        }

        usort($users_scored, function($user1, $user2) {
            $a = $user1['score'];
            $b = $user2['score'];
            if ($a == $b) {
                return 0;
            }
            return ($a < $b) ? 1 : -1;
        });

        $result['users'] = $users_scored;

        $cabinets        = Cabinet::getAll();
        $cabinets_scores = [];
        foreach ($cabinets as $cabinet) {
            if (!array_key_exists('name', $cabinet)) {
                continue;
            }

            $cabinet    = (array)$cabinet;
            $name       = self::toLower($cabinet['name']);
            $cabinet_id = self::toLower($cabinet['id']);
            $score      = self::getScore($cabinet_id, $words, 3) + self::getScore($name, $words, 1);
            if (!$score) {
                continue;
            }

            $cabinets_scores[] = [
                'score'   => $score,
                'cabinet' => $cabinet,
            ];
        }

        usort($cabinets_scores, function($cab1, $cab2) {
            $a = $cab1['score'];
            $b = $cab2['score'];
            if ($a == $b) {
                return 0;
            }
            return ($a < $b) ? 1 : -1;
        });
        $result['cabinet'] = $cabinets_scores;

        $events       = Event::getAll();
        $event_scores = [];
        foreach ($events as $event) {
            if (!array_key_exists('name', $event)) {
                continue;
            }

            $name       = self::toLower($event['name']);
            $cabinet_id = self::toLower($event['cabinet_id']);
            $score      = self::getScore($cabinet_id, $words, 1) + self::getScore($name, $words, 3);
            if (!$score) {
                continue;
            }

            $event_scores[] = [
                'score' => $score,
                'event' => $event,
            ];
        }

        usort($event_scores, function($event1, $event2) {
            $a = $event1['score'];
            $b = $event2['score'];
            if ($a == $b) {
                return 0;
            }
            return ($a < $b) ? 1 : -1;
        });

        $result['events'] = $event_scores;

        return $result;
    }

    public static function search($query) {
        $search_result = self::searchEngine($query);

        $result = [];
        foreach ($search_result['users'] as $user_scored) {
            $result['users'][] = $user_scored['user'];
        }

        foreach ($search_result['cabinet'] as $cabinets_score) {
            $result['cabinet'][] = $cabinets_score['cabinet'];
        }

        foreach ($search_result['events'] as $event_score) {
            $result['event'][] = $event_score['event'];
        }

        return $result;
    }

    public static function searchRoute($from, $to) {
        $from_result = self::searchEngine($from);
        $to_result   = self::searchEngine($to);

        $from_cabinets = self::mergeSearchResult($from_result);
        $to_cabinets   = self::mergeSearchResult($to_result);

        foreach ($from_cabinets as $from_cabinet) {
            foreach ($to_cabinets as $to_cabinet) {
                if ($from_cabinet != $to_cabinet) {
                    return [$from_cabinet, $to_cabinet];
                }
            }
        }

        return [false, false];
    }

    public static function mergeSearchResult($search_result) {
        $result = [];
        foreach ($search_result['users'] as $user_result) {
            $cabinet_id          = $user_result['user']['cabinet'];
            $score               = $user_result['score'];
            $result[$cabinet_id] = (array_key_exists($cabinet_id, $result) ? $result[$cabinet_id] : 0) + $score;
        }

        foreach ($search_result['cabinet'] as $cabinet_result) {
            $cabinet_id          = $cabinet_result['cabinet']['id'];
            $score               = $cabinet_result['score'];
            $result[$cabinet_id] = (array_key_exists($cabinet_id, $result) ? $result[$cabinet_id] : 0) + $score;
        }

        foreach ($search_result['events'] as $event_result) {
            $cabinet_id          = $event_result['event']['cabinet_id'];
            $score               = $event_result['score'];
            $result[$cabinet_id] = (array_key_exists($cabinet_id, $result) ? $result[$cabinet_id] : 0) + $score;
        }

        arsort($result);
        return array_keys($result);
    }

    private static function toLower($str) {
        return mb_strtolower($str);
    }

    private static function getScore($needle, $words, $koef = 1) {
        if (!$needle) {
            return 0;
        }

        $score = 0;
        if (in_array($needle, $words)) {
            $score += strlen($needle) * 2;
        } else {
            $max_intersection = 0;

            foreach ($words as $word) {
                $pos = strpos($needle, $word);
                if ($pos === false) {
                    continue;
                }
                $max_intersection = max($max_intersection, strlen($word));
            }
            $score += $max_intersection;
        }

        return $score * $koef;
    }

}
