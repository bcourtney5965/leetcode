function removeDuplicates(nums: number[]): number {
  // instantiate count variable
  let count: number = 1;
  // instantiate index variable
  let index: number = 1;
  // loop over nums
  for (let i = 1; i < nums.length; i++) {
    // if current element is different from previous
    if (nums[i] === nums[i - 1]) {
      count++;
      // if current element IS same as previous
    } else if (nums[i] !== nums[i - 1]) {
      // reset count
      count = 1;
    }

    // if count is less than or equal to 2
    if (count <= 2) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
}

console.log(
  'scalloped potatoes::: removeDuplicates([1,1,1,2,2,3])',
  removeDuplicates([1, 1, 1, 2, 2, 3]),
);
// console.log(
//   'scalloped potatoes::: removeDuplicates([0,0,1,1,1,1,2,3,3])',
//   removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]),
// );
