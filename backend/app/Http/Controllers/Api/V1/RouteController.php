<?php

namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiRequest;
use App\Models\Cabinet;
use App\Models\Search;
use App\Models\User;

class RouteController extends Controller {

    public function index(ApiRequest $request) {
        $from = $request->get('from');
        $to = $request->get('to');

        $search_result = Search::searchRoute($from, $to);
        return response()->json([
            'response' => 'ok',
            'result' => $search_result,
        ]);
    }

}
