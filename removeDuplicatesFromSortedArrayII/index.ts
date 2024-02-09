// run time 70ms & 57ms
type NullableArray = (number | null)[];

function updateElements(
  nums: NullableArray,
  position: number,
  count: number,
): void {
  // remove duplicated elements in excess of 2
  nums.splice(position - (count - 2), count - 2);
}

const appendNull = (
  nums: NullableArray,
  duplicateCount: number,
  outputCount: number,
): void => {
  // for each element duplicated in excess of 2
  for (; duplicateCount > 2; duplicateCount--) {
    // append a null to the end and decrement outputCount
    nums.push(null);
    outputCount--;
  }
};

function removeDuplicates(nums: number[]): number {
  // tracks elements of same value
  let duplicateCount: number = 1;
  // count non-null elements
  let outputCount: number = 0;
  // loop over
  for (let i = 0; i < nums.length; i++) {
    // for each element increment outputCount
    outputCount++;
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
          appendNull(nums, duplicateCount, outputCount);
          // align the outputCount with removed items
          outputCount -= duplicateCount - 2;
          // reset duplicateCount for new duplicateCount
        }
        // reset duplicateCount
        duplicateCount = 1;
      }
    }
  }
  return outputCount;
}
