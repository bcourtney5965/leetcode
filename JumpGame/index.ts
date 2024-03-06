interface MyObject {
  i: number;
  el: number;
}
const locateBiggest = (arr: number[]): MyObject => {
  // determines the most advantageous index.
  // Defaults to smallest index
  return arr.reduce(
    (acc, el, i) => {
      if (el + i > acc.i + acc.el) {
        return {
          i,
          el,
        };
      }
      return acc;
    },
    { i: 0, el: Number.MIN_VALUE },
  );
};

// Recursively determine if end can be reached from current position
function canJump(nums: number[]): boolean | number[] {
  // Base Case: array length = 1 or current element can reach the end
  if (nums.length === 1 || nums[0] >= nums.length - 1) {
    return true;
  }

  // Determine the max number jumps possible
  const maxJumps: number = Math.min(nums[0], nums.length - 1);

  // Get best element
  const { i: bestIndex } = locateBiggest(nums.slice(0, maxJumps));

  // prevent endless loop
  if (bestIndex === 0) {
    return false;
  }
  // Greedily get next subarray & recursivily run func
  return canJump(nums.slice(bestIndex));
}

console.log('canJump([2,8,1,1,4])', canJump([2, 8, 1, 1, 4])); // true
console.log('canJump([4,4])', canJump([2, 3, 1, 1, 4])); // true
console.log('canJump([3,2,1,0,4])', canJump([3, 2, 1, 0, 4])); // false
console.log('canJump([2,0,0])', canJump([2, 0, 0])); // true
console.log('canJump([2,5,0,0])', canJump([2, 5, 0, 0])); // true
