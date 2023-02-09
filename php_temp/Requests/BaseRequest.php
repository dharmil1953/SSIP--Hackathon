<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\ValidationException;

class BaseRequest extends FormRequest
{
    protected function failedValidation(Validator $validator)
    {

        // dd(validator()->errors());

        throw new HttpResponseException(response()->json([

            'success' => false,
            'message' => 'validation error',
            'error' => $validator->errors()

        ]));
    }
}
