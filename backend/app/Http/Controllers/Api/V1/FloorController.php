<?php

namespace App\Http\Controllers\Api\V1;


use App\Floor;
use App\Http\Controllers\Controller;
use App\Http\Requests\App\Action\FloorIndexRequest;
use App\Http\Requests\App\Action\FloorShowRequest;
use Redis;

class FloorController extends Controller
{

    public function index(FloorIndexRequest $request)
    {
        $floors = Floor::all();
        return response()->json([
            'response' => $floors
        ]);
    }

    public function show(FloorShowRequest $request, int $id)
    {
        $level = $request->get('level'); // или $request->level
        $floor = Redis::get('floor:'.$id);

        return response()->json([
            'response' => $floor
        ]);
    }
}