import Link from "next/link";

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  external_id: number;
}

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{character.name}</h2>
        <p className="text-gray-600">{character.species}</p>
        <Link
          legacyBehavior
          href={`/characters/${character.external_id}`}
          className="text-primary hover:underline"
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  );
};

export default CharacterCard;
