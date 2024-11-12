import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">
        Bem-vindo ao Rick and Morty App
      </h1>
      <Link href="/characters" className="text-primary text-xl hover:underline">
        Ver Personagens
      </Link>
    </div>
  );
}
