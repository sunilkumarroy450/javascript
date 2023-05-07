// Print the avg of even number from 1 to 100 in while loop

function solution(num) {
  let i = 1;
  sum = 0;
  count = 0;
  while (i < num) {
    if (i % 2 === 0) {
      sum += i;
      count++;
    }
    i++;
  }
  let avg = sum / count;
  return avg;
}
const res = solution(100);
console.log(res);
