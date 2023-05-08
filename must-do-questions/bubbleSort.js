/*
Bubble sort
Given an array A having N positive integers. Sort the array A using bubble sort.

Sample Input
input: N = 5
A : 5 1 6 3 7
Sample Output
A: 1 3 5 6 7
Sample Explanation
Self explanatory.

Expected Time Complexity
O(N*N)

Expected Space Complexity
O(1), i.e., constant space complexity.

Constraints
1 <= N <= 1000
*/

function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const arr = [5, 1, 6, 3, 7];
const res = solution(arr);
console.log(res);
