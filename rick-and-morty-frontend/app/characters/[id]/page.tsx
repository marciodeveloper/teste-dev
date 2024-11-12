import axios from "axios";
import Image from "next/image";
import { notFound } from "next/navigation";
import BackButton from "./BackButton";

interface CharacterDetailsProps {
  params: {
    id: string;
  };
}

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  origin: string;
  location: string;
}

export default async function CharacterDetailsPage({
  params,
}: CharacterDetailsProps) {
  const character = await getCharacter(params.id);

  if (!character) {
    notFound();
  }

  return (
    <div>
      <BackButton />
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-64 h-64 relative mb-4 md:mb-0 md:mr-8">
          <Image
            src={character.image}
            alt={character.name}
            width={500}
            height={500}
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">{character.name}</h1>
          <p className="text-xl">
            <strong>Status:</strong> {character.status}
          </p>
          <p className="text-xl">
            <strong>Espécie:</strong> {character.species}
          </p>
          <p className="text-xl">
            <strong>Gênero:</strong> {character.gender}
          </p>
          <p className="text-xl">
            <strong>Origem:</strong> {character.origin}
          </p>
          <p className="text-xl">
            <strong>Localização:</strong> {character.location}
          </p>
        </div>
      </div>
    </div>
  );
}

async function getCharacter(id: string): Promise<Character | null> {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/characters/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar personagem:", error);
    return null;
  }
}
