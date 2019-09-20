/**
 * Source: Daily Coding Problem: Problem #8
 *
 * A unival tree (which stands for "universal value") is a tree where all nodes
 * under it have the same value.
 *
 * Given the root to a binary tree, count the number of unival subtrees.
 *
 * For example, the following tree has 5 unival subtrees:
 *
 *          0
 *         /\
 *        1  0
 *          /\
 *         1 0
 *        /\
 *       1 1
 *
 * @param root      The root node of a binary tree.
 *
 * Tags: #easy #google #recursion #trees
 */

interface ITreeNode {
  value: number;
  left: ITreeNode | null;
  right: ITreeNode | null;
}

export const solution1 = (treeRoot: ITreeNode): number => {
  let count = 0;

  const checkUnivalTree = (root: ITreeNode): boolean => {
    /**
     * If the root is a leaf node, then it is a unival tree.
     */
    if (!root.left && !root.right) {
      count++;
      return true;
    }

    const isLeftSubTreeUnival =
      (root.left && checkUnivalTree(root.left)) || true;
    const isRightSubTreeUnival =
      (root.right && checkUnivalTree(root.right)) || true;

    if (
      isLeftSubTreeUnival &&
      isRightSubTreeUnival &&
      root.value === ((root.left && root.left.value) || root.value) &&
      root.value === ((root.right && root.right.value) || root.value)
    ) {
      count++;
      return true;
    } else {
      return false;
    }
  };

  checkUnivalTree(treeRoot);

  return count;
};
