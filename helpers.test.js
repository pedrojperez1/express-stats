const { timeStamp } = require('console');
const { mean, median, mode } = require('./helpers');

describe("Test mean function", () => {
    test("mean function should handle positive integers", () => {
        expect(mean([2, 4, 6])).toEqual(4);
    });
    test("mean function should handle negative integers", () => {
        expect(mean([-2, -4, 6])).toEqual(0);
    });
    test("mean function should handle floating point numbers", () => {
        expect(mean([2.2, 4.4, 6.6])).toBeCloseTo(4.4);
    });
});

describe("Test median function", () => {
    test("median function should handle positive integers", () => {
        expect(median([1, 15, 100])).toEqual(15);
    });
    test("median function should handle negative integers", () => {
        expect(median([-1, -15, 100])).toEqual(-1);
    });
    test("median function should handle floating point numbers", () => {
        expect(median([1, 15.4, 100.1])).toBeCloseTo(15.4);
    });
});

describe("Test mode function", () => {
    test("mode function should handle positive integers", () => {
        expect(mode([1, 15, 100, 15])).toEqual(15);
    });
    test("mode function should handle negative integers", () => {
        expect(mode([-1, -1, 15, 100])).toEqual(-1);
    });
    test("mode function should handle floating point numbers", () => {
        expect(mode([4.3, 4.3, 15, 100])).toBeCloseTo(4.3);
    });
});