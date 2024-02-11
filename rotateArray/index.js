// 1ST Solution O(N^2) time
// function rotate(nums: number[], k: number): void {
// k = k % nums.length
//   // instantiate placeholder
//   let placeholder: number;
//   // loop over nums K times
//   for (let i = 0; i < k; i++) {
//     // set placeholder to last element
//     placeholder = nums[nums.length - 1];
//     // loop over backwards
//     for (let j = nums.length - 1; j > 0; j--) {
//       // set current element to previous
//       nums[j] = nums[j - 1];
//     }
//     // set first element to placeholder
//     nums[0] = placeholder;
//   }
// }
// 2nd solution
// [1, 2, 3, 4, 5, 6, 7], (k = 3);
// [5, 6, 7, 1, 2, 3, 4];
// [-1,-100,3,99], k = 2
// [3, 99, -1, -100];
// function rotate(nums: number[], k: number): void {
// if (nums.length !== 1 || k !== 0) {
//   //get beginning
//   const front: number[] = nums.slice(0, nums.length - k);
//   // concat onto end
//   const back: number[] = nums.slice(nums.length - k);
//   nums = [...back, ...front];
// }
// }
// 3rd solution
// function rotate(nums: number[], k: number): void {
//   // 3 comments max
//   // [1, 2, 3, 4, 5, 6, 7], (k = 3)
//   // [5, 6, 7, 1, 2, 3, 4];
//   // instantiate placeholder
//   let placeholder: number;
//   // set placeholder to nums[3]
//   placeholder = nums[k];
//   // loop over nums
//   for (let i = 0; i < nums.length; i++) {
//     console.log('scalloped potatoes::: nums[i]', nums[i]);
//   }
//   //
// }
// 4th solution
var reverseArray = function (nums, l, r) {
    if (l === void 0) { l = 0; }
    if (r === void 0) { r = nums.length - 1; }
    while (r > l) {
        var temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        r--;
        l++;
    }
    return nums;
};
function rotate(nums, k) {
    k = k % nums.length;
    if (nums.length > 1 && k > 0) {
        // reverse full array
        nums = reverseArray(nums, 0);
        // reverse from k to nums.length - 1
        nums = reverseArray(nums, k, nums.length - 1);
        // reverse from 0 to k-1
        nums = reverseArray(nums, 0, k - 1);
    }
    console.log('scalloped potatoes::: nums', nums);
}
// console.log(
//   'scalloped potatoes::: rotate, should be: [5,6,7,1,2,3,4].... actual: ',
//   rotate([1, 2, 3, 4, 5, 6, 7], 3),
// );
// console.log(
//   'scalloped potatoes::: rotate, should be: [3,99,-1,-100]... actual ',
//   rotate([-1, -100, 3, 99], 2),
// );
console.log('scalloped potatoes::: rotate, should be: [2,1].... actual: ', rotate([1, 2], 1));
