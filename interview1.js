/*  
In JavaScript, objects are reference types. 
When you assign an object to a variable, 
you are actually assigning a reference to 
the object, not a copy of it. So in the given code,
 both user2 and ans variables are pointing to the same object in memory.

When you change the age property of the ans object,
 it will also change the age property of the user2 
 object because they are the same object.

To store the previous value of the user2 object,
 you can create a copy of it before modifying it.
  There are different ways to create a copy of 
  an object in JavaScript. One way is to use 
  the Object.assign() method to create a shallow copy of the object.
   Here's an example code that demonstrates this:
*/

const user2 = {
  name: "Rahul Kumar",
  age: 24,
};

// create a copy of user2 object
const prevUser2 = Object.assign({}, user2);

// modify the age property of user2
user2.age = 65;

console.log(user2); // { name: "Rahul Kumar", age: 65 }
console.log(prevUser2); // { name: "Rahul Kumar", age: 24 }



// Deep Copy and Shallow Copy in javaScript
// [Value of objects can be changed by two mwthods : (refrence and By Value)]
let obj={
    name:"gaurav"
}

let user=obj // {Here we assign obj Object to user Object 
//where obj refrence is copied in user Object , and 
//now both have same location and if we change value in any of these both Object's value will be changed}
// {Note}: this copy is done by (Refrence)

//Note: [Yedi jab hm variable ko copy krte hai to uski value copy hoti hai
// aur jab hm obj ko copy karte hhai to uski location copy hoti hai]
//eg:
/* [let name='sunil';
 let x=name;
 x='anil'
 console.log(x) // anil
 console.log(name) // sunil]
 */