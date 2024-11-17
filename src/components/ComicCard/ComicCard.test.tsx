import { render, screen } from "@testing-library/react";
import ComicCard from "./ComicCard";
import getYearFromDate from "../../helpers/getYearFromDate";
import "@testing-library/jest-dom";
import { ComicI } from "../../interfaces/Comics";

jest.mock("../../helpers/getYearFromDate", () => jest.fn());

describe("ComicCard", () => {
  const mockComic = {
    id: 1,
    title: "Amazing Spider-Man",
    thumbnail: {
      path: "http://example.com/image",
      extension: "jpg",
    },
    dates: [{ date: "2023-11-01T00:00:00Z" }],
  };

  beforeEach(() => {
    (getYearFromDate as jest.Mock).mockReturnValue("2023");
  });

  test("should render the image, title, and date correctly", () => {
    render(<ComicCard comic={mockComic as ComicI} />);

    const img = screen.getByRole("img", { name: mockComic.title });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      "src",
      `${mockComic.thumbnail.path}.${mockComic.thumbnail.extension}`
    );
    expect(img).toHaveAttribute("alt", mockComic.title);

    // Verificar título
    const title = screen.getByText(mockComic.title);
    expect(title).toBeInTheDocument();

    // Verificar fecha
    const date = screen.getByText("2023");
    expect(date).toBeInTheDocument();
  });
});
