<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Character;
use GuzzleHttp\Client;

class FetchRickAndMortyData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fetch:rick-and-morty-data';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command to consume the Rick and Morty API and save the characters';

    protected $client;

    public function __construct(Client $client)
    {
        parent::__construct();
        $this->client = $client;
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $url = 'https://rickandmortyapi.com/api/character';

        do {
            $response = $this->client->get($url);
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
        } while ($url!= null);
    }
}
