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

const solution = (list: ReadonlyArray<number>, k: number): boolean => {
    if (list.length === 0) return false;
    if (k === 0) return true;

    const [firstNumber, ...rest] = list;
    if (k === firstNumber) {
        return true;
    } else if (firstNumber < k) {
        return solution(rest, k - firstNumber) || solution(rest, k);
    } else {
        return solution(rest, k);
    }
};

export default solution;