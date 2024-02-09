// run time 70ms & 57ms
// run time 61ms & 105ms 79
type NullableArray = (number | null)[];

function updateElements(
  nums: NullableArray,
  position: number,
  count: number,
): void {
  // remove duplicated elements in excess of 2
  nums.splice(position - (count - 2), count - 2);
}

const appendNull = (nums: NullableArray, duplicateCount: number): void => {
  // for each element duplicated in excess of 2
  for (; duplicateCount > 2; duplicateCount--) {
    // append a null to the end
    nums.push(null);
  }
};

function removeDuplicates(nums: number[]): number {
  // tracks elements of same value
  let duplicateCount: number = 1;
  // loop over
  for (let i = 0; i < nums.length; i++) {
    // after the first element
    if (i > 0) {
      // if current char is same as previous one
      if (nums[i] === nums[i - 1]) {
        //increment duplicateCount counter
        duplicateCount++;
      }
      // if we need to check preceeding elements for sameness
      // basically if the current element is different from the previous or its the final character
      if (nums[i] !== nums[i - 1] || i === nums.length - 1) {
        // if the duplicateCount flag is greater that 2
        if (duplicateCount > 2) {
          // update the necessary previous positions
          updateElements(nums, i, duplicateCount);
          // append necessary null's at end
          appendNull(nums, duplicateCount);
        }
        // reset duplicateCount
        duplicateCount = 1;
      }
    }
  }
  return nums.reduce((acc, el, i) => (el === null ? acc : i + 1));
}
