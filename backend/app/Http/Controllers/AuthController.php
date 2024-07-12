<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            "name" => "required",
            "email" => "required|email|unique:users",
            "password" => "required|confirmed|min:7",
        ]);
        $user = User::create([
            "name" => $validatedData["name"],
            "email" => $validatedData["email"],
            "password" => Hash::make($validatedData["password"]),
        ]);

        $token = auth('api')->login($user);
        return $this->respondWithToken($token);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "email" => "required",
            "password" => "required",
        ], [
            "email.required" => "Email harus diisi",
            "password.required" => "Password harus diisi",
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $credentials = request(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Tidak sesuai dengan yang kami simpan'], 401);
        }

        return response()->json([
            'success' => true,
            'user' => auth()->user(),
            'token' => $token
        ], 200);
    }


    public function me()
    {
        return response()->json(auth('api')->user());
    }


    public function logout()
    {
        auth()->logout(true);

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        return $this->respondWithToken(auth('api')->refresh());
    }


    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ]);
    }
}
