import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CharacterList from "./CharacterList";
import axios from "axios";
import userEvent from "@testing-library/user-event";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("CharacterList", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({
      data: {
        data: [
          {
            id: 1,
            name: "Rick Sanchez",
            image: "https://example.com/rick.png",
            status: "Alive",
            species: "Human",
            gender: "Male",
            external_id: 1,
          },
          // ... outros personagens
        ],
        last_page: 2,
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders character list correctly", async () => {
    render(<CharacterList />);

    expect(screen.getByPlaceholderText("Nome")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    });
  });

  it("filters characters by name", async () => {
    render(<CharacterList />);

    const nameInput = screen.getByPlaceholderText("Nome");

    userEvent.type(nameInput, "Morty");

    expect(nameInput).toHaveValue("Morty");

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          params: expect.objectContaining({ name: "Morty" }),
        })
      );
    });
  });
});
