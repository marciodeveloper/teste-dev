import { render, screen, waitFor } from "@testing-library/react";
import CharacterDetailsPage from "./page";
import axios from "axios";

jest.mock("axios");
jest.mock("next/navigation", () =>
  require("../../../__mocks__/next/navigation")
);

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("CharacterDetailsPage", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({
      data: {
        id: 1,
        name: "Rick Sanchez",
        image: "https://example.com/rick.png",
        status: "Alive",
        species: "Human",
        gender: "Male",
        origin: "Earth",
        location: "Earth",
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders character details correctly", async () => {
    const params = { id: "1" };

    // Como o componente é um Server Component, precisamos adaptá-lo para o teste
    const CharacterDetailsPageComponent = await CharacterDetailsPage({
      params,
    });

    render(CharacterDetailsPageComponent);

    await waitFor(() => {
      expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
      expect(screen.getByText("Status: Alive")).toBeInTheDocument();
      expect(screen.getByText("Espécie: Human")).toBeInTheDocument();
    });
  });
});
