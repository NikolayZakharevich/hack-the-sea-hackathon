<?php

namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;
use Illuminate\Foundation\Http\FormRequest;

class UserController extends Controller
{

    public function index(FormRequest $request)
    {
        return response()->json([
            'response' => 'ok'
        ]);
    }
}