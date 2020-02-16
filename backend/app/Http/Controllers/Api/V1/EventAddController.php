<?php

namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiRequest;
use App\Models\Event;
use App\Models\User;

class EventAddController extends Controller {

    public function index(ApiRequest $request) {
        $name      = (string)$request->get('name');
        $cabinet   = (string)$request->get('cabinet');
        $time_from = (int)$request->get('time_from');
        $time_to   = (int)$request->get('time_to');

        if (!$cabinet || !$name || !$time_to || !$time_to) {
            return response()->json([
                'response' => 'bad',
            ]);
        }

        $invited_user_ids = (array)json_decode((string)$request->get('invited'));
        $invited = [];
        foreach ($invited_user_ids as $user_id) {
            $user = User::get($user_id);
            $invited[] = [
                'id' => $user['id'],
                'name' => $user['name'],
                'surname' => $user['surname'],
            ];
        }
        $new_event = Event::add($invited, $cabinet, $time_from, $time_to, $name);
        if (!$new_event) {
            return response()->json([
                'response' => 'bad',
                'desc'     => 'save failed',
            ]);
        }

        // example: http://127.0.0.1:8000/api/v1/event/add?cabinet=108&time_from=1581818186&time_to=1581818586&name=new_year&invited=[1,2,3]
        return response()->json([
            'response' => 'ok',
        ]);
    }
}
