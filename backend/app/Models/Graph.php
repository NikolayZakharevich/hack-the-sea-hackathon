<?php


namespace App\Models;


class Graph
{
    public $nodes = [];

    function __construct() {
    }

    public function addNodes(string $type, int $floor, int $point_x, int $point_y, string $cabinet_id) {
        $this->nodes[] = [
            "type" => $type,
            "floor" => $floor,
            "point_x" => $point_x,
            "point_y" => $point_y,
            "cabinet_id" => $cabinet_id,
            "edges" => [],
        ];
    }

    private static function calcWeight($node_from, $node_to) {
        if ($node_from["floor"] != $node_to["floor"]) {
            return 1;
        }
        return hypot($node_from["point_x"] - $node_to["point_x"],
                     $node_from["point_y"] - $node_to["point_y"]);
    }

    public function addEdges(int $from, int $to) {
        $weight = $this->calcWeight($this->nodes[$from], $this->nodes[$to]);
        $this->nodes[$from]["edges"][] = [
            "weight" => $weight,
            "to" => $to,
        ];

        $this->nodes[$to]["edges"][] = [
            "weight" => $weight,
            "to" => $from,
        ];
    }

    public function dejskta(int $from, int $end, bool $without_eleveator, bool $without_stairs) {
        $s = $from;
        $inf = pow(10, 9);
        $distanse = [];
        $parent = [];
        $used = [];
        for ($i = 0; $i < sizeof($this->nodes); $i++) {
            $distanse[] = $inf;
            $parent[] = $s;
            $used[] = false;
        }
        $distanse[$s] = 0;
        for ($i = 0; $i < sizeof($this->nodes); $i++) {
            $v = -1;
            for ($j = 0; $j < sizeof($this->nodes); $j++) {
                if (!$used[$j] && ($v == -1 || $distanse[$j] < $distanse[$v])) {
                    $v = $j;
                }
            }

            //("current_vertex ".$i);
            if ($distanse[$v] == $inf) {
                break;
            }
            $used[$v] = true;
            for ($j = 0; $j < sizeof($this->nodes[$v]["edges"]); $j++) {
                //info($this->nodes[$v]["edges"][$j]);
                $to = $this->nodes[$v]["edges"][$j]["to"];
                $len = $this->nodes[$v]["edges"][$j]["weight"];
                if ($len + $distanse[$v] < $distanse[$to]) {

                    $flag = true;
                    $flag = !($without_eleveator && $this->nodes[$v]["type"] == "elevator");
                    $flag = $flag && !($without_stairs && $this->nodes[$v]["type"] == "stairs");
                    if ($flag) {
                        $distanse[$to] = $len + $distanse[$v];
                        $parent[$to] = $v;
                    }
                }
            }
        }

        $path = [];
        $copy_end = $end;
        for ($v = $end; $v != $from; $v = $parent[$v]) {
            $path[] = $v;
        }
        $path[] = $s;
        $reversed = array_reverse($path);
        foreach ($reversed as $key => $id) {
            $reversed[$key] = [
                "point_x" => $this->nodes[$id]["point_x"],
                "point_y" => $this->nodes[$id]["point_y"],
                "id" => $id,
                "floor" => $this->nodes[$id]["floor"],
            ];
        }

        return [
            "path" => $reversed,
            "distance" => $distanse[$copy_end],
            ];
    }
}
