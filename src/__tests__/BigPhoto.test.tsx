import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import BigPhoto from "../components/BigPhoto";

describe("BigPhoto", () => {
  const testData = [
    {
      id: "1",
      imageURL: "test.png",
      title: "testTitle",
      summary: "Test Summary",
      rating: 1.1,
    },
  ];

  test("should render the component with movie data", async () => {
    const onOptionChoseMock = jest.fn();
    const { getByText, getByAltText } = await act(async () =>
      render(<BigPhoto data={testData} onOptionChose={onOptionChoseMock} />)
    );

    const movieTitle = getByText("testTitle");
    const movieRating = getByText("(1.1/10)");
    const movieImage = getByAltText("Movie");

    expect(movieTitle).toBeInTheDocument();
    expect(movieRating).toBeInTheDocument();
    expect(movieImage).toBeInTheDocument();
  });

  test("should call onOptionChose after click into reject button", async () => {
    const onOptionChoseMock = jest.fn();
    await act(async () =>
      render(<BigPhoto data={testData} onOptionChose={onOptionChoseMock} />)
    );

    const rejectButton = screen.getByRole("button", { name: /reject/i });

    fireEvent.click(rejectButton);
    expect(onOptionChoseMock).toHaveBeenCalledWith({
      option: "reject",
      movieId: "1",
    });
  });

  test("calls onOptionChose after click into accept button", async () => {
    const onOptionChoseMock = jest.fn();
    await act(async () =>
      render(<BigPhoto data={testData} onOptionChose={onOptionChoseMock} />)
    );

    const acceptButton = screen.getByRole("button", { name: /accept/i });

    fireEvent.click(acceptButton);

    expect(onOptionChoseMock).toHaveBeenCalledWith({
      option: "accept",
      movieId: "1",
    });
  });
});
