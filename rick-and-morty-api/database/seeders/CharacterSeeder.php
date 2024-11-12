<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;


class CharacterSeeder extends Seeder
{
    public function run()
    {
        $this->callArtisanCommand();
    }

    private function callArtisanCommand()
    {
        Artisan::call('fetch:rick-and-morty-data');
    }
}