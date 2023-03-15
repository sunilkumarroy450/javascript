//////Objects

// var student =
//   {
//     Name : "Sunil",
//     Age : 28,
//     Profession : "Coding",
//     Hobbies : "Cooking and Singing",
//     Gender : "Male",
//     Smoking : true
//   };
// console.log(student);

// console.log(student["Age"]);
// console.log(student["Name"]);
// console.log(student["Hobbies"]);

// console.log(student.Name);

//update the details in array

// var details =["sunil",28,"gauva"];
// details[1] = 30;
// details[2] = "rahul";
// console.log(details);

///////
// var student =
//   {
//     Name : "Sunil",
//     Age : 28,
//     Profession : "Coding",
//     Hobbies : "Cooking and Singing",
//     Gender : "Male",
//     Smoking : true
//   };

// console.log(student["Age"]);
// console.log(student["Name"]);
// console.log(student["Hobbies"]);

// student["Age"] = 30;
// student["Name"] = "rahul";
// student.Gender = "Female";

// console.log(student);

//// Objects in class

// var details = ["Jamna Das", 25, "female", "bangalore", "coding"];

// // console.log(details.length);

// var user = {
//               name : "Jamna Das",
//               age : 25,
//               gender : "female",
//               city : "Bangalore",
//               hobbies : "coding",
//            };

// console.log(user);

// var details_of =
//   {
//     name :"SunilKumar",
//     age : 28,
//     batch : "fw_18",
//     rollno : '0198',
//     city : "patna",
//     hobbies : "singing",
//     smoking : false
//   };

// console.log(details_of);

// var details_of =
//   {
//     name :"SunilKumar",
//     age : 28,
//     batch : "fw_18",
//     rollno : '0198',
//     city : "patna",
//     hobbies : ["singing","cooking"],
//     smoking : false
//   };

// console.log(details_of);

// ///Bracket Notation//
// var user = {
//               name : "Jamna Das",
//               age : 25,
//               gender : "female",
//               city : "Bangalore",
//               hobbies : "coding",
//            };

// console.log(user["name"]);
// console.log(user["city"]);
// console.log(user["age"]);
// console.log(user["hobbies"]);

// ////updating and adding new entery//
// var user = {
//               name : "Jamna Das",
//               age : 25,
//               gender : "female",
//               city : "Bangalore",
//               hobbies : "coding",
//            };

// user["city"] = "Hajipur";
// console.log(user)
// user["mobile"] = "9488893948";
// console.log(user);

// ///Dot Notataion///

// var user = {
//               name : "Jamna Das",
//               age : 25,
//               gender : "female",
//               city : "Bangalore",
//               hobbies : "coding",
//            };

// console.log(user.name);
// console.log(user.age);
// console.log(user.gender);
// console.log(user.city);
// console.log(user.hobbies);

// user.age =39;
// console.log(user);

// user.state ="bihar";
// console.log(user);

///// delete in objects//

// var user = {
//               name : "Jamna Das",
//               age : 25,
//               gender : "female",
//               city : "Bangalore",
//               hobbies : "coding",
//            };

// delete user["city"];   //bracket
// delete user.age;   ///dot
// console.log(user);

///

// var user = {
//               name : "Jamna Das",
//               age : 25,
//               gender : "female",
//               city : "Bangalore",
//               hobbies : "coding",
//            };

// var d="name";
// console.log(user[d]);  ///brackrt

// var user = {
//               name : "Jamna Das",
//               age : 25,
//               gender : "female",
//               city : "Bangalore",
//               hobbies : ["coding","cooking"],
//            };

// var y = user.hobbies;
// console.log(y);//dot
// console.log(y[0]);
// console.log(y[1]);
// console.log(user.hobbies[0]);
// console.log(user.hobbies[1]);

///

// var details_of =
//   {
//     name :"SunilKumar",
//     age : 28,
//     batch : "fw_18",
//     rollno : '0198',
//     city : "patna",
//     hobbies : ["singing","cooking"],
//     smoking : false,

//     address : {
//       state : "Bihar",
//       country :"India",
//       pincode : 844505,
//       city : "hajipur"
//     }
//   };

// console.log(details_of);

// console.log(details_of.address);

// console.log(details_of.address.pincode);

//////running a loop in object//

///////For in loop ///////

// var details_of =
//   {
//     name :"SunilKumar",
//     age : 28,
//     batch : "fw_18",
//     rollno : '0198',
//     city : "patna",
//     hobbies : ["singing","cooking"],
//     smoking : false,

