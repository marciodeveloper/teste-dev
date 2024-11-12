<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Character;
use GuzzleHttp\Client;

class FetchRickAndMortySeeder extends Seeder
{
    public function run()
    {
        $client = new Client();
        $url = 'https://rickandmortyapi.com/api/character';

        do {
            $response = $client->get($url);
            $data = json_decode($response->getBody(), true);

            foreach ($data['results'] as $character) {
                Character::updateOrCreate(
                    ['external_id' => $character['id']],
                    [
                        'name' => $character['name'],
                        'status' => $character['status'],
                        'species' => $character['species'],
                        'type' => $character['type'],
                        'gender' => $character['gender'],
                        'origin' => $character['origin']['name'],
                        'location' => $character['location']['name'],
                        'image' => $character['image'],
                    ]
                );
            }

            $url = $data['info']['next'];
        } while ($url != null);
    }
}