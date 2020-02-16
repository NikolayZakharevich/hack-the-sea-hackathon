<?php

namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiRequest;
use App\Models\Cabinet;
use App\Models\Search;

class SearchController extends Controller {

    public function index(ApiRequest $request) {
        $query = $request->get('query');

        $search_result = Search::search($query);
        return response()->json([
            'response' => 'ok',
            'result' => $search_result,
        ]);
    }

}
