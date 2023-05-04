/*
Check for anagrams
Check whether two given strings X and Y of sizes N and M respectively are anagram of each other or not.

Sample Input
input: N = 4, X = abcd, M = 4, Y = dacb
Sample Output
Output: Yes
Sample Explanation
All the characters of string "abcd" is present in "dacb" and in same frequencies. Hence both are anagram of each other.

Expected Time Complexity
O(NLog(N)), where N is the lenght of the given string

Expected Space Complexity
O(1), i.e., constant space complexity.

Constraints
1 <= N,M <= 100000
*/

function solution(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      return true;
    } else {
      return false;
    }
  }
}
let str1 = "abcd";
let str2 = "dacb";
const res = solution(str1.split("").sort(), str2.split("").sort());
if (res) {
  console.log("Yes");
} else {
  console.log("No");
}