//     address : {
//       state : "Bihar",
//       country :"India",
//       pincode : 844505,
//       city : "hajipur"
//     }
//   };

// // for(var i in details_of)
// //   {
// //     console.log(i);    ////this loop print keys
// //   }

// for(var i in details_of)
//   {
//     // console.log(i," ",details_of[i]);

//   }

/// Inbuilt Function////
// var details_of =
//   {
//     name :"SunilKumar",
//     age : 28,
//     batch : "fw_18",
//     rollno : '0198',
//     city : "patna",
//     hobbies : ["singing","cooking"],
//     smoking : false,

//     address : {
//       state : "Bihar",
//       country :"India",
//       pincode : 844505,
//       city : "hajipur"
//     }
//   };

// //inbuilt function

// console.log(Object.keys(details_of));
// console.log(Object.values(details_of));

/////////////////////////////////////////////////

// var details_of =
//   {
//     name :"SunilKumar",
//     age : 28,
//     batch : "fw_18",
//     rollno : '0198',
//     city : "patna",
//     hobbies : ["singing","cooking"],
//     smoking : false,

//     address : {
//       state : "Bihar",
//       country :"India",
//       pincode : 844505,
//       city : "hajipur"
//     }
//   };

// for(var i in details_of)
//   {
//     if(details_of[i] == 28)
//     {
//       console.log(i);
//     }
//   }

///////////iw assignment

// var str = "masai";

// diary = {};

// for(var i=0; i<str.length; i++)
// {
//   var char = str[i]

//   if(diary[char] == undefined)
//   {
//     diary[char] = 1
//   }
//   else
//   {
//     diary[char] = diary[char] + 1
//   }

// }

// for(var k in diary)
// {
//   console.log(k," ",diary[k]);
// }

// ///////
// var arr = [7, 2, 7, 7, 3, 4, 2];

// collection = {};

// for(var i=0;i<arr.length;i++)
//   {
//     var g = arr[i];
//     if(collection[g] == undefined)
//     {
//       collection[g] =1
//     }
//     else
//     {
//       collection[g] = collection[g] +1;
//     }
//   }

// for(var t in collection)
//   {
//     console.log(t,"",collection[t]);
//   }

// //////
// var arr =[3,2,7,7,3,4,2,];

// object = {};
// for(var i=0;i<arr.length;i++)
//   {
//     var num = arr[i];
//     if(object[num] == undefined)
//     {
//       object[num] = 1
//     }
//     else
// {
//   object[num] =object[num] + 1;///////check after class
// }

//   }

// var sum =0;
// for(var key in object)
//   {
//     if(object[key] == 2)
//     {
//       sum = sum + object[key];
//     }
//   }
// console.log(sum);

// ////

// var arr =[3,2,7,7,3,4,2,];

// object = {};
// for(var i=0;i<arr.length;i++)
//   {
//     var num = arr[i];
//     if(object[num] == undefined)
//     {
//       object[num] = 1
//     }
//     else
// {
//   object[num] =object[num] + 1;
// }

//   }             /////check after class

// var sum =0;
// for(var key in object)
//   {
//     if(object[key] == 1)
//     {
//       console.log(key);
//     }
//   }

////////

// var arr = [
//               {name : "Sunil", age : 30},
//               {name : "Naveen", age : 32},
//               { name : "Rajeev", age : 38}
// ];

// // INDIRECT
// // var x = arr[0];
// // console.log(x.name);
// // console.log(x.age);

// // Direct

// console.log(arr[0].name);
// console.log(arr[1].name);
// console.log(arr[2].name);

// console.log(arr[1].age);

//////////

// var masai_students=[
//   {name:"Sunil",rollno:26,batch:"ftweb_18"},
//   {name:"harilal",rollno:46,batch:"ftweb_18"},
// {name:"Rahul",rollno:57,batch:"ftweb_18"},
//   ];

// for(var i=0;i<masai_students.length;i++)
//   {
//     // console.log(masai_students[i]);
//     // console.log(masai_students[i].name);
//     console.log(masai_students[i]["rollno"]);
//   }

////////

// var amazon = [
//               {name : "Speakers", price: 5400, rating : 4},
//               {name : "headphones", price : 3000, rating : 3},
//               {name : "playstation", price : 20000, rating : 5},
//               {name : "alexa", price : 3000, rating : 4}
//             ];

// var product = {name : "mixer", price : 2000, rating:4};

// amazon.push(product);

