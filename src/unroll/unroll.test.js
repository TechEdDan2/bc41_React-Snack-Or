import { describe, it, expect } from "vitest";
import unroll from "./unroll";

describe("#unroll", () => {
    it("is a function", () => {
        expect(typeof unroll).toBe("function");
    });

    it("unrolls a 3x3 array correctly", () => {
        const input = [
            ["a", "b", "c"],
            ["d", "e", "f"],
            ["g", "h", "i"]
        ];
        const expectedOutput = ["a", "b", "c", "f", "i", "h", "g", "d", "e"];
        expect(unroll(input)).toEqual(expectedOutput);
    });

    it("unrolls a 4x4 array correctly", () => {
        const input = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ];
        const expectedOutput = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
        expect(unroll(input)).toEqual(expectedOutput);
    });

    it("handles an empty array", () => {
        const input = [];
        const expectedOutput = [];
        expect(unroll(input)).toEqual(expectedOutput);
    });
});
