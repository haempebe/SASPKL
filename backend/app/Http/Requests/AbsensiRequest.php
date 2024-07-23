<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AbsensiRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "foto" => "required|image|mimes:jpg,png,jpeg|max:10240",
            "keterangan" => "required",
        ];
    }

    public function messages(): array
    {
        return [
            "foto.required" => "Foto peserta PKL harus ada",
            "keterangan.required" => "Password harus diisi",
        ];
    }
}
