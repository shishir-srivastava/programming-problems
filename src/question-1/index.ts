/**
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 * Bonus: Can you do this in one pass?
 *
 * @param list      The array of numbers from which we need to look up the two numbers
 * @param k         The number which the two numbers from the given array must sum up to
 *
 * Assumptions: All numbers are positive integers
 * Tags: #easy #google #recursion
 */

export const solution1 = (list: ReadonlyArray<number>, k: number): boolean => {
    if (list.length === 0) {
        return false;
    }
    if (k === 0) {
        return true;
    }

    const [firstNumber, ...rest] = list;
    if (k === firstNumber) {
        return true;
    } else if (firstNumber < k) {
        return solution1(rest, k - firstNumber) || solution1(rest, k);
    } else {
        return solution1(rest, k);
    }
};

export const solution2 = (list: ReadonlyArray<number>, k: number): boolean => {
    const totalListLength = list.length;

    // Create a two dimensional array
    // (k + 1) rows indicate possible sum of 0 to k
    // (list.length + 1) cols indicate possible length of subset of list
    const arr = new Array<boolean[]>(k + 1);
    for (let i = 0; i < k + 1; i++) {
        arr[i] = new Array<boolean>(totalListLength + 1);
    }

    // Set initial values.
    // If subset length is 0, then the answer is false.
    // If expected sum is 0, then the answer is true.
    for (let i = 0; i < k + 1; i++) {
        arr[i][0] = false;
    }

    for (let i = 1; i < totalListLength + 1; i++) {
        arr[0][i] = true;
    }

    for (let n = 1; n < totalListLength + 1; n++) {
        for (let sum = 1; sum < k + 1; sum++) {
            if (sum >= list[n - 1]) {
                arr[sum][n] = arr[sum - list[n - 1]][n - 1] || arr[sum][n - 1];
            } else {
                arr[sum][n] = arr[sum][n - 1];
            }
        }
    }

    return arr[k][totalListLength];
};
