/*
Check for palindrome
Given a string of length N. Check if the given string is a palindrome without using any built-in functionality.

Sample Input
input: N = 9, string: malayalam
Sample Output
Output: Yes
Sample Input
input: N = 5, string: masai
Sample Output
Output: No
Sample Explanation
Self explanatory.

Expected Time Complexity
O(N), where N is the size of the string

Expected Space Complexity
O(1), i.e., constant space complexity.

Constraints
1 <= N <= 100000
*/

function solution(str) {
  let bag = "";
  for (let i = str.length - 1; i >= 0; i--) {
    bag += str[i];
  }
  if (bag === str) {
    return true;
  } else {
    return false;
  }
}
let str = "malayalam";
const ans = solution(str);
if (ans) {
  console.log("Yes");
} else {
  console.log("No");
}



//or

function checkPalindrome(N, str) {
    let left = 0;
    let right = N - 1;
    while (left < right) {
      if (str[left] !== str[right]) {
        return "No";
      }
      left++;
      right--;
    }
    return "Yes";
  }

  
// or

function checkPalindrome(N, str) {
    for (let i = 0; i < N / 2; i++) {
      if (str[i] !== str[N - 1 - i]) {
        return "No";
      }
    }
    return "Yes";
  }
  