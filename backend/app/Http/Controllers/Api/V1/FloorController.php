<?php

namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiRequest;
use App\Http\Requests\App\Action\FloorIndexRequest;
use App\Http\Requests\App\Action\FloorShowRequest;
use App\Models\Floor;
use App\Models\User;
use Illuminate\Support\Facades\Redis;

class FloorController extends Controller {

    public function index(ApiRequest $request) {
        $filters = $this->getFilters($request);
        $floors = Floor::getAll($filters);

        return response()->json([
            'response' => 'ok',
            'floors' => $floors,
        ]);
    }

    public function show(ApiRequest $request, int $id) {
        $filters = $this->getFilters($request);
        $floor = Floor::get($id, $filters);

        return response()->json([
            'response' => 'ok',
            'floor'    => $floor,
        ]);
    }

    private function getFilters(ApiRequest $request) {
        $filters = (string)$request->get('filters');
        if ($filters) {
            return array_filter(explode(',', $filters));
        } else {
            return [];
        }
    }
}
