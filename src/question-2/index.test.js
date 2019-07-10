const getProductArray = require('./index').solution1;

test('Question 2', () => {
    expect(getProductArray([1, 2, 3, 4, 5])).toStrictEqual([
        120,
        60,
        40,
        30,
        24,
    ]);
});
