<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function index()
    {
        $user = User::get();
        return response()->json($user, 200);
    }
    public function indexGuru()
    {
        $user = User::get();
        return response()->json($user, 200);
    }
    public function show($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'Data user tidak ditemukan'], 404);
        }
        return response()->json($user, 200);
    }
    public function update(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'Data user tidak ditemukan'], 404);
        }

        if ($request->hasFile('foto')) {
            Storage::delete($user->profile);

            $fotoUser = $request->file('foto')->store('fotoProfile');
            $user->foto = $fotoUser;
        }
        $user->role = $request->role;
        $user->pembimbing = $request->pembimbing;
        $user->save();

        return response()->json(['message' => 'user berhasil diperbarui', 'data' => $user], 200);
    }

    public function destroy($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'Data user tidak ditemukan'], 404);
        }

        Storage::delete($user->foto);

        $user->delete();

        return response()->json(['message' => 'Data user berhasil dihapus'], 200);
    }
}
