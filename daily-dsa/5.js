// min and max

function solution(arr) {
  let min = Infinity;
  max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(min);
  console.log(max);
}
const arr = [1, 2, 4, 5, 6, 10, 47];
solution(arr);
