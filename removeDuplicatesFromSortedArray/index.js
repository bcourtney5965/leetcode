function removeDuplicates(nums) {
    // credit given: https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/3408328/the-simplest-o-n-javascript-typescript-two-pointers-solution
    var k = 1;
    for (var i = 1; i < nums.length; i++) {
        // if the current element is a new item
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}
console.log('scalloped potatoes::: JSON.stringify(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))', JSON.stringify(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])));
