/*
Sort Using Quick Sort
Given an input array, sort the array using Quick Sort

Note: Implement Quick Sort

Sample Input
N = 6
arr[] = { 2, 6, 3, 0, 4, 1 }
Sample Output
Sorted Array: 0 1 2 3 4 6
Sample Explanation
Self Explanatory
Expected Time Complexity
N: size of array

O(N*logN), Average Case O(N^2), Worst Case

Expected Space Complexity
O(logN), Average Case O(N), Worst case

Constraints
1<= N <= 10^5
*/

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
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
const arr = [2, 6, 3, 0, 4, 1];
const res = solution(arr);
console.log(res);
