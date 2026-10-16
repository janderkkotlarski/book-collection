<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;

abstract class Controller
{
    // protected function failedDeletion(): void {
    //     throw new HttpResponseException(new JsonResponse([
    //         'errors' => 'Cannot delete',
    //         'message' => 'De ingevoerde gegevens zijn niet juist',
    //     ], 422));
    // }
}
