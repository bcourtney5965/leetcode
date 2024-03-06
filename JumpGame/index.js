var locateBiggest = function (arr) {
    // determines the most advantageous index.
    // Defaults to smallest index
    return arr.reduce(function (acc, el, i) {
        if (el + i > acc.i + acc.el) {
            return {
                i: i,
                el: el,
            };
        }
        return acc;
    }, { i: 0, el: Number.MIN_VALUE });
};
function canJump(nums) {
    var canReachEnd = [];
    // Recursively determine if end can be reached from current position
    (function checkReachability(subArray) {
        // Base Case: array length = 1 or current element can reach the end
        if (subArray.length === 1 || subArray[0] >= subArray.length - 1) {
            canReachEnd.push(true);
            return;
        }
        // Determine the max number jumps possible
        var maxJumps = Math.min(subArray[0], subArray.length - 1);
        // Get best element
        var bestIndex = locateBiggest(subArray.slice(0, maxJumps)).i;
        // prevent endless loop
        if (bestIndex === 0) {
            canReachEnd.push(false);
            return;
        }
        // Greedily get next subarray & recursivily run func
        checkReachability(subArray.slice(bestIndex));
    })(nums);
    // Return true if at least one subarray can reach the end, otherwise return false
    return canReachEnd.reduce(function (result, reachable) { return result || reachable; }, false);
}
console.log('canJump([2,8,1,1,4])', canJump([2, 8, 1, 1, 4])); // true
console.log('canJump([4,4])', canJump([2, 3, 1, 1, 4])); // true
console.log('canJump([3,2,1,0,4])', canJump([3, 2, 1, 0, 4])); // false
console.log('canJump([2,0,0])', canJump([2, 0, 0])); // true
console.log('canJump([2,5,0,0])', canJump([2, 5, 0, 0])); // true
