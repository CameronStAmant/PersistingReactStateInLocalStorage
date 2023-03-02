import { renderHook } from "@testing-library/react";
import { UseStickyState } from "./UseStickyState";

describe("sticky state", () => {
  test("value is sent to localStorage", () => {
    const setItem = jest.spyOn(window.localStorage.__proto__, "setItem");
    const getItem = jest.spyOn(window.localStorage.__proto__, "getItem");
    const { result } = renderHook(() => UseStickyState(50, "count"));

    console.log(result.current);

    expect(setItem).toHaveBeenCalled();
    expect(getItem).toHaveBeenCalled();
    expect(result.current[0]).toBe(50);
  });
});
