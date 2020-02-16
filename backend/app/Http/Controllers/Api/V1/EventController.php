<?php

namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiRequest;
use App\Models\Cabinet;
use App\Models\Event;
use App\Models\Search;

class EventController extends Controller {

    public function index(ApiRequest $request) {
        $event = Event::add([], '105', time() + 3600, time() + 7200, 'party');

        return response()->json([
            'response' => 'ok',
            'result' => Event::getAll(),
        ]);
    }

}
