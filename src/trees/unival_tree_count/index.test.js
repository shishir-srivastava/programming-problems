const getUnivalTreeCount = require('./index').solution1;

test('Trees :: Unival tree count', () => {
  const testData = {
    value: 0,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 0,
      left: {
        value: 1,
        left: {
          value: 1,
          left: null,
          right: null,
        },
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
      right: {
        value: 0,
        left: null,
        right: null,
      },
    },
  };
  expect(getUnivalTreeCount(testData)).toStrictEqual(5);
});
