const isSumPossible = require('./index').solution2;

test('Question 1', () => {
    // expect(isSumPossible([10, 15, 3, 7], 17)).toBe(true);
    expect(isSumPossible([2, 4, 3, 1], 5)).toBe(true);
});
