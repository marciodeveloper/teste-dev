<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Character;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Database\Seeders\TestCharacterSeeder;

class CharacterControllerTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        // Executa o seeder para popular o banco de dados
        $this->seed(TestCharacterSeeder::class);
    }

    /** @test */
    public function it_can_list_characters()
    {
        $response = $this->getJson('/api/characters');

        $response->assertStatus(200)
                 ->assertJsonStructure([
                     'current_page',
                     'data',
                     'first_page_url',
                     'from',
                     'last_page',
                     'last_page_url',
                     'links',
                     'next_page_url',
                     'path',
                     'per_page',
                     'prev_page_url',
                     'to',
                     'total',
                 ]);

        // Verifica se a resposta contém 20 personagens (assumindo paginação de 20)
        $this->assertCount(20, $response->json('data'));
    }

    /** @test */
    public function it_can_filter_characters_by_name()
    {
        // Cria personagens específicos para o teste
        Character::factory()->create(['name' => 'Rick Sanchez']);
        Character::factory()->create(['name' => 'Morty Smith']);

        $response = $this->getJson('/api/characters?name=Rick');

        $response->assertStatus(200);
        $this->assertCount(1, $response->json('data'));
        $this->assertEquals('Rick Sanchez', $response->json('data')[0]['name']);
    }

    // Outros testes para filtros por status, species, gender, etc.
}