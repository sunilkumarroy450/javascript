/*
Balanced parenthesis
Given a string S having N characters. Any of the characters of the string are either of '(', '{', '[', ')', '}', ']'. Check whether the pairs and the orders of '{', '}', '(', ')', '[', ']' are correct or not.

Sample Input
input: N = 6
S : [()]{}
Sample Output
A: -"Yes"
Sample Input
input: N = 4
S : [(])
Sample Output
A: -"No"
Sample Explanation
Self explanatory.

Expected Time Complexity
O(N), where N is the size of the string S.

Expected Space Complexity
O(N), where N is the size of the string S.

Constraints
1 <= N <= 100000
*/

function solution(str) {
  let stack = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    } else {
      let last = stack.pop();
      if (str[i] !== map[last]) {
        return "No";
      }
    }
  }
  if (stack.length !== 0) {
    return "No";
  }
  return "Yes";
}
const res = solution("[()]{}");
console.log(res);
