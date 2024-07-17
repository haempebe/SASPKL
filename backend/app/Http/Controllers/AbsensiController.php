<?php

namespace App\Http\Controllers;

use App\Models\Absensi;
use Illuminate\Http\Request;
use App\Http\Requests\AbsensiRequest;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\AbsensiUpdateRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class AbsensiController extends Controller
{
    public function index()
    {
        $absensi = Absensi::all();
        return response()->json(['data' => $absensi], 200);
    }
    public function store(AbsensiRequest $request)
    {
        $request->validated();
        $fotoAbsensi = $request->file("foto")->store("absensiSASPKL");
        $absensi = Absensi::create([
            'siswa_id' => auth()->user()->id,
            'foto' => $fotoAbsensi,
            'keterangan' => $request->keterangan,
        ]);
        return response()->json(['message' => 'Absensi berhasil dilakukan', 'data' => $absensi], 201);
    }

    public function showbyid($id)
    {
        $absensi = Absensi::find($id);
        if (!$absensi) {
            return response()->json(['message' => 'Data absensi tidak ditemukan'], 404);
        }
        return response()->json(['data' => $absensi], 200);
    }
    public function update(AbsensiUpdateRequest $request, $id)
    {
        $validated = $request->validated();

        $absensi = Absensi::find($id);

        if (!$absensi) {
            return response()->json(['message' => 'Data absensi tidak ditemukan'], 404);
        }

        if ($request->hasFile('foto')) {
            Storage::delete($absensi->foto);

            $fotoAbsensi = $request->file('foto')->store('absensiSASPKL');
            $absensi->foto = $fotoAbsensi;
        }

        $absensi->keterangan = $validated['keterangan'];
        $absensi->save();

        return response()->json(['message' => 'Absensi berhasil diperbarui', 'data' => $absensi], 200);
    }
    public function destroy($id)
    {
        $absensi = Absensi::find($id);

        if (!$absensi) {
            return response()->json(['message' => 'Data absensi tidak ditemukan'], 404);
        }

        Storage::delete($absensi->foto);

        $absensi->delete();

        return response()->json(['message' => 'Data Absensi berhasil dihapus'], 200);
    }
}
