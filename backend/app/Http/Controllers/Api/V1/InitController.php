<?php


namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiRequest;
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
                info($cabinet_id." ".$surname." ".$name." ".$level. " ".$floor);
            }
        }
    }

    public function parseUser() {
        self::parseUserFile(__DIR__ . "/1_level;cab;surname;name.txt", 1);
        self::parseUserFile(__DIR__ . "/2_level;cab;surname;name.txt", 2);
    }

    public function index(ApiRequest $request)
    {
        self::parseUser();
    }
}

