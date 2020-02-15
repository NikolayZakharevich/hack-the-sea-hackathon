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
        $floors = Floor::getAll();

        return response()->json([
            'response' => 'ok',
            'floors' => $floors,
        ]);
    }

    public function show(ApiRequest $request, int $id) {
        $floor = Floor::get($id);

        return response()->json([
            'response' => 'ok',
            'floor'    => $floor,
        ]);
    }
}
