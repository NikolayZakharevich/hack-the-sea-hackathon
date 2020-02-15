<?php


namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiRequest;
use App\Models\Floor;
use App\Models\User;
use Illuminate\Foundation\Testing\Concerns\MakesHttpRequests;

class InitController extends Controller
{
    use MakesHttpRequests;
    static $nameToId = [];
    static $cabinetToWorkers = [];
    static $tableIdToPoints = [];
    static $current_id = 0;

    public function parseUserFile(String $file_name, int $level) {
        $content = file_get_contents($file_name);
        $users = explode("\n", $content);
        foreach ($users as $user) {
            $test = explode(";", $user);
            if (sizeof($test) == 3) {
                list($cabinet_id, $surname, $name) = $test;
                $floor = substr($cabinet_id, 0, 1);
                User::create($name, $surname, $floor, $cabinet_id, $level);
                self::$nameToId[$name." ".$surname] = self::$current_id++;
                self::$cabinetToWorkers[$cabinet_id][$level][] =  $name." ".$surname;
            }
        }
    }

    public function parseFloorFile(String $file_name, int $floor_id) {
        $content = file_get_contents($file_name);
        $cabinets = explode("\n", $content);


        $cabinets_data = [];
        foreach ($cabinets as $cabinet) {
            $test = explode(";", $cabinet);
            if (sizeof($test) == 4) {
                list($cabinet_id, $cabinet_name, $point_x, $point_y) = $test;
               $cabinets_data[] = [
                   'id' => $cabinet_id,
                   'name' => $cabinet_name,
                   'point_x' => $point_x,
                   'point_y' => $point_y,
               ];
            }
        }
        Floor::add($floor_id, $cabinets_data);
    }

    public function parseUser() {
        self::parseUserFile(__DIR__ . "/../../../../src/users/1_level;cab;surname;name.txt", 1);
        self::parseUserFile(__DIR__ . "/../../../../src/users/2_level;cab;surname;name.txt", 2);
    }

    public function parseFloors() {
        self::parseFloorFile(__DIR__ . "/../../../../src/floors/1_floor;id;name;x;y", 1);
        self::parseFloorFile(__DIR__ . "/../../../../src/floors/3_floor;id;name;x;y", 3);
    }

    public function parseCabinetFile(String $file_name) {
        $content = file_get_contents($file_name);
        $tables = explode("\n", $content);
        foreach ($tables as $table) {
            $test = explode(";", $table);
            if (sizeof($test) == 3) {
                list($cabinet_id, $point_x, $point_y) = $test;
                $floor = substr($cabinet_id, 0, 1);
                self::$tableIdToPoints[$cabinet_id] = [
                    "point_x" => $point_x,
                    "point_y" => $point_y,
                ];
            }
        }
    }

    public function parseCabinets() {
        self::parseCabinetFile(__DIR__ . "/../../../../src/cabinets/106_cabinet");
        info(self::$tableIdToPoints);
        info(self::$nameToId);
        info(self::$cabinetToWorkers);
        foreach (self::$cabinetToWorkers as $key => $cabinets) {
            info($key);
            $floor = substr($key, 0, 1);
            $level_count = sizeof($cabinets);
            foreach ($cabinets as $key => $cabinet) {
                $level = $key;
                shuffle($cabinet);

                $tables_data = [];
                foreach($cabinet as $key => $user) {
                    $table_id = 1 + $key;
                    if ($level == 2) {
                        $table_id += 11;
                    }
                    if ($table_id >= 15) {
                        $table_id += 1;
                    }
                    list($name, $surname) = explode(" ", $user);
                    $table = self::$tableIdToPoints[$table_id];
                    $tables_data[] = [
                        "owner_id" => self::$nameToId[$user],
                        "name" => $name,
                        "surname" => $surname,
                        "point_x" => $table["point_x"],
                        "point_y" => $table["point_y"],

                    ];
                }
                info("cabinet:");
                info("floor = ".$floor);
                info("level = ".$level);
                info("level_count = ".$level_count);
                info($tables_data);


            }
            /*shuffle($cabinet[1]);
            info($cabinet);
            if (sizeof($cabinet) == 1) {
                info(" 1lvl");
            } else {
                info( "2lvl");
            }
            self::$cabinetToWorkers[$key] = $cabinet[1];*/
        }
    }

    public function index(ApiRequest $request)
    {
        self::parseUser();
        self::parseFloors();
        self::parseCabinets();
        return response()->json([
            'response' => 'ok'
        ]);
    }
}

