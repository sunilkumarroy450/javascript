// prime number;

function solution(n) {
  let factor = 1;
  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      factor++;
    }
  }
  if (factor === 2) {
    return true;
  } else {
    return false;
  }
}
const res = solution(11);
if (res) {
  console.log("It is a prime number");
} else {
  console.log("It is not a prime number");
}
