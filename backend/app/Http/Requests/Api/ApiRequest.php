<?php

namespace App\Http\Requests\Api;


use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class ApiRequest extends FormRequest
{
    /**
     * @var Validator|null
     */
    protected $validator = null;

    /**
     * Determine if the user is authorized to make this request
     * Save launch-parameter 'victim_id' to {userId} if request is made by admin
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [];
    }

}