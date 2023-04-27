console.log(typeof undefined)//undefined
console.log('2'+2-'1');//'21'
console.log('2'+'2');//'22'


var x = 1;
if (function f(){}) {
  x += typeof f;
}
console.log(x);//1undefined


console.log(1 + "2" + "2");//'122'
console.log(+"1" + "1" + "2");//'112'
console.log("A" - "B" + "2");//'NaN2'
console.log("A" - "B" + 2);//NaN


var x = [typeof x, typeof y][1];
console.log(typeof typeof x);//string


var b = 1;
function outer(){
 	var b = 2
  	function inner(){
    	b++;
      	var b = 3;
      	console.log(b)
    }
  	inner();
}
outer();//3



var a = [1, 2, 3];
a[10] = 4;
console.log(a.length);//11



console.log(typeof null);//object
console.log(typeof typeof 1);//string


console.log("2" * "3");//6
console.log("12" / "6");//2
console.log("number" - 15);//NaN
console.log("foo" + + "bar");//fooNaN
console.log('true' == true);//false
console.log(false == 'false');//false