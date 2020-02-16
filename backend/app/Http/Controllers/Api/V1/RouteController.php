<?php

namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiRequest;
use App\Models\Cabinet;
use App\Models\Search;
use App\Models\Graph;
use App\Models\User;

class RouteController extends Controller {

    public function parseNodes(string $start, string $end, bool $without_eleveator, bool $without_stairs) {
        $content = file_get_contents(__DIR__ . "/../../../../src/graphs/floor_nodes");
        $cabinets = explode("\n", $content);
        $cabinetIdToIdNodes = [];

        $graph = new Graph();

        foreach ($cabinets as $cabinet) {
            $test = explode(";", $cabinet);
            if (sizeof($test) == 6) {
                list($cabinet_id, $point_x, $point_y, $floor, $type, $id) = $test;
                $graph->addNodes($type, (int)$floor, (int)$point_x, (int)$point_y, $cabinet_id);
                $cabinetIdToIdNodes[$cabinet_id] = $id;
            }
        }
        //info(sizeof($graph->nodes));

        $content = file_get_contents(__DIR__ . "/../../../../src/graphs/nodes");
        $edges = explode("\n", $content);
        foreach ($edges as $edge) {
            $test = explode(";", $edge);
            if (sizeof($test) == 2) {
                list($from, $to) = $test;
                $graph->addEdges((int)$from, (int)$to);
            }
        }
        //info($graph->nodes);

        return $graph->dejskta((int)$cabinetIdToIdNodes[$start], (int)$cabinetIdToIdNodes[$end], $without_eleveator, $without_stairs);
    }

    public function index(ApiRequest $request) {
        $from = $request->get('from');
        $to = $request->get('to');
        $without_elevator =  $request->get('without_elevator');
        $without_stairs =  $request->get('without_stairs');
        $without_elevator = (bool)$without_elevator;
        $without_stairs = (bool)$without_stairs;

        $search_result = Search::searchRoute($from, $to);

        if ($search_result[0] == false) {
            return response()->json([
                'response' => 'bad',
                'result' => $search_result,
            ]);
        } else {
            $ans = self::parseNodes($search_result[0], $search_result[1], $without_elevator, $without_stairs);
            return response()->json([
                'path' => $ans["path"],
                'distance' => $ans["distance"],
            ]);
        }
    }

}
