// Object-oriented Programming in javascript have fours pillars:-
//Encapsulation,Abstraction,Inheritance,Polymorphism

//#Encapsulation:-
//-It can be defined as “the packing of data and functions into one component”.
// Packing, which is also known as bundling, grouping and binding, simply means
// to bring together data and the methods which operate on data. The component
// can be a function, a class or an object.Packing enables “controlling access
// to that component”. When we have the data and related methods in a single unit,
// we can control how is it accessed outside the unit. This process is called Encapsulation.

//#Abstraction:-
//-It is basically a process of hiding the implementation details and displaying
// only the functionality to all the users. In simple words we can say, JavaScript
// Abstraction ignores the irrelevant details and display only the necessary ones.

//#Inheritance:-
//-It s a mechanism that allows us to create new classes on the basis of already
// existing classes. It provides flexibility to the child class to reuse the methods
// and variables of a parent class.

//#Polymorphism:-
//-It allows us to define the same method in different objects and provides the ability
// to call them depending upon the object.Polymorphism is nothing but one type but many forms.

//#Objects Literals

const circle = {
  radius: 1, // circle object has three property that are:radius,location,draw but assign value as a function to property draw , now it is known as method
  location: {
    // property is used to hold some value but method is used for some logic
    x: 1,
    y: 1,
  },
  draw: function () {
    // if a property of objects is function it is known as method:-here draw is a method
    console.log("draw");
  },
};
circle.draw();

//#Factories

//Factory Function

function createCircle(radius) {
  return {
    radius: radius, // we can write only radius here because in es6 if we have same key and same value name we used to write only key
    //radius,(both are fine)
    draw: function () {
      // method
      console.log("draw");
    },
  };
}

const circle1 = createCircle(3);
// console.log(circle1)
circle1.draw();
// console.log(circle1)

//#Constructor

// constructor function
// Nameing convenction we usd for constructor function is Upper Case of first letter

function Circle(radius) {
  // 'this' is the refrence to the object which is execute the code and after 'this' '.' is used to set the property to objects
  //console.log(this) //// It will refer to golobal object
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
// generally 'this' is a golbal object which is refreing to a window object
//
// So to aviod creating global object and specificly focus on the object we refreing to , so we used 'new'
const another = new Circle(2);
// When we use 'new' operator to call a function three things happen, that are:-
// It creates an empty objects
// It will set 'this' to point to that object
// It will also return our function, We do not have an explicite 'return' statement, it will 'return' automatically

//#Call and Apply

function Circle1(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

//below all are same
Circle1.call({}, 7); //both are same
const ans = new Circle1(7); //both are same(here 'this' creates empty obj)
const res=Object.keys(ans)//this property is to extract all the keys in the Objects
console.log(res)//[ 'radius', 'draw' ]
Circle1.apply({}, [1, 2, 3]); //this is simlar to both but it only takes arguments as an array

//##Some in built property of circle;
// #in (property);
 if('radius' in ans){
    console.log(`There is raidus in circle`)
 }
 else{
    console.log('There is no raidus key/property in the circle ')
 }


//# Example for Bind
var pokemon = {
  firstname: "Pika",
  lastname: "Chu ",
  getPokeName: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

var pokemonName = function () {
  console.log(this.getPokeName() + "I choose you!");
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon(); // 'Pika Chu I choose you!'





//Notes:-
//When we use the bind() method:
//1.the JS engine is creating a new pokemonName instance and binding pokemon as its this variable. It is important to understand that it copies the pokemonName function.
//2.After creating a copy of the pokemonName function it is able to call logPokemon(), although it wasn’t on the pokemon object initially. It will now recognizes its properties (Pika and Chu) and its methods.

// Or for Better clarity


var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon('sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms







//### In JavaScript we have two types of Types That are:-
// ## Value Types(Primitive)  or Reference Types;

//#Value Types:-Number, String, Boolean, Symbol, Null, Undefined;
//#Reference Types:-Objects, Funtions, Arrays (functions and arrays are objects)

//Notes:- Primitives are copied by their value

let x=10;
let y=x;
x=20;
console.log(x);//20
console.log(y);//10

// Objects are copied by their reference
let a={value:10};
let b=a;
a.value=20;

console.log(a);//{value:20}  it created a copy of this in a memory and adress of this located in variable 'a'
console.log(b);//{value:20}  it  also created a copy of this in a memory and adress of this located in variable 'b'
//But both 'a' and 'b' pointing same object in memory









//###Abstraction
//# Hide the details, Show the essentials
