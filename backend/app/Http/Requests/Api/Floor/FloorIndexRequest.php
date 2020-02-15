<?php

namespace App\Http\Requests\App\Action;


use App\Http\Requests\Api\ApiRequest;

/**
 * Class FloorIndexRequest
 * @package App\Http\Requests\App\Action
 *
 * @property int $level
 */
class FloorIndexRequest extends ApiRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'level' => 'sometimes|integer|between:1,255',
        ];
    }
}





