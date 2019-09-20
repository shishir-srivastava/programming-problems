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

export const solution2 = (list: ReadonlyArray<number>): number[] => {
    let numZero: number = 0;
    let zeroElementIndex: number = -1;
    const computedList: number[] = [];

    for (let index = 0; index < list.length; index++) {
        if (list[index] === 0) {
            numZero++;
            zeroElementIndex = index;
        }
    }

    if (numZero === 1) {
        // If there is one zero in the list, then only that index in returned array
        // will have a non-zero result
        let totalProduct = 1;
        for (let index = 0; index < list.length; index++) {
            if (index !== zeroElementIndex) {
                totalProduct *= list[index];
            }
            computedList.push(0);
        }
        computedList[zeroElementIndex] = totalProduct;
    } else if (numZero > 1) {
        // If there are more than one zero in the list, then all products will be zero
        list.forEach(() => {
            computedList.push(0);
        });
    } else {
        // There are no zeros in the list, so computation has to proceed as usual
        // We create two arrays: left[i] contains product of all numbers to the left of list[i]
        // not including the i-th element.
        // right[i] contains product of all numbers to the right of list[i]
        // not including the i-th element.
        // The solution at i-th position is product of left[i] and right[i]

        const left: number[] = [];
        const right: number[] = [];

        // At the first element, there are no elements to the left, so product is 1
        left[0] = 1;
        for (let index = 1; index < list.length; index++) {
            left[index] = left[index - 1] * list[index - 1];
        }

        // At the last element, there are no elements to the right, so product is 1
        right[list.length - 1] = 1;
        for (let index = list.length - 2; index >= 0; index--) {
            right[index] = right[index + 1] * list[index + 1];
        }

        // Final solution is calculated by multiplying elements in left and right arrays
        for (let index = 0; index < list.length; index++) {
            computedList[index] = left[index] * right[index];
        }
    }

    return computedList;
};
