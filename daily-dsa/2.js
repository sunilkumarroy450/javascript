// Divisible by k;

function solution(k, num) {
  let sum = 0;
  i = 1;
  while (i < num) {
    if (i % k === 0) {
      sum += i;
    }
    i++;
  }
  return sum;
}

const res = solution(2, 100);
console.log(res);
