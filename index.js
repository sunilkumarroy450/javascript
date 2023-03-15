// Bracket Notation
var user = {
  name: "Jamna Das",
  age: 25,
  gender: "female",
  city: "Bangalore",
  hobbies: "coding",
};

//const var1 = user["age"] = 15;
const var1 = (user["age"] = 15);

console.log(var1); // 15

console.log(user["name"]); // Jamna Das

console.log(user); /*{
    name: 'Jamna Das',
    age: 15,
    gender: 'female',
    city: 'Bangalore',
    hobbies: 'coding'
  }*/

// ///Dot Notataion///

var user1 = {
  name: "Hari Das",
  age: 25,
  gender: "female",
  city: "Bangalore",
  hobbies: "coding",
};

//const var2=user1.name = "Sunil Kumar"
const var2 = (user1.name = "Sunil Kumar");

console.log(var2);

// Interview Questions



