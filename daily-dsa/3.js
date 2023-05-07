//Multiplication of num

function solution(num){
    let i=1;
    while(i<=num*10){
      if(i%num === 0){
        console.log(i)
      }
      i++;
    }
};
solution(10);