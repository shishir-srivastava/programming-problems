const isSumPossible = require('./index').default;

test('Question 1', () => {
    expect(isSumPossible([10, 15, 3, 7], 17)).toBe(true);
});
