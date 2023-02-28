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





