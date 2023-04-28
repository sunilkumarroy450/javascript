/*
Check for prime
Given an integer N. Check whether N is prime or not.

Sample Input
input: N = 10
Sample Output
Output: No
Sample Input
input: N = 7
Sample Output
Output: Yes
Sample Explanation
Self explanatory.

Expected Time Complexity
O(sqrt{N})

Expected Space Complexity
O(1), i.e., constant space complexity.


Constraints
1 <= N <= 1000000000*/

function Solution(n) {
  let factor = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factor++;
    }
  }
  if (factor === 2) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
Solution(4);
