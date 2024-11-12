<?php

namespace Database\Factories;

use App\Models\Character;
use Illuminate\Database\Eloquent\Factories\Factory;

class CharacterFactory extends Factory
{
    protected $model = Character::class;

    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'status' => $this->faker->randomElement(['Alive', 'Dead', 'unknown']),
            'species' => $this->faker->word,
            'gender' => $this->faker->randomElement(['Female', 'Male', 'Genderless', 'unknown']),
            'image' => $this->faker->imageUrl(),
            'origin' => $this->faker->city,
            'location' => $this->faker->city,
            'external_id' => $this->faker->unique()->numberBetween(1, 1000),
        ];
    }
}
