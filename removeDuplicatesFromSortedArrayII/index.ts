function updateElements(
  nums: (number | null)[],
  position: number,
  count: number,
): void {
  // remove duplicated elements over 2
  nums.splice(position - (count - 2), count - 2);
}

const appendNull = (
  nums: (number | null)[],
  counter: number,
  output: number,
): void => {
  // for each element in excess of 2
  for (; counter > 2; counter--) {
    // add a null to the end and decrement item element length
    nums.push(null);
    output--;
  }
};

function removeDuplicates(nums: number[]): number {
  // instantiate counter (tracks elements of like type)
  let counter: number = 0;
  // instantiate output
  let output: number = 1;
  // instantiate boolean flag
  let sameCharacter: boolean = false;
  // loop over (starting with 2nd element)
  // [0, 0, 1, 1, 1, 1, 2, 3, 3]
  for (let i = 1; i < nums.length; i++) {
    // if the current element is the same as previous
    output++;
    if (nums[i] === nums[i - 1]) {
      //increment counter
      counter++;
    }
    // if we need to check preceeding elements for sameness
    // basically if the current element is different from the previous or its the final character
    if (nums[i] !== nums[i - 1] || i === nums.length - 1) {
      // if the counter flag is greater that 2
      if (counter > 2) {
        // update the necessary previous positions
        updateElements(nums, i, counter);
        // append necessary null's at end
        appendNull(nums, counter, output);
        // align the output with removed items
        output -= counter - 2;
        // reset counter for new duplicates
        counter = 0;
      }
    }
  }
  console.log('scalloped potatoes::: NUMS:::', JSON.stringify(nums));

  return output;
}

console.log(
  'scalloped potatoes::: removeDuplicates([0,0,1,1,1,1,2,3,3])',
  removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]),
);