// for(var i=0;i<amazon.length;i++)
//   {
//     if(amazon[i].price < 5000)
//     {
//       console.log(amazon[i].name,amazon[i].rating);
//     }
//   }

///////avg of all ratings

// var amazon = [
//               {name : "Speakers", price: 5400, rating : 4},
//               {name : "headphones", price : 3000, rating : 3},
//               {name : "playstation", price : 20000, rating : 5},
//               {name : "alexa", price : 3000, rating : 4}
//             ];

// var product = {name : "mixer", price : 2000, rating:4};

// amazon.push(product);

// var sum=0;
// for(var i=0;i<amazon.length;i++)
//   {
//    sum = sum + amazon[i].rating;
//   }

// console.log(sum/amazon.length);

///////
// var products =["mackbook","iphone","ipad"];
// var prices =[500000,40000,50000]

// data =[];
// for(var i=0;i<products.length;i++)
// {
//   var packet={};
//   packet.name = products[i];
//   packet.price = prices[i];

//   data.push(packet);
// }

// console.log(data);

//////Objects Method/////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\/

// var details = {

//   name : "Sunil",
//   age : 32,
//   print : function()
//           {
//             console.log("My name is Sunil");
//             console.log("I live in Patna");
//           }
// };

// // console.log(details.name);

// details.print();

////////

// var details = {

//   name : "Rahul",
//   age : 32,
//   print : function(name,age)
//           {
//            console.log("My name is",name);
//             console.log("My age is",age);
//           }
// };

// details.print("Sunil",28);

////

// var details = {

//   name : "Rahul",
//   age : 32,
//   sum : function(x,y)
//           {
//           var value = x+y;
//             return value;
//           }
// };

//Indirect method
// var s=details.sum(28,28);
// // console.log(s);

//Direct method

//////

// var details = {

//   name : "Rahul",
//   age : 32,
//   print : function(name,age)
//           {
//           console.log(this.name);
//             console.log(this.age);
//           }
// };
// details.print("sunil",45);

// var details = {

//   name : "Rahul",
//   age : 32,
//   print : function(name,age)
//           {
//           console.log(this.name,name);
//             console.log(this.age,age);
//           }
// };
// details.print("sunil",45);

////updating the information////

// var details = {

//   name : "Rahul",
//   age : 32,
//   print : function()
//           {
//           console.log(this.name);
//             console.log(this.age);
//           }
// };

// details.name ="Gaurav";
// details.print();

/////////

// var details = {

//   name : "Rahul",
//   age : 32,
//   print : function()
//           {
//           console.log(this.name);
//             console.log(this.age);
//           }
// };

// details.name ="Ram";
// details.age =20;
// details.print();
// console.log("\n");

// details.name ="Suraj";
// details.age =40;
// details.print();
// console.log("\n");

// details.name ="Rani";
// details.age =90;
// details.print();

////////////////////////////////////////////////////////////

// var data =
// {
//   name : "Ram",
//   age : 34,
//   hobbies :["coding","reading"],
//   print:function()
//                 {
//                   console.log(this.name);
//                   console.log(this.age);
//                   console.log(this.hobbies);
//                 }
// };

// data.print();

////// hobbies join()   in function ///////////

// var data =
// {
//   name : "Ram",
//   age : 34,
//   hobbies :["coding","reading","cooking","sleeping","killing"],
//   print:function()
//                 {
//                   console.log(this.name);
//                   console.log(this.age);
//                   console.log(this.hobbies.join());
//                 }
// };

// data.print();

///////////

// var rectangle =
//   {
//     length : 10,
//     breadth : 20,
//     perimeter : function()
//                 {
//                   console.log(2*(this.length+this.breadth));
//                 },
//     area : function()
//           {
//             console.log(this.length*this.breadth);
//           }
//   };

// rectangle.area();
// rectangle.perimeter();
// console.log("\n");
// // updating
// rectangle.length = 100;
// rectangle.breadth =800;

// rectangle.area();
// rectangle.perimeter();
///***********************/*******************************************//

// Create an object with the following functionality
// Ability to add student details and 3 subject marks

// var details = {

//   data : [],
//   addStudent : function(nam, mat, sci, eng)
//               {

//                 var obj = {};
//                 obj.name = nam;
//                 obj.maths = mat;
//                 obj.science = sci;
//                 obj.english = eng;

//                 this.data.push(obj);

//               }
// };

// details.addStudent("Shubham",10,20,30);
// details.addStudent("Rahul",15,25,35);
// details.addStudent("Rohit",20,30,40);

// console.log(details.data);
