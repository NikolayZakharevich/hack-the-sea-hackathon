<?php

namespace App\Models;

use Illuminate\Support\Facades\Redis;

class Search {

    public static function search($query) {
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

        foreach ($users_scored as $user_scored) {
            $result['users'][] = $user_scored['user'];
        }

        $cabinets = Cabinet::getAll();
        $cabinets_scores = [];
        foreach ($cabinets as $cabinet) {
            if (!array_key_exists('name', $cabinet)) {
                continue;
            }

            $cabinet = (array)$cabinet;
            $name  = self::toLower($cabinet['name']);
            $id    = self::toLower($cabinet['id']);
            $score = self::getScore($id, $words, 3) + self::getScore($name, $words, 1);
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

        foreach ($cabinets_scores as $cabinets_score) {
            $result['cabinet'][] = $cabinets_score['cabinet'];
        }

        return $result;
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
