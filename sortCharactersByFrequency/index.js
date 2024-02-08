// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
// Return the sorted string. If there are multiple answers, return any of them.
// Example 1:
// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:
// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:
// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.
// Constraints:
// 1 <= s.length <= 5 * 105
// s consists of uppercase and lowercase English letters and digits.
function frequencySort(s) {
    var charFrequencyTracker = {};
    // ascertain character frequencies
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        charFrequencyTracker[char] = (charFrequencyTracker[char] || 0) + 1;
    }
    var characterFrequencies = Object.entries(charFrequencyTracker).map(function (_a) {
        var char = _a[0], frequency = _a[1];
        return ({
            char: char,
            frequency: frequency,
        });
    });
    // sort characters by frequency
    characterFrequencies.sort(function (a, b) { return b.frequency - a.frequency; });
    return characterFrequencies.reduce(function (acc, _a) {
        var char = _a.char, frequency = _a.frequency;
        return acc + char.repeat(frequency);
    }, '');
}
console.log('scalloped potatoes::: frequencySort("tree")', frequencySort('tree'));
