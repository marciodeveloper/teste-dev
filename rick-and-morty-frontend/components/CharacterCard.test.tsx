import React from "react";
import { render } from "@testing-library/react";
import CharacterCard from "./CharacterCard";

const character = {
  id: 1,
  name: "Rick Sanchez",
  image: "https://example.com/rick.png",
  status: "Alive",
  species: "Human",
  gender: "Male",
  external_id: 1,
};

describe("CharacterCard", () => {
  it("renders character information correctly", () => {
    const { getByText, getByAltText } = render(
      <CharacterCard character={character} />
    );

    expect(getByText("Rick Sanchez")).toBeInTheDocument();
    expect(getByText("Status: Alive")).toBeInTheDocument();
    expect(getByText("Espécie: Human")).toBeInTheDocument();
    expect(getByAltText("Rick Sanchez")).toBeInTheDocument();
  });
});
