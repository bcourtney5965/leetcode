// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// function groupAnagrams(strs: string[]): string[][] {
//   // 47.1061
//   const startTime = performance.now();
//   //instantiate hash map anagramGroups
//   const anagramGroups: Record<string, string[]> = {};
//   //loops over strs backwards
//   for (let i = strs.length - 1; i >= 0; i--) {
//     //  sort str
//     const sortedWord: string = strs[i].split('').sort().join('');
//     // if sortedWord isn't in anagramGroups
//     if (!anagramGroups.hasOwnProperty(sortedWord)) {
//       // add it
//       anagramGroups[sortedWord] = [];
//     }
//     // add strs[i] to anagramGroups object
//     anagramGroups[sortedWord].push(strs[i]);
//   }
//   const output: string[][] = Object.values(anagramGroups);
//   const endTime = performance.now();
//   const duration = endTime - startTime;
//   console.log('duration', duration * 1000, 'ms');
//   return output;
// }

// function groupAnagrams(strs: string[]): string[][] {
//   // 36.2701
//   const startTime = performance.now();
//   //instantiate hash map anagramGroups
//   const anagramGroups: Map<string, string[]> = new Map();
//   //loops over strs backwards
//   for (let i = strs.length - 1; i >= 0; i--) {
//     //  sort str
//     const sortedWord: string = strs[i].split('').sort().join('');
//     // if sortedWord isn't in anagramGroups
//     if (!anagramGroups.has(sortedWord)) {
//       // add it
//       anagramGroups.set(sortedWord, []);
//     }
//     // add strs[i] to anagramGroups object
//     anagramGroups.get(sortedWord)!.push(strs[i]);
//   }
//   const output: string[][] = Array.from(anagramGroups.values());
//   const endTime = performance.now();
//   const duration = endTime - startTime;
//   console.log('duration', duration * 1000, 'ms');
//   return output;
// }

function groupAnagrams(strs: string[]): string[][] {
  //instantiate hash map anagramGroups
  const anagramGroups: Map<string, string[]> = new Map();
  //loops over strs
  for (const word of strs) {
    //  sort str
    const sortedWord: string = word.split('').sort().join('');
    // if sortedWord isn't in anagramGroups
    if (!anagramGroups.has(sortedWord)) {
      // add it
      anagramGroups.set(sortedWord, []);
    }
    // add word to anagramGroups object
    anagramGroups.get(sortedWord)!.push(word);
  }
  return Array.from(anagramGroups.values());
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

// manage dotfiles
