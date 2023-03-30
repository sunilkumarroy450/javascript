// What is hoisting?
/*
In JavaScript, hoisting is a mechanism where variable and function declarations are moved to the top of their respective scopes during the compilation phase, before the code is executed. This means that even if a variable or function is declared after it is used, it will still be available in the scope where it is used.

Here are some examples of hoisting in JavaScript:


Hoisting with variable declarations:

console.log(a); // undefined
var a = 10;
In the above code, even though the variable a is declared after it is used, 
it is still available due to hoisting. However, at the time of execution, 
its value will be undefined, since it has not yet been assigned a value.


Hoisting with function declarations:

foo(); // "Hello, world!"
function foo() {
  console.log("Hello, world!");
}

In the above code, the function foo is called before it is declared, but due to hoisting,
 it is still available and can be executed without any error.

Hoisting does not occur with let/const declarations:

console.log(b); // ReferenceError: b is not defined
let b = 20;

*/


//What is event-loop?
/*
The event loop is a mechanism in JavaScript that enables asynchronous processing of events 
and non-blocking I/O operations. It is an essential part of the JavaScript runtime environment,
 which allows the code to be executed without blocking the execution of other code. 
 The event loop continuously monitors the call stack and the message queue to execute tasks in a non-blocking way.



Here are some examples of using the event loop in JavaScript:

setTimeout(): The setTimeout() function is a common example of using the event loop in JavaScript.
 It is used to execute a function after a specified delay. 
 When the timeout is over, the function is added to the message queue and executed by the event loop.




console.log("start");

setTimeout(() => {
  console.log("timer expired");
}, 2000);

console.log("end");
Output:

start
end
timer expired





##What is the Difference between Webpage and Website?

The webpage is a single document on the web using a unique URL,
 while a website is a collection of multiple webpages in which 
 information on a related topic or another subject is linked together
  under the same domain address.



  ###What is difference between Website and Web application?

  The main difference between Website and Web application is that a 
  Web application is a piece of software which is accessed by the browser 
  and the browser is an application which is used for browsing the internet,
   whereas a Website is a collection of related web pages.



   ###What is closure?

   Closures are functions that refer to independent (free) variables.
    In other words, the function defined in the closure ‘remembers’ 
    the environment in which it was created.



function numberGenerator() {
  // Local “free” variable that ends up within the closure
  var num = 1;
  function checkNumber() { 
    console.log(num);
  }
  num++;
  return checkNumber;
}

var number = numberGenerator();
number(); // 2

Eg of Functions in closure

function sayHello() {
  var say = function() { console.log(hello); }
  // Local variable that ends up within the closure 
  var hello = 'Hello, world!';
  return say;
}
var sayHelloClosure = sayHello(); 
sayHelloClosure(); // ‘Hello, world!’

*/