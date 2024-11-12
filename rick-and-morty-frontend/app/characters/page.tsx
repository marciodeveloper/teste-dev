import CharacterList from "./CharacterList";

export default async function CharactersPage({ searchParams }) {
  const apiUrl = process.env.API_URL;

  // Criar um objeto com apenas as próprias propriedades de string
  const paramsObject = {};
  for (const key of Object.keys(searchParams)) {
    paramsObject[key] = searchParams[key];
  }

  const params = new URLSearchParams(paramsObject).toString();

  const res = await fetch(`${apiUrl}/characters?${params}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Personagens</h1>
      <CharacterList initialData={data} searchParams={searchParams} />
    </div>
  );
}
