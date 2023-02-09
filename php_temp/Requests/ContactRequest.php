<?php

namespace App\Http\Requests;

use App\Constants\IMSConstants;
use App\Rules\SearchingQueryValidation;
use App\Rules\SortingQueryValidation;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ContactRequest extends BaseRequest
{
    /**
     * Determine if the user is authorized to make this request.
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'email' => 'required|email',
            'description' => 'required|string'
        ];
    }
}           
