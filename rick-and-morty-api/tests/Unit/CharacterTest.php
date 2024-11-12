<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Character;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Database\Seeders\TestCharacterSeeder;

class CharacterTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        // Executa o seeder para popular o banco de dados
        $this->seed(TestCharacterSeeder::class);
    }

    /** @test */
    public function it_can_create_a_character()
    {
        $character = Character::factory()->create();

        $this->assertDatabaseHas('characters', [
            'id' => $character->id,
            'name' => $character->name,
            'external_id' => $character->external_id,
            'status' => $character->status,
            'species' => $character->species,
            'type' => $character->type,
            'gender' => $character->gender,
            'origin' => $character->origin,
        ]);
    }

    /** @test */
    public function it_requires_name_field()
    {
        $this->expectException(\Illuminate\Database\QueryException::class);

        Character::factory()->create(['name' => null]);
    }
}
