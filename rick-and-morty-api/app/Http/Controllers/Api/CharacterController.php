<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Character;

class CharacterController extends Controller
{
    public function index(Request $request)
    {
        $query = Character::query();

        if ($request->has('name')) {
            $query->where('name', 'like', '%'. $request->input('name'). '%');
        }

        if ($request->has('status')) {
            $query->where('status', $request->input('status'));
        }

        if ($request->has('species')) {
            $query->where('species', $request->input('species'));
        }

        if ($request->has('gender')) {
            $query->where('gender', $request->input('gender'));
        }

        $characters = $query->paginate(20);

        return response()->json($characters);
    }

    public function show($id)
    {
        $character = Character::where('external_id', $id)->firstOrFail();

        return response()->json($character);
    }
}
