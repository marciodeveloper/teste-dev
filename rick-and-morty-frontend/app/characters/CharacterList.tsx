"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CharacterCard from "../../components/CharacterCard";
import axios from "axios";

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  external_id: number;
}

export default function CharacterList() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [filters, setFilters] = useState({
    name: searchParams.get("name") || "",
    status: searchParams.get("status") || "",
    species: searchParams.get("species") || "",
    gender: searchParams.get("gender") || "",
  });
  const [page, setPage] = useState(parseInt(searchParams.get("page") || "1"));
  const [characters, setCharacters] = useState<Character[]>([]);
  const [lastPage, setLastPage] = useState(1);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log("API URL no cliente:", apiUrl);

  // Buscar personagens quando os filtros ou a página mudarem
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const params = { ...filters, page };
        // Remover parâmetros com valores vazios
        Object.keys(params).forEach(
          (key) => params[key] === "" && delete params[key]
        );

        const response = await axios.get(`${apiUrl}/characters`, {
          params,
        });

        console.log("Resposta da API:", response.data);

        setCharacters(response.data.data);
        setLastPage(response.data.last_page);
      } catch (error) {
        console.error("Erro ao buscar personagens:", error);
      }
    };

    fetchCharacters();
  }, [filters, page]);

  // Atualizar a URL quando filtros ou página mudarem
  useEffect(() => {
    const params = new URLSearchParams({
      ...filters,
      page: page.toString(),
    });
    router.push(`/characters?${params.toString()}`);
  }, [filters, page]);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
    setPage(1);
  };

  // Definição das constantes para a paginação
  const paginationRange = 2; // Número de páginas antes e depois da atual

  const startPage = Math.max(1, page - paginationRange);
  const endPage = Math.min(lastPage, page + paginationRange);

  return (
    <div>
      {/* Filtros */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={filters.name}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        <select
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">Status</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Morto</option>
          <option value="unknown">Desconhecido</option>
        </select>
        <input
          type="text"
          name="species"
          placeholder="Espécie"
          value={filters.species}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        <select
          name="gender"
          value={filters.gender}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">Gênero</option>
          <option value="Female">Feminino</option>
          <option value="Male">Masculino</option>
          <option value="Genderless">Sem Gênero</option>
          <option value="unknown">Desconhecido</option>
        </select>
      </div>

      {/* Lista de Personagens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      {/* Paginação */}
      <div className="flex flex-wrap justify-center mt-8">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Anterior
        </button>

        {startPage > 1 && (
          <>
            <button
              onClick={() => setPage(1)}
              className={`px-4 py-2 mx-1 my-1 rounded ${
                page === 1 ? "bg-primary text-white" : "bg-gray-200"
              }`}
            >
              1
            </button>
            {startPage > 2 && <span className="px-2 py-2 mx-1 my-1">...</span>}
          </>
        )}

        {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
          const pageNumber = startPage + index;
          return (
            <button
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              className={`px-4 py-2 mx-1 my-1 rounded ${
                page === pageNumber ? "bg-primary text-white" : "bg-gray-200"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        {endPage < lastPage && (
          <>
            {endPage < lastPage - 1 && (
              <span className="px-2 py-2 mx-1 my-1">...</span>
            )}
            <button
              onClick={() => setPage(lastPage)}
              className={`px-4 py-2 mx-1 my-1 rounded ${
                page === lastPage ? "bg-primary text-white" : "bg-gray-200"
              }`}
            >
              {lastPage}
            </button>
          </>
        )}

        <button disabled={page >= lastPage} onClick={() => setPage(page + 1)}>
          Próximo
        </button>
      </div>
    </div>
  );
}
