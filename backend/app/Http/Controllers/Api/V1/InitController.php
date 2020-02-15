<?php


namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiRequest;
use App\Models\User;
use Illuminate\Foundation\Testing\Concerns\MakesHttpRequests;

class InitController extends Controller
{
    use MakesHttpRequests;

    public function parseUserFile(String $file_name, int $level) {
        $content = file_get_contents($file_name);
        $users = explode("\n", $content);
        foreach ($users as $user) {
            $test = explode(";", $user);
            if (sizeof($test) == 3) {
                list($cabinet_id, $surname, $name) = $test;
                $floor = substr($cabinet_id, 0, 1);
                User::create($name, $surname, $floor, $cabinet_id, $level);
            }
        }
    }

    public function parseFloorFile(String $file_name) {
        $content = file_get_contents($file_name);
        $cabinets = explode("\n", $content);
        foreach ($cabinets as $cabinet) {
            $test = explode(";", $cabinet);
            if (sizeof($test) == 4) {
                list($cabinet_id, $cabinet_name, $point_x, $point_y) = $test;
                info($test);
            }
        }
    }

    public function parseUser() {
        self::parseUserFile(__DIR__ . "/../../../../src/users/1_level;cab;surname;name.txt", 1);
        self::parseUserFile(__DIR__ . "/../../../../src/users/2_level;cab;surname;name.txt", 2);
    }

    public function parseFloors() {
        self::parseFloorFile(__DIR__ . "/../../../../src/floors/1_floor;id;name;x;y");
        self::parseFloorFile(__DIR__ . "/../../../../src/floors/3_floor;id;name;x;y");
    }

    public function index(ApiRequest $request)
    {
        self::parseUser();
        self::parseFloors();
    }
}

