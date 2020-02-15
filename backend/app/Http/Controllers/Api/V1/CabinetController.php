<?php

namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiRequest;
use App\Models\Cabinet;

class CabinetController extends Controller {

    public function index(ApiRequest $request) {
        return response()->json([
            'response' => 'ok',
            'desc'     => '/cabinet/{id} to get cabinet description',
        ]);
    }

    public function show(ApiRequest $request, int $id) {
        $cabinet = Cabinet::get($id);
        return response()->json([
            'response' => 'ok',
            'cabinet'     => $cabinet,
        ]);
    }
}
