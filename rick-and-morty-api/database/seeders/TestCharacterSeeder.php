<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Character;

class TestCharacterSeeder extends Seeder
{
    public function run()
    {
        Character::factory()->count(30)->create();
    }
}