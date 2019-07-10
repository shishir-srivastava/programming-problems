/**
 * Given an array of integers, return a new array such that
 * each element at index i of the new array is the product of
 * all the numbers in the original array except the one at i.
 *
 * For example, if our input was [1, 2, 3, 4, 5],
 * the expected output would be [120, 60, 40, 30, 24].
 *
 * If our input was [3, 2, 1], the expected output would be [2, 3, 6].
 *
 * Follow-up: what if you can't use division?
 *
 * #uber #difficult
 */

export const solution1 = (list: ReadonlyArray<number>): number[] => {
    let totalProduct = 1;
    for (const num of list) {
        totalProduct *= num;
    }

    const computedList: number[] = [];
    for (const num of list) {
        computedList.push(totalProduct / num);
    }

    return computedList;
};
