<?php


namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiRequest;
use App\Models\Cabinet;
use App\Models\Event;
use App\Models\Floor;
use App\Models\Graph;
use App\Models\User;
use Doctrine\DBAL\Schema\Table;
use Illuminate\Foundation\Testing\Concerns\MakesHttpRequests;
use Illuminate\Support\Facades\Redis;

class InitController extends Controller
{
    use MakesHttpRequests;
    static $nameToId = [];
    static $nameToPhoto = [];
    static $cabinetToWorkers = [];
    static $tableIdToPoints = [];
    static $cabinetIdToType = [];
    static $current_id = 0;
    static $random_photo = [
        "https://pngimg.com/uploads/face/face_PNG5669.png",
        "https://pngimg.com/uploads/face/face_PNG5660.png",
        "https://pngimg.com/uploads/face/face_PNG5664.png",
        "https://pngimg.com/uploads/face/face_PNG5669.png",
        "https://carbis.ru/img/adv-girl.png",
        "https://okna-okt.ru/wp-content/themes/okna/img/women.png",
        "https://pngimage.net/wp-content/uploads/2018/06/%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0-%D0%BE%D1%84%D0%B8%D1%81-png-8.png",
    ];
    static $random_photo_man = [
        "https://pngimg.com/uploads/face/face_PNG5669.png",
        "https://pngimg.com/uploads/face/face_PNG5660.png",
        "https://pngimg.com/uploads/face/face_PNG5664.png",
        "https://pngimg.com/uploads/face/face_PNG5669.png",
    ];
    static $random_photo_woman = [
        "https://carbis.ru/img/adv-girl.png",
        "https://okna-okt.ru/wp-content/themes/okna/img/women.png",
        "https://pngimage.net/wp-content/uploads/2018/06/%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0-%D0%BE%D1%84%D0%B8%D1%81-png-8.png",
    ];

    public function parseUserFile(String $file_name, int $level) {
        $content = file_get_contents($file_name);
        $users = explode("\n", $content);
        foreach ($users as $user) {
            $test = explode(";", $user);
            if (sizeof($test) == 3) {
                list($cabinet_id, $surname, $name) = $test;
                $floor = substr($cabinet_id, 0, 1);
                self::$nameToPhoto[$name." ".$surname] = self::getPhoto($name);
                User::create($name, $surname, $floor, $cabinet_id, $level, self::$nameToPhoto[$name." ".$surname]);
                self::$nameToId[$name." ".$surname] = self::$current_id++;
                self::$cabinetToWorkers[$cabinet_id][$level][] = $name." ".$surname;
            } elseif(sizeof($test) == 1) {
                self::$cabinetToWorkers[$test[0]][$level] = [];
            }
        }
    }

    private function getPhoto($name) {
        $last_letter = mb_substr($name, -1,1);
        if (strpos('аяуюоеиы', $last_letter) !== false) {
            return self::$random_photo_woman[mt_rand(0, sizeof(self::$random_photo_woman) - 1)];
        } else {
            return self::$random_photo_man[mt_rand(0, sizeof(self::$random_photo_man) - 1)];
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
                list($table_id, $point_x, $point_y) = $test;
                self::$tableIdToPoints[$table_id] = [
                    "point_x" => $point_x,
                    "point_y" => $point_y,
                ];
            }
        }
    }


    public function parseOtherCabinets() {
        $content = file_get_contents(__DIR__ . "/../../../../src/cabinets/other_cabs");
        $cabinets = explode("\n", $content);

        foreach ($cabinets as $cabinet) {
            $test = explode(";", $cabinet);
            if (sizeof($test) == 3) {
                list($key_cabs, $floor, $type) = $test;
                Cabinet::add($key_cabs, $floor, 1, 1, $type, []);
            }
        }
    }

    public function parseCabinets() {
        self::parseCabinetFile(__DIR__ . "/../../../../src/cabinets/106_cabinet");
        self::parseOtherCabinets();
        foreach (self::$cabinetToWorkers as $cabinet_id => $cabinets) {
            $floor = substr($cabinet_id, 0, 1);
            $level_count = sizeof($cabinets);
            foreach ($cabinets as $level => $cabinet) {
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
                        "id" => $table_id,
                        "photo_url" => self::$nameToPhoto[$name." ".$surname],
                    ];
                }
                Cabinet::add($cabinet_id, $floor, $level, $level_count, "worker_room", $tables_data);
            }
        }
    }



    public function parseEvents() {
        $content = file_get_contents(__DIR__ . "/../../../../src/events/events");
        $cabinets = explode("\n", $content);

        foreach ($cabinets as $cabinet) {
            $test = explode(";", $cabinet);
            if (sizeof($test) == 5) {
                list($user_string, $cabinet_id, $time_from, $time_to, $name) = $test;

                $user_list = explode("_", $user_string);
                $users_data = [];
                for ($i = 0; $i < sizeof($user_list); $i+=3) {
                    $users_data[] = [
                        "name" => $user_list[$i],
                        "surname" => $user_list[$i + 1],
                        "id" => $user_list[$i + 2],
                    ];
                }
                Event::add($users_data, $cabinet_id, $time_from, $time_to, $name);
            }
        }
    }

    public function parseNodes() {
        $content = file_get_contents(__DIR__ . "/../../../../src/graphs/floor_nodes");
        $cabinets = explode("\n", $content);

        $graph = new Graph();

        foreach ($cabinets as $cabinet) {
            $test = explode(";", $cabinet);
            if (sizeof($test) == 6) {
                list($cabinet_id, $point_x, $point_y, $floor, $type, $id) = $test;
                $graph->addNodes($type, (int)$floor, (int)$point_x, (int)$point_y, $cabinet_id);
            }
        }
        info(sizeof($graph->nodes));

        $content = file_get_contents(__DIR__ . "/../../../../src/graphs/nodes");
        $edges = explode("\n", $content);
        foreach ($edges as $edge) {
            $test = explode(";", $edge);
            if (sizeof($test) == 2) {
                list($from, $to) = $test;
                $graph->addEdges((int)$from, (int)$to);
            }
        }
        info($graph->nodes);
        $graph->dejskta(22, 7, true, false);


    }

    public function index(ApiRequest $request)
    {
        Redis::flushAll();
        self::parseUser();
        self::parseFloors();
        self::parseCabinets();
        self::parseEvents();
        self::parseNodes();
        Cabinet::fixCabs();
        return response()->json([
            'response' => 'ok'
        ]);
    }
}
