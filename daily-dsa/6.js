//reverseString

function solution(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let reversed = "";
  while (stack.length > 0) {
    reversed += stack.pop();
  }
  return reversed;
}
const res = solution("hello");
console.log(res);
