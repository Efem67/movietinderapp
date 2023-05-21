import { renderHook } from "@testing-library/react-hooks";
import useGetData from "../hooks/useGetData";

describe("useGetData", () => {
  test("should fetch data correctly", async () => {
    const mockData = [
      {
        id: 1,
        title: "Movie 1",
        imageUrl: "111.jpg",
        summary: "Lorem ipsum1",
        rating: 1.1,
      },
      {
        id: 2,
        title: "Movie 2",
        imageUrl: "222.jpg",
        summary: "Lorem ipsum2",
        rating: 2.2,
      },
    ];

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const { result, waitForNextUpdate } = renderHook(() => useGetData());

    expect(result.current[0]).toEqual([]);
    expect(result.current[1]).toBe(true);
    expect(result.current[2]).toBe(null);

    await waitForNextUpdate();

    expect(result.current[0]).toEqual(mockData);

    expect(result.current[1]).toBe(false);
    expect(result.current[2]).toBe(null);
  });

  test("should handle error during data fetching", async () => {
    const mockError = new Error("Can not fetch");

    global.fetch = jest.fn().mockRejectedValue(mockError);

    const { result, waitForNextUpdate } = renderHook(() => useGetData());

    expect(result.current[0]).toEqual([]);
    expect(result.current[1]).toBe(true);
    expect(result.current[2]).toBe(null);

    await waitForNextUpdate();

    expect(result.current[0]).toEqual([]);
    expect(result.current[1]).toBe(false);
    expect(result.current[2]).toBe(mockError);
  });
});
